﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Neptuo.Internals
{
    internal class ScheduleEventContext : ISchedulingContext
    {
        public IEnumerable<HandlerDescriptor> Handlers { get; private set; }
        public ArgumentDescriptor Argument { get; private set; }
        public Envelope Envelope { get; private set; }

        private readonly Action<ScheduleEventContext> execute;

        public ScheduleEventContext(IEnumerable<HandlerDescriptor> handlers, ArgumentDescriptor argument, Envelope envelope, Action<ScheduleEventContext> execute)
        {
            Handlers = handlers;
            Argument = argument;
            Envelope = Envelope;
            this.execute = execute;
        }

        public void Execute()
        {
            execute(this);
        }
    }
}
