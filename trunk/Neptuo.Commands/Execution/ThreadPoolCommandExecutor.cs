﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Neptuo.Commands.Execution
{
    /// <summary>
    /// Handles commands in new thread.
    /// </summary>
    public class ThreadPoolCommandExecutor : PoolCommandExecutor
    {
        public ThreadPoolCommandExecutor(ThreadPoolCommandExecutorFactory poolFactory)
            : base(poolFactory)
        { }

        /// <summary>
        /// Handles command in new thread.
        /// </summary>
        /// <param name="executor">Inner executor.</param>
        /// <param name="command">Command to handle.</param>
        protected override void DoHandleCommand(ICommandExecutor executor, object command)
        {
            Thread thread = new Thread(executor.Handle);
            thread.Start(command);
        }
    }
}
