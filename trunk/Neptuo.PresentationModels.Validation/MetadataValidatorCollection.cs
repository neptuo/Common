﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.PresentationModels.Validation
{
    public class MetadataValidatorCollection : IMetadataValidatorCollection
    {
        protected Dictionary<string, Dictionary<string, Dictionary<string, IFiedMetadataValidatorFactory>>> Validators { get; private set; }

        public MetadataValidatorCollection()
        {
            Validators = new Dictionary<string, Dictionary<string, Dictionary<string, IFiedMetadataValidatorFactory>>>();
        }

        public void Add(string modelIdentifier, string fieldIdentifier, string metadataKey, IFiedMetadataValidatorFactory validatorFactory)
        {
            if (modelIdentifier == null)
                modelIdentifier = String.Empty;

            if (fieldIdentifier == null)
                fieldIdentifier = String.Empty;

            if (!Validators.ContainsKey(modelIdentifier))
                Validators[modelIdentifier] = new Dictionary<string, Dictionary<string, IFiedMetadataValidatorFactory>>();

            if (!Validators[modelIdentifier].ContainsKey(fieldIdentifier))
                Validators[modelIdentifier][fieldIdentifier] = new Dictionary<string, IFiedMetadataValidatorFactory>();

            Validators[modelIdentifier][fieldIdentifier][metadataKey] = validatorFactory;
        }

        public bool TryGet(string modelIdentifier, string fieldIdentifier, string metadataKey, out IFiedMetadataValidator validator)
        {
            Dictionary<string, Dictionary<string, IFiedMetadataValidatorFactory>> modelValidators;
            if (!Validators.TryGetValue(modelIdentifier, out modelValidators))
            {
                validator = null;
                return false;
            }

            Dictionary<string, IFiedMetadataValidatorFactory> fieldValidators;
            if (!modelValidators.TryGetValue(fieldIdentifier, out fieldValidators))
            {
                validator = null;
                return false;
            }

            IFiedMetadataValidatorFactory factory;
            if (!fieldValidators.TryGetValue(metadataKey, out factory))
            {
                validator = null;
                return false;
            }

            validator = factory.Create();
            return true;
        }
    }
}
