﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.PresentationModels
{
    public interface IModelMetadataCollection
    {
        bool TryGet(string key, out object value);
    }
}
