﻿using Neptuo.Collections.Specialized;
using Neptuo.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsole.Tokens
{
    static class TestTokenWriter
    {
        public static void Test()
        {
            TokenWriter writer = new TokenWriter("Hello, my name is {Name} and I am from {City}.");
            string result = writer.Format(new KeyValueCollection().Set("Name", "Peter").Set("City", "Prague"));
            Console.WriteLine(result);
        }
    }
}
