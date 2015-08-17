﻿using Neptuo.Activators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Bootstrap
{
    /// <summary>
    /// Collection of <see cref="IBootstrapTask"/>.
    /// </summary>
    public interface IBootstrapTaskCollection
    {
        /// <summary>
        /// Adds <paramref name="factory"/>
        /// </summary>
        /// <typeparam name="T">Type of bootstrap task provided by <paramref name="factory"/>.</typeparam>
        /// <param name="factory">Provider for bootstrap task of type <typeparamref name="T"/>.</param>
        /// <returns>Self (for fluency).</returns>
        IBootstrapTaskCollection Add<T>(IFactory<T> factory)
            where T : class, IBootstrapTask;

        /// <summary>
        /// Returns <c>true</c> when <paramref name="factory"/> for bootstrap task of type <paramref name="T"/> is registered.
        /// </summary>
        /// <typeparam name="T">Type of bootstrap task provided by <paramref name="factory"/>.</typeparam>
        /// <param name="factory">Provider for bootstrap task of type <typeparamref name="T"/>.</param>
        /// <returns><c>true</c>when <paramref name="factory"/> for bootstrap task of type <paramref name="T"/> is registered; <c>false</c> otherwise.</returns>
        bool TryGet<T>(out IFactory<T> factory)
            where T : class, IBootstrapTask;
    }
}