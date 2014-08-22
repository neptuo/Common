﻿using Neptuo;
using Neptuo.Unity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsole.Delegates
{
    class TestDelegates : TestClass
    {
        public static string ResolveUrl(string relativeUrl)
        {
            Console.WriteLine(relativeUrl);
            return relativeUrl;
        }

        public static void Test()
        {
            IDependencyContainer dependencyContainer = new UnityDependencyContainer()
                .RegisterInstance<ResolveUrl>(ResolveUrl);


            ResolveUrl resolveUrl = dependencyContainer.Resolve<ResolveUrl>();
            resolveUrl("~/root");
        }
    }

    public delegate string ResolveUrl(string relativeUrl);
}
