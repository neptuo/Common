﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.PresentationModels
{
    public class CopyModelValueProvider
    {
        public IModelDefinition ModelDefinition { get; private set; }

        public CopyModelValueProvider(IModelDefinition modelDefinition)
        {
            if (modelDefinition == null)
                throw new ArgumentNullException("modelDefinition");

            ModelDefinition = modelDefinition;
        }

        /// <summary>
        /// Sets values to <paramref name="targetSetter"/> from <paramref name="sourceGetter"/>.
        /// </summary>
        /// <param name="targetSetter">Target.</param>
        /// <param name="sourceGetter">Source.</param>
        public void Update(IModelValueSetter targetSetter, IModelValueGetter sourceGetter)
        {
            foreach (IFieldDefinition field in ModelDefinition.Fields)
            {
                object value;
                if (sourceGetter.TryGetValue(field.Identifier, out value))
                    targetSetter.SetValue(field.Identifier, value);
            }
        }
    }
}
