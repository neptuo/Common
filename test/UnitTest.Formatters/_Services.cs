﻿using Neptuo;
using Neptuo.Activators;
using Neptuo.Formatters;
using Neptuo.Formatters.Metadata;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UnitTest.Formatters
{
    public class ExtendedCompositeTypeFormatter : CompositeTypeFormatter
    {
        public ExtendedCompositeTypeFormatter(ICompositeTypeProvider provider, IFactory<ICompositeStorage> storageFactory)
            : base(provider, storageFactory)
        { }

        protected override bool TryLoad(Stream input, IDeserializerContext context, CompositeType type, ICompositeStorage storage)
        {
            if (!base.TryLoad(input, context, type, storage))
                return false;

            ICompositeStorage payloadStorage;
            GuidedObject guided = context.Output as GuidedObject;
            if (guided != null && storage.TryGet(Name.Payload, out payloadStorage))
            {
                string guid;
                if (payloadStorage.TryGet("Guid", out guid))
                    guided.Guid = guid;
            }

            return true;
        }

        protected override bool TryStore(object input, ISerializerContext context, CompositeType type, CompositeVersion typeVersion, ICompositeStorage storage)
        {
            if (!base.TryStore(input, context, type, typeVersion, storage))
                return false;
            
            ICompositeStorage payloadStorage;
            GuidedObject guided = input as GuidedObject;
            if (guided != null && storage.TryGet(Name.Payload, out payloadStorage))
            {
                payloadStorage.Add("Guid", guided.Guid);
            }

            return true;
        }
    }


    public class GuidedObject
    {
        internal string Guid { get; set; }
    }

    [CompositeType("Test.UserModel")]
    public class UserModel : GuidedObject
    {
        [CompositeVersion]
        public int Version { get; private set; }

        [CompositeProperty(1, Version = 2)]
        public int Id { get; private set; }

        [CompositeProperty(1)]
        [CompositeProperty(2, Version = 2)]
        public string UserName { get; private set; }

        [CompositeProperty(2)]
        [CompositeProperty(3, Version = 2)]
        public string Password { get; private set; }

        [CompositeConstructor]
        public UserModel(string userName, string password)
        {
            Ensure.NotNullOrEmpty(userName, "userName");
            Ensure.NotNullOrEmpty(password, "password");
            UserName = userName;
            Password = password;
            Version = 1;
        }

        [CompositeConstructor(Version = 2)]
        [JsonConstructor]
        public UserModel(int id, string userName, string password)
        {
            Ensure.Positive(id, "id");
            Ensure.NotNullOrEmpty(userName, "userName");
            Ensure.NotNullOrEmpty(password, "password");
            Id = id;
            UserName = userName;
            Password = password;
            Version = 2;
        }
    }

    /// <summary>
    /// Nothing is annotated.
    /// This model doesn't support versioning (always version is 1).
    /// Constructor is selected by default and property by convention.
    /// </summary>
    public class SingleModel
    {
        public string FullName { get; private set; }

        internal SingleModel(string fullName)
        {
            FullName = fullName;
        }
    }

    /// <summary>
    /// Class version support, but currently has only a single version.
    /// Constructor is explicitly marked.
    /// </summary>
    public class SingleVersion
    {
        [CompositeVersion]
        public int Version { get; private set; }
        public string FullName { get; private set; }

        /// <summary>
        /// This should not be used by composite.
        /// </summary>
        public SingleVersion()
        { }

        [CompositeConstructor]
        public SingleVersion(string fullName)
        {
            FullName = fullName;
        }
    }

    /// <summary>
    /// Class with two versions.
    /// Constructors are marked, but properties for version 1 are by convension.
    /// </summary>
    public class TwoVersionWithFirstImplied
    {
        [CompositeVersion]
        public int Version { get; set; }

        public string FullName { get; private set; }

        [CompositeProperty(0, Version = 2)]
        public string FirstName { get; private set; }

        [CompositeProperty(1, Version = 2)]
        public string LastName { get; private set; }

        [CompositeConstructor]
        public TwoVersionWithFirstImplied(string fullName)
        {
            FullName = fullName;
        }

        [CompositeConstructor(Version = 2)]
        public TwoVersionWithFirstImplied(string param1, string param2)
        {
            FirstName = param1;
            LastName = param2;
        }
    }
}
