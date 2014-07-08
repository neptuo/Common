﻿using Neptuo.Web.Services.Behaviors;
using Neptuo.Web.Services.Hosting.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Web.Services.Hosting.Behaviors
{
    public class WithOutputBehavior<T> : WithBehaviorBase<IWithOutput<T>>
    {
        protected override void Execute(IWithOutput<T> handler, IHttpContext context)
        {
            string output = handler.Output as string;
            if (output != null)
                context.Response.Write(output);
        }
    }
}