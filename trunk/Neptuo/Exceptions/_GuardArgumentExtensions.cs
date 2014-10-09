﻿using Neptuo.Exceptions.Helpers;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo
{
    /// <summary>
    /// Extensions for argument exceptions.
    /// </summary>
    public static class _GuardArgumentExtensions
    {
        /// <summary>
        /// Creates exception <see cref="ArgumentException"/> for argument <paramref name="argumentName"/> 
        /// and message formatted from <paramref name="format"/> and <paramref name="formatParameters"/>.
        /// </summary>
        /// <param name="guard"></param>
        /// <param name="argumentName"></param>
        /// <param name="format"></param>
        /// <param name="formatParameters"></param>
        /// <returns><see cref="ArgumentException"/>.</returns>
        [DebuggerStepThrough]
        public static ArgumentException Argument(this GuardExceptionHelper guard, string argumentName, string format, params object[] formatParameters)
        {
            Guard.NotNull(guard, "guard");
            Guard.NotNullOrEmpty(argumentName, "argumentName");
            Guard.NotNullOrEmpty(format, "format");
            return new ArgumentException(argumentName, String.Format(format, formatParameters));
        }
        
        /// <summary>
        /// Creates exception <see cref="ArgumentNullException"/> with argument <paramref name="argumentName"/> 
        /// and message formatted from <paramref name="format"/> and <paramref name="formatParameters"/>.
        /// </summary>
        /// <param name="guard">Exception helper.</param>
        /// <param name="argumentName">Argument name.</param>
        /// <param name="format">Message or format string.</param>
        /// <param name="formatParameters">Optional format string parameters.</param>
        /// <returns><see cref="ArgumentNullException"/>.</returns>
        [DebuggerStepThrough]
        public static ArgumentNullException ArgumentNull(this GuardExceptionHelper guard, string argumentName, string format, params object[] formatParameters)
        {
            Guard.NotNull(guard, "guard");
            Guard.NotNullOrEmpty(argumentName, "argumentName");
            Guard.NotNullOrEmpty(format, "format");
            return new ArgumentNullException(argumentName, String.Format(format, formatParameters));
        }

        /// <summary>
        /// Creates exception <see cref="ArgumentOutOfRangeException"/> with argument <paramref name="argumentName"/> 
        /// and message formatted from <paramref name="format"/> and <paramref name="formatParameters"/>.
        /// </summary>
        /// <param name="guard">Exception helper.</param>
        /// <param name="argumentName">Argument name.</param>
        /// <param name="format">Message or format string.</param>
        /// <param name="formatParameters">Optional format string parameters.</param>
        /// <returns><see cref="ArgumentOutOfRangeException"/>.</returns>
        [DebuggerStepThrough]
        public static ArgumentOutOfRangeException ArgumentOutOfRange(this GuardExceptionHelper guard, string argumentName, string format, params object[] formatParameters)
        {
            Guard.NotNull(guard, "guard");
            Guard.NotNullOrEmpty(argumentName, "argumentName");
            Guard.NotNullOrEmpty(format, "format");
            return new ArgumentOutOfRangeException(argumentName, String.Format(format, formatParameters));
        }
    }
}
