﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Commands
{
    /// <summary>
    /// Optional base 
    /// </summary>
    public interface ICommand
    {
        string Guid { get; }
    }
}
