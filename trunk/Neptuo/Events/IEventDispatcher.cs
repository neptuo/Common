﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Events
{
    /// <summary>
    /// Provides ability to publish events.
    /// </summary>
    public interface IEventDispatcher
    {
        /// <summary>
        /// Publishes <paramref name="eventData"/> to event bus.
        /// </summary>
        /// <typeparam name="TEvent">Type of event data.</typeparam>
        /// <param name="eventData">Instance of event data.</param>
        void Publish<TEvent>(TEvent eventData);
    }
}
