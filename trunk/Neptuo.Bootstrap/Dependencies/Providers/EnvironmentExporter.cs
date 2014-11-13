﻿using Neptuo.Linq.Expressions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Bootstrap.Dependencies.Providers
{
    public class EnvironmentExporter : ITaskDependencyExporter
    {
        public void Export(ITaskExportDescriptor export, object value)
        {
            MethodInfo methodInfo = typeof(EngineEnvironment).GetMethod("Use");
            methodInfo = methodInfo.MakeGenericMethod(value.GetType());
            methodInfo.Invoke(Engine.Environment, new object[] { value, null });
        }
    }
}
