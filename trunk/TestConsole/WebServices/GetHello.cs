﻿using Neptuo.Web.Services;
using Neptuo.Web.Services.Behaviors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsole.WebServices
{
    public class GetHello : IWithOutput<string>, IWithRedirect, IGet
    {
        public string Location { get; private set; }
        public string Output { get; private set; }

        public void Get()
        {
            Location = "http://www.google.com/";
            Output = "Hello, World";
        }
    }

    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
