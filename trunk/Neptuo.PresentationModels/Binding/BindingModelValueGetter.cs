﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.PresentationModels.Binding
{
    public class BindingModelValueGetter : IModelValueGetter
    {
        protected IBindingModelValueStorage Storage { get; private set; }
        protected IBindingConverterCollection ConverterCollection { get; private set; }
        protected IModelDefinition ModelDefinition { get; private set; }

        public BindingModelValueGetter(IBindingModelValueStorage storage, IBindingConverterCollection converterCollection, IModelDefinition modelDefinition)
        {
            if (storage == null)
                throw new ArgumentNullException("storage");

            if (converterCollection == null)
                throw new ArgumentNullException("converterCollection");

            if (modelDefinition == null)
                throw new ArgumentNullException("modelDefinition");

            Storage = storage;
            ConverterCollection = converterCollection;
            ModelDefinition = modelDefinition;
        }

        public bool TryGetValue(string identifier, out object value)
        {
            IFieldDefinition targetField = ModelDefinition.Fields.FirstOrDefault(f => f.Identifier == identifier);
            if (targetField == null)
                throw new ArgumentOutOfRangeException("identifier", String.Format("Unnable to find field '{0}' in model '{1}'.", identifier, ModelDefinition.Identifier));

            string sourceValue;
            if (Storage.TryGetValue(identifier, out sourceValue))
            {
                if (ConverterCollection.TryConvert(sourceValue, targetField, out value))
                    return true;
            }

            value = null;
            return false;
        }
    }
}
