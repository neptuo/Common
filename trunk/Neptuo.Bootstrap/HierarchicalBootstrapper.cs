﻿using Neptuo.Bootstrap.Constraints;
using Neptuo.Bootstrap.Dependencies;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Bootstrap
{
    /// <summary>
    /// TODO: Implement Hierarchical bootstrapper.
    /// </summary>
    /// <remarks>
    /// Řezení bootstrap tasků by mělo být takto:
    /// 1) Ti, co X exportují (vytvářejí instanci).
    /// 2) Ti, co X importují i exportují (donaplňují instanci) => co atribut [Building]?
    /// 3) Ti, co jen importují (má se předávat do kontextu/env/container).
    /// </remarks>
    public class HierarchicalBootstrapper : BootstrapperBase, IBootstrapper, IBootstrapTaskRegistry, ITaskExecutor
    {
        private readonly HierarchicalContext context;
        private readonly List<BootstrapTaskDescriptor> descriptors = new List<BootstrapTaskDescriptor>();

        public HierarchicalBootstrapper(HierarchicalContext context)
            : base(context.Activator, context.ConstraintProvider)
        {
            Guard.NotNull(context, "context");
            this.context = context;
        }

        public void Register(IBootstrapTask task)
        {
            Guard.NotNull(task, "task");
            BootstrapTaskDescriptor descriptor = new BootstrapTaskDescriptor(task.GetType());
            descriptor.Instance = task;
        }

        public void Register<T>() 
            where T : IBootstrapTask
        {
            BootstrapTaskDescriptor descriptor = new BootstrapTaskDescriptor(typeof(T));
            descriptor.Instance = CreateInstance<T>();
            descriptors.Add(descriptor);
        }

        public override void Initialize()
        {
            foreach (BootstrapTaskDescriptor descriptor in descriptors)
                ExecuteDescriptor(descriptor);
        }

        private void ExecuteDescriptor(BootstrapTaskDescriptor descriptor)
        {
            if (descriptor.IsExecuted)
                return;

                //Import

            if (AreConstraintsSatisfied(descriptor.Instance))
            {
                descriptor.Instance.Initialize();

                //Export
            }

            descriptor.IsExecuted = true;
        }


        void ITaskExecutor.Execute(IBootstrapTask task)
        {
            Guard.NotNull(task, "task");
            BootstrapTaskDescriptor descriptor = descriptors.FirstOrDefault(d => d.Instance == task);
            if (descriptor == null)
            {
                Type taskType = task.GetType();
                descriptor = descriptors.FirstOrDefault(d => d.Type == taskType);

                if (descriptor == null)
                    descriptors.Add(descriptor = new BootstrapTaskDescriptor(taskType) { Instance = task });
            }

            ExecuteDescriptor(descriptor);
        }





        private class BootstrapTaskDescriptor : ITaskDescriptor
        {
            public Type Type { get; private set; }
            public IBootstrapTask Instance { get; set; }

            public List<Type> Imports { get; private set; }
            public List<Type> Exports { get; private set; }

            public bool IsExecuted { get; set; }

            public BootstrapTaskDescriptor(Type type)
            {
                Guard.NotNull(type, "type");
                Type = type;
                Imports = new List<Type>();
                Exports = new List<Type>();
            }
        }
    }
}
