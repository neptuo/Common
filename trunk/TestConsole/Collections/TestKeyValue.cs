﻿using Neptuo.Collections.Specialized;
using Neptuo.Diagnostics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsole.Collections
{
    class TestKeyValue : TestClass
    {
        public static void Test()
        {
            ProviderKeyValueCollection collection = new ProviderKeyValueCollection();
            collection.AddProvider("id", ProvideID);

            DebugIteration("Read id", 10000000, () =>
            {
                collection.Get("id", 1);
            });

            Dictionary<string, object> storage = new Dictionary<string, object>();
            storage["id"] = 5;

            DebugIteration("Read id", 10000000, () =>
            {
                object id;
                storage.TryGetValue("id", out id);
            });
        }

        static bool ProvideID(string key, out object id)
        {
            id = 5;
            return true;
        }
    }
}
