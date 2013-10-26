﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Data.Commands.Validation
{
    public interface ICommandValidator<TCommand>
    {
        IValidationResult Validate(TCommand command);
    }
}
