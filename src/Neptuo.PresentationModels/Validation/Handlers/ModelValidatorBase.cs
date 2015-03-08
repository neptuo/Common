﻿using Neptuo.Pipelines.Validators;
using Neptuo.Pipelines.Validators.Handlers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.PresentationModels.Validators
{
    /// <summary>
    /// Base for <see cref="IModelValidationHandler"/>.
    /// Validator result built from validation of all fields.
    /// </summary>
    public abstract class ModelValidatorBase : IValidationHandler<IModelValueGetter>
    {
        /// <summary>
        /// Model definition to validate.
        /// </summary>
        protected IModelDefinition ModelDefinition { get; private set; }

        public ModelValidatorBase(IModelDefinition modelDefinition)
        {
            Ensure.NotNull(modelDefinition, "modelDefinition");
            ModelDefinition = modelDefinition;
        }

        /// <summary>
        /// Creates instance of validation result builder.
        /// </summary>
        /// <returns></returns>
        protected virtual IModelValidationBuilder CreateResultBuilder()
        {
            return new ModelValidationBuilder();
        }

        public virtual IValidationResult Handle(IModelValueGetter getter)
        {
            IModelValidationBuilder resultBuilder = CreateResultBuilder();
            foreach (IFieldDefinition fieldDefinition in ModelDefinition.Fields)
                ValidateField(fieldDefinition, getter, resultBuilder);

            return resultBuilder.ToResult();
        }

        /// <summary>
        /// Provides logic for validating <paramref name="fieldDefinition"/>.
        /// </summary>
        /// <param name="fieldDefinition">Defines field to validate.</param>
        /// <param name="getter">Provides current values.</param>
        /// <param name="resultBuilder">Validation result builder.</param>
        protected abstract void ValidateField(IFieldDefinition fieldDefinition, IModelValueGetter getter, IModelValidationBuilder resultBuilder);
    }
}
