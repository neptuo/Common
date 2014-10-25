﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Collections.Specialized
{
    /// <summary>
    /// Base implementation of <see cref="IKeyValueCollection"/> using <see cref="Dictionary"/>.
    /// </summary>
    public class KeyValueCollection : Dictionary<string, object>, IKeyValueCollection
    {
        /// <summary>
        /// Whether this collection can be modified.
        /// </summary>
        public bool IsReadOnly { get; set; }

        public KeyValueCollection()
        { }

        public KeyValueCollection(int capacity)
            : base(capacity)
        { }

        public KeyValueCollection(IEqualityComparer<string> comparer)
            :  base(comparer)
        { }

        public KeyValueCollection(IDictionary<string, object> source)
            : base(source)
        { }

        public IKeyValueCollection Set(string key, object value)
        {
            if (IsReadOnly)
                throw Guard.Exception.InvalidOperation("Collection is in read-only mode.");

            Guard.NotNull(key, "key");
            this[key] = value;
            return this;
        }

        public bool TryGet<T>(string key, out T value)
        {
            Guard.NotNull(key, "key");

            object sourceValue;
            if (TryGetValue(key, out sourceValue) && sourceValue != null)
                return ConvertTo(sourceValue, out value);

            return TryGetDefault(key, out value);
        }

        /// <summary>
        /// Called when trying to read key which is not present in the collection.
        /// </summary>
        /// <typeparam name="T">Required value type.</typeparam>
        /// <param name="key">Key which value should be returned.</param>
        /// <param name="value">Output value associted with <paramref name="key"/>.</param>
        /// <returns><c>true</c> if collection contains value with <paramref name="key"/> as key; <c>false</c> otherwise.</returns>
        protected virtual bool TryGetDefault<T>(string key, out T value)
        {
            value = default(T);
            return false;
        }

        /// <summary>
        /// Tries to convert <paramref name="sourceValue"/> to <typeparamref name="T"/>.
        /// </summary>
        /// <typeparam name="T">Required value type.</typeparam>
        /// <param name="sourceValue">Value from the collection.</param>
        /// <param name="value"><paramref name="sourceValue" /> in the required type.</param>
        /// <returns><c>true</c> if conversion was successfull; <c>false</c> otherwise.</returns>
        protected virtual bool ConvertTo<T>(object sourceValue, out T value)
        {
            if (sourceValue is T)
            {
                value = (T)sourceValue;
                return true;
            }

            object targetValue;
            if (Converts.Try(sourceValue.GetType(), typeof(T), sourceValue, out targetValue))
            {
                value = (T)targetValue;
                return true;
            }

            value = default(T);
            return false;
        }
    }
}
