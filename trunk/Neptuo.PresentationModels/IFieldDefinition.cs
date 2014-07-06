﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.PresentationModels
{
    /// <summary>
    /// Defines field of model.
    /// </summary>
    public interface IFieldDefinition
    {
        /// <summary>
        /// Field name (unique in model).
        /// </summary>
        string Identifier { get; }

        /// <summary>
        /// Field type.
        /// </summary>
        IFieldType FieldType { get; }

        /// <summary>
        /// Collection of provided meta data values.
        /// </summary>
        IFieldMetadataCollection Metadata { get; }
    }
}
