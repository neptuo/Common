﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Domain
{
    /// <summary>
    /// Decribes model that contains information if the model is in valid state.
    /// This information is mostly set from <see cref="IValidationDispatcher"/>.
    /// </summary>
    public interface IValidatableModel
    {
        /// <summary>
        /// Whether the model is in valid state.
        /// </summary>
        bool IsValid { get; set; }
    }
}
