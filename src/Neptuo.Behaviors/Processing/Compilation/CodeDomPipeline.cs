﻿using Neptuo.Behaviors.Processing.Compilation.Internals;
using Neptuo.Behaviors.Providers;
using Neptuo.Collections.Specialized;
using Neptuo.Compilers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Behaviors.Processing.Compilation
{
    /// <summary>
    /// Code dom generated and compiled class based implementation of <see cref="IPipeline{T}"/>.
    /// For <typeparamref name="T"/> single class is generated and compiled for better behavior instances creation.
    /// </summary>
    /// <typeparam name="T">Type of inner handler.</typeparam>
    public class CodeDomPipeline<T> : IPipeline<T>
    {
        private readonly IBehaviorProvider behaviorProvider;
        private readonly ICompilerConfiguration compilerConfiguration;
        private IPipeline<T> generatedPipeline;

        public CodeDomPipeline(CodeDomPipelineConfiguration configuration)
        {
            Ensure.NotNull(configuration, "configuration");
            behaviorProvider = configuration.BehaviorProvider;
            compilerConfiguration = configuration.CompilerConfiguration;
        }

        private void EnsureGeneratedPipeline()
        {
            if (generatedPipeline == null)
                GeneratePipeline();
        }

        private void GeneratePipeline()
        {
            CodeDomPipelineGenerator generator = new CodeDomPipelineGenerator(typeof(T), behaviorProvider, compilerConfiguration);
            Type pipelineType = generator.GeneratePipeline();
            generatedPipeline = (IPipeline<T>)Activator.CreateInstance(pipelineType);
        }

        public IPipeline<T> AddBehavior(PipelineBehaviorPosition position, IBehavior<T> behavior)
        {
            EnsureGeneratedPipeline();
            generatedPipeline.AddBehavior(position, behavior);
            return this;
        }

        public Task ExecuteAsync(T handler, IKeyValueCollection customValues)
        {
            EnsureGeneratedPipeline();
            return generatedPipeline.ExecuteAsync(handler, customValues);
        }
    }
}