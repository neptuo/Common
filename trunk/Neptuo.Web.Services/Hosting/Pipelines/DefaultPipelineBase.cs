﻿using Neptuo.Web.Services.Hosting.Behaviors;
using Neptuo.Web.Services.Hosting.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Web.Services.Hosting.Pipelines
{
    public abstract class DefaultPipelineBase<T> : PipelineBase<T>
        where T: new()
    {
        protected override IHandlerFactory<T> GetHandlerFactory(IHttpContext context)
        {
            return new DefaultHandlerFactory<T>();
        }
    }
}
