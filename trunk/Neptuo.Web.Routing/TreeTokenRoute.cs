﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Routing;

namespace Neptuo.Web.Routing
{
    public class TreeTokenRoute : TokenRouteBase
    {
        protected override bool IsAbsolute
        {
            get { throw new NotImplementedException(); }
        }

        public TreeTokenRoute(IRouteHandler routeHandler, string suffix = null, bool caseSensitive = false, IRouteParameterService parameterService = null)
            : base(routeHandler, suffix, caseSensitive, parameterService)
        {

        }

        protected override bool MatchUrl(string url, RouteValueDictionary values)
        {
            throw new NotImplementedException();
        }

        public override VirtualPathData GetVirtualPath(RequestContext requestContext, RouteValueDictionary values)
        {
            throw new NotImplementedException();
        }
    }
}
