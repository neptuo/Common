﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Web.Services.Hosting.Http.MediaTypes
{
    /// <summary>
    /// Base implementation of <see cref="IMediaTypeCollection"/> using <see cref="HashSet<>"/>.
    /// </summary>
    public class MediaTypeCollectionBase : IMediaTypeCollection
    {
        /// <summary>
        /// Inner storage.
        /// </summary>
        private HashSet<IMediaTypeContext> storage = new HashSet<IMediaTypeContext>();

        public void Add(IMediaTypeContext item)
        {
            Guard.NotNull(item, "item");
            storage.Add(item);
        }

        public IMediaTypeContext FindContentTypeContext(IHttpRequest request)
        {
            foreach (IMediaTypeContext context in storage)
            {
                if (context.IsContentTypeMatch(request))
                    return context;
            }
            return null;
        }

        public IMediaTypeContext FindAcceptTypeContext(IHttpRequest request)
        {
            foreach (IMediaTypeContext context in storage)
            {
                if (context.IsAccessTypeMatch(request))
                    return context;
            }
            return null;
        }
    }
}
