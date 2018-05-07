﻿using Neptuo.Models.Keys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Models.Repositories
{
    /// <summary>
    /// Describes contract for getting domain models by its key.
    /// </summary>
    /// <typeparam name="TDomainModel">A type of the domain model.</typeparam>
    /// <typeparam name="TKey">A type of the domain model key.</typeparam>
    public interface IReadOnlyRepository<TDomainModel, in TKey>
        where TKey : IKey
        where TDomainModel : IDomainModel<TKey>
    {
        /// <summary>
        /// Tries to find model with the <paramref name="key"/>.
        /// </summary>
        /// <param name="key">A key of the model to find.</param>
        /// <returns>An instance of the model with the key; <c>null</c> if such model doesn't exist.</returns>
        TDomainModel Find(TKey key);
    }
}
