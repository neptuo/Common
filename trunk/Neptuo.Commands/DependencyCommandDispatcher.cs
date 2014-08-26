﻿using Neptuo.Commands.Events;
using Neptuo.Commands.Execution;
using Neptuo.Commands.Handlers;
using Neptuo.Events;
using Neptuo.Validators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Commands
{
    /// <summary>
    /// Command dispatcher based on registration from <see cref="IDependencyProvider"/>.
    /// </summary>
    public class DependencyCommandDispatcher : ICommandDispatcher
    {
        private IDependencyProvider dependencyProvider;
        private IEventDispatcher eventDispatcher;

        /// <summary>
        /// Initializes new instance with <paramref name="dependencyProvider"/>.
        /// </summary>
        /// <param name="dependencyProvider">Source for registrations.</param>
        public DependencyCommandDispatcher(IDependencyProvider dependencyProvider, IEventDispatcher eventDispatcher)
        {
            Guard.NotNull(dependencyProvider, "dependencyProvider");
            Guard.NotNull(eventDispatcher, "eventDispatcher");
            this.dependencyProvider = dependencyProvider;
            this.eventDispatcher = eventDispatcher;
        }

        /// <summary>
        /// Handles <paramref name="command"/>.
        /// </summary>
        /// <param name="command">Command to handle.</param>
        public void Handle(object command)
        {
            Guard.NotNull(command, "command");
            HandleInternal(command, true);
        }

        protected virtual void HandleInternal(object command, bool handleException)
        {
            ICommandExecutor executor = null;
            try
            {
                ICommandExecutorFactory executorFactory = dependencyProvider.Resolve<ICommandExecutorFactory>();
                executor = executorFactory.CreateExecutor(command);
                executor.OnCommandHandled += OnCommandHandled;
                executor.Handle(command);
            }
            catch (Exception e)
            {
                if (handleException)
                {
                    HandleException(e);
                    return;
                }

                Exception commandException = command as Exception;
                if (commandException != null)
                    throw new CommandDispatcherException("Unahandled exception during command execution.", commandException);

                throw new CommandDispatcherException("Unahandled exception during command execution.", e);
            }
            finally
            {
                IDisposable disposable = executor as IDisposable;
                if (disposable != null)
                    disposable.Dispose();
            }
        }

        private void OnCommandHandled(ICommandExecutor executor, object command)
        {
            executor.OnCommandHandled -= OnCommandHandled;
            ICommand guidCommand = command as ICommand;
            if (guidCommand != null)
                eventDispatcher.Publish(new CommandHandled(guidCommand));
            else
                eventDispatcher.Publish(new CommandHandled(command));
        }

        /// <summary>
        /// Handles exceptions occured while handling or validating command.
        /// </summary>
        /// <param name="exception">Exception that occured.</param>
        protected virtual void HandleException(Exception exception)
        {
            Guard.NotNull(exception, "exception");
            HandleInternal(exception, false);
        }
    }
}
