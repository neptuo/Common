﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Data.Queries
{
    public class DoubleQuerySearch : IQuerySearch
    {
        public List<double> Value { get; set; }
        
        protected DoubleQuerySearch(double value)
        {
            Value = new List<double>();
            Value.Add(value);
        }

        protected DoubleQuerySearch(IEnumerable<double> value)
        {
            Value = new List<double>(value);
        }

        public static DoubleQuerySearch Create(double value)
        {
            return new DoubleQuerySearch(value);
        }

        public static DoubleQuerySearch Create(IEnumerable<double> value)
        {
            return new DoubleQuerySearch(value);
        }
    }
}
