﻿using Neptuo;
using Neptuo.Collections.ObjectModel;
using Neptuo.ComponentModel;
using Neptuo.PresentationModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestWpf.PresentationModels
{
    public class FieldDefinitionViewModel : ObservableObject, IFieldView
    {
        public IFieldDefinition FieldDefinition { get; private set; }
        public object FieldValue { get; set; }

        public FieldDefinitionViewModel(IFieldDefinition fieldDefinition)
        {
            Guard.NotNull(fieldDefinition, "fieldDefinition");
            FieldDefinition = fieldDefinition;
        }

        public void SetValue(object value)
        {
            FieldValue = value;
        }

        public object GetValue()
        {
            return FieldValue;
        }
    }
}
