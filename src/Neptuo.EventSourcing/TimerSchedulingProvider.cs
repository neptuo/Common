﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Neptuo
{
    [Obsolete]
    public abstract class TimerSchedulingProvider : ISchedulingProvider
    {
        private readonly object timersLock = new object();
        private readonly List<Tuple<Timer, ISchedulingContext>> timers = new List<Tuple<Timer, ISchedulingContext>>();

        public abstract TimeSpan Compute(DateTime executeAt);

        public bool IsLaterExecutionRequired(Envelope envelope)
        {
            DateTime executeAt;
            if (envelope.TryGetExecuteAt(out executeAt))
                return true;

            return false;
        }

        public void Schedule(ISchedulingContext context)
        {
            DateTime executeAt;
            if (context.Envelope.TryGetExecuteAt(out executeAt))
            {
                TimeSpan delay = Compute(executeAt);
                if (delay > TimeSpan.Zero)
                {
                    Timer timer = new Timer(
                        OnScheduled,
                        context,
                        delay,
                        TimeSpan.FromMilliseconds(-1)
                    );

                    lock (timersLock)
                        timers.Add(new Tuple<Timer, ISchedulingContext>(timer, context));
                }
            }
        }

        private void OnScheduled(object state)
        {
            ISchedulingContext context = (ISchedulingContext)state;

            lock (timersLock)
            {
                Tuple<Timer, ISchedulingContext> item = timers.FirstOrDefault(t => t.Item2 == context);
                if (item != null)
                    timers.Remove(item);
            }

            context.Execute();
        }
    }
}
