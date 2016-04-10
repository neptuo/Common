﻿using Neptuo.Models.Keys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo
{
    /// <summary>
    /// The factory used for creating instance of <see cref="IKey"/>.
    /// </summary>
    public static class KeyFactory
    {
        private static Func<Type, IKey> keyFactory = targetType => GuidKey.Create(Guid.NewGuid(), targetType.AssemblyQualifiedName);

        /// <summary>
        /// Sets <paramref name="keyFactory"/> to be used for generating new keys.
        /// </summary>
        /// <param name="keyFactory">The key generator function.</param>
        public static void Set(Func<Type, IKey> keyFactory)
        {
            Ensure.NotNull(keyFactory, "keyFactory");
            KeyFactory.keyFactory = keyFactory;
        }

        /// <summary>
        /// Creates new instance of a key implementing <see cref="IKey"/> for the <paramref name="targetType"/>.
        /// </summary>
        /// <param name="targetType">The type for which key is generated.</param>
        /// <returns>Newly generated key for the <paramref name="targetType"/>.</returns>
        public static IKey Create(Type targetType)
        {
            return keyFactory(targetType);
        }
    }
}
