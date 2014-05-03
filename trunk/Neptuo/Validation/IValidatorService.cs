﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Validation
{
    public interface IValidatorService
    {
        IValidationResult Validate<TModel>(TModel model);
        IValidationResult Validate(object model);
    }
}
