﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.PresentationModels.TypeModels
{
    public class ReflectionModelValueProvider<TModel> : IModelValueProvider
    {
        public Type ModelType { get; private set; }
        public TModel Model { get; private set; }
        private Dictionary<string, PropertyInfo> properties = new Dictionary<string, PropertyInfo>();

        public ReflectionModelValueProvider(TModel model)
        {
            if (model == null)
                throw new ArgumentNullException("model");

            Model = model;
            ModelType = model.GetType();
        }

        public bool TryGetValue(string identifier, out object value)
        {
            if (identifier == null)
                throw new ArgumentNullException("identifier");

            value = GetPropertyInfo(identifier).GetValue(Model);
            return true;
        }

        public virtual void SetValue(string identifier, object value)
        {
            if (identifier == null)
                throw new ArgumentNullException("identifier");

            PropertyInfo propertyInfo = GetPropertyInfo(identifier);
            if(propertyInfo == null)
                throw new ArgumentOutOfRangeException("identifier", String.Format("Unnable to find property '{0}' in '{1}'.", identifier, ModelType.FullName));

            if (value != null && !propertyInfo.PropertyType.IsAssignableFrom(value.GetType()))
            {
                TypeConverter typeConverter = TypeDescriptor.GetConverter(propertyInfo.PropertyType);
                if (typeConverter != null)
                    value = typeConverter.ConvertFrom(value);
            }

            propertyInfo.SetValue(Model, value);
        }

        protected PropertyInfo GetPropertyInfo(string identifier)
        {
            PropertyInfo propertyInfo;
            if (!properties.TryGetValue(identifier, out propertyInfo))
            {
                propertyInfo = ModelType.GetProperty(identifier);
                if (propertyInfo == null)
                    throw new ArgumentOutOfRangeException("identifier", String.Format("'{0}' doesn't contain property named '{1}'.", ModelType.FullName, identifier));

                properties[identifier] = propertyInfo;
            }
            return propertyInfo;
        }
    }

    public class ReflectionModelValueProvider : ReflectionModelValueProvider<object>
    {
        public ReflectionModelValueProvider(object model)
            : base(model)
        { }
    }
}
