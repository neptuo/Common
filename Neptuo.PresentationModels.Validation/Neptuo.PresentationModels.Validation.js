/* Generated by SharpKit 5 v5.3.6 */
if (typeof($CreateException)=='undefined') 
{
    var $CreateException = function(ex, error) 
    {
        if(error==null)
            error = new Error();
        if(ex==null)
            ex = new System.Exception.ctor();       
        error.message = ex.message;
        for (var p in ex)
           error[p] = ex[p];
        return error;
    }
}


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];
var Neptuo$PresentationModels$Validation$FieldMetadataValidatorBase$2 = {
    fullname: "Neptuo.PresentationModels.Validation.FieldMetadataValidatorBase$2",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.Validation",
    interfaceNames: ["Neptuo.PresentationModels.Validation.IFieldMetadataValidator"],
    Kind: "Class",
    definition: {
        ctor: function (TMetadataValue, TFieldValue, metadataKey){
            this.TMetadataValue = TMetadataValue;
            this.TFieldValue = TFieldValue;
            this._MetadataKey = null;
            System.Object.ctor.call(this);
            if (metadataKey == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("metadataKey"), new Error());
            this.set_MetadataKey(metadataKey);
        },
        MetadataKey$$: "System.String",
        get_MetadataKey: function (){
            return this._MetadataKey;
        },
        set_MetadataKey: function (value){
            this._MetadataKey = value;
        },
        Validate$$IFieldDefinition$$IModelValueGetter$$IModelValidationBuilder: function (fieldDefinition, getter, resultBuilder){
            var metadataValue;
            if (!(function (){
                var $1 = {
                    Value: metadataValue
                };
                var $res = fieldDefinition.get_Metadata().TryGet(this.get_MetadataKey(), $1);
                metadataValue = $1.Value;
                return $res;
            }).call(this))
                return this.MissingMetadataKey(fieldDefinition, getter, resultBuilder);
            var fieldValue = Neptuo.PresentationModels.ModelValueGetterExtensions.GetValueOrDefault$1$$IModelValueGetter$$String$$T(this.TFieldValue, getter, fieldDefinition.get_Identifier(), Default(this.TFieldValue));
            var metadata = Cast(metadataValue, this.TMetadataValue);
            return this.Validate$$TFieldValue$$TMetadataValue$$FieldMetadataValidatorContext(fieldValue, metadata, new Neptuo.PresentationModels.Validation.FieldMetadataValidatorContext.ctor(fieldDefinition, getter, resultBuilder));
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["System.String"]
    }
    ],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$Validation$FieldMetadataValidatorBase$2);
var Neptuo$PresentationModels$Validation$FieldMetadataValidatorContext = {
    fullname: "Neptuo.PresentationModels.Validation.FieldMetadataValidatorContext",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.Validation",
    Kind: "Class",
    definition: {
        ctor: function (fieldDefinition, getter, resultBuilder){
            this._FieldDefinition = null;
            this._Getter = null;
            this._ResultBuilder = null;
            System.Object.ctor.call(this);
            if (fieldDefinition == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("fieldDefinition"), new Error());
            if (getter == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("getter"), new Error());
            if (resultBuilder == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("resultBuilder"), new Error());
            this.set_FieldDefinition(fieldDefinition);
            this.set_Getter(getter);
            this.set_ResultBuilder(resultBuilder);
        },
        FieldDefinition$$: "Neptuo.PresentationModels.IFieldDefinition",
        get_FieldDefinition: function (){
            return this._FieldDefinition;
        },
        set_FieldDefinition: function (value){
            this._FieldDefinition = value;
        },
        Getter$$: "Neptuo.PresentationModels.IModelValueGetter",
        get_Getter: function (){
            return this._Getter;
        },
        set_Getter: function (value){
            this._Getter = value;
        },
        ResultBuilder$$: "Neptuo.PresentationModels.Validation.IModelValidationBuilder",
        get_ResultBuilder: function (){
            return this._ResultBuilder;
        },
        set_ResultBuilder: function (value){
            this._ResultBuilder = value;
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["Neptuo.PresentationModels.IFieldDefinition", "Neptuo.PresentationModels.IModelValueGetter", "Neptuo.PresentationModels.Validation.IModelValidationBuilder"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$Validation$FieldMetadataValidatorContext);
var Neptuo$PresentationModels$Validation$FuncFieldMetadataValidatorFactory$1 = {
    fullname: "Neptuo.PresentationModels.Validation.FuncFieldMetadataValidatorFactory$1",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.Validation",
    interfaceNames: ["Neptuo.PresentationModels.Validation.IFieldMetadataValidatorFactory"],
    Kind: "Class",
    definition: {
        ctor: function (TValidator, factory){
            this.TValidator = TValidator;
            this._Factory = null;
            System.Object.ctor.call(this);
            if (System.MulticastDelegate.op_Equality$$MulticastDelegate$$MulticastDelegate(factory, null))
                throw $CreateException(new System.ArgumentNullException.ctor$$String("factory"), new Error());
            this.set_Factory(factory);
        },
        Factory$$: "System.Func`1[[`0]]",
        get_Factory: function (){
            return this._Factory;
        },
        set_Factory: function (value){
            this._Factory = value;
        },
        Create: function (){
            return this.get_Factory()();
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["System.Func"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$Validation$FuncFieldMetadataValidatorFactory$1);
var Neptuo$PresentationModels$Validation$FuncFieldMetadataValidatorFactory = {
    fullname: "Neptuo.PresentationModels.Validation.FuncFieldMetadataValidatorFactory",
    baseTypeName: "Neptuo.PresentationModels.Validation.FuncFieldMetadataValidatorFactory$1",
    assemblyName: "Neptuo.PresentationModels.Validation",
    Kind: "Class",
    definition: {
        ctor: function (factory){
            Neptuo.PresentationModels.Validation.FuncFieldMetadataValidatorFactory$1.ctor.call(this, Neptuo.PresentationModels.Validation.IFieldMetadataValidator.ctor, factory);
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["System.Func"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$Validation$FuncFieldMetadataValidatorFactory);
var Neptuo$PresentationModels$Validation$IFieldMetadataValidator = {
    fullname: "Neptuo.PresentationModels.Validation.IFieldMetadataValidator",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.Validation",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$Validation$IFieldMetadataValidator);
var Neptuo$PresentationModels$Validation$IFieldMetadataValidatorFactory = {
    fullname: "Neptuo.PresentationModels.Validation.IFieldMetadataValidatorFactory",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.Validation",
    interfaceNames: ["Neptuo.IActivator$1"],
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$Validation$IFieldMetadataValidatorFactory);
var Neptuo$PresentationModels$Validation$IMetadataValidatorCollection = {
    fullname: "Neptuo.PresentationModels.Validation.IMetadataValidatorCollection",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.Validation",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$Validation$IMetadataValidatorCollection);
var Neptuo$PresentationModels$Validation$IModelValidationBuilder = {
    fullname: "Neptuo.PresentationModels.Validation.IModelValidationBuilder",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.Validation",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$Validation$IModelValidationBuilder);
var Neptuo$PresentationModels$Validation$IModelValidator = {
    fullname: "Neptuo.PresentationModels.Validation.IModelValidator",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.Validation",
    interfaceNames: ["Neptuo.Validation.IValidator$1"],
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$Validation$IModelValidator);
var Neptuo$PresentationModels$Validation$MetadataModelValidator = {
    fullname: "Neptuo.PresentationModels.Validation.MetadataModelValidator",
    baseTypeName: "Neptuo.PresentationModels.Validation.ModelValidatorBase",
    assemblyName: "Neptuo.PresentationModels.Validation",
    Kind: "Class",
    definition: {
        ctor: function (modelDefinition, validators){
            this._Validators = null;
            Neptuo.PresentationModels.Validation.ModelValidatorBase.ctor.call(this, modelDefinition);
            if (validators == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("validators"), new Error());
            this.set_Validators(validators);
        },
        Validators$$: "Neptuo.PresentationModels.Validation.IMetadataValidatorCollection",
        get_Validators: function (){
            return this._Validators;
        },
        set_Validators: function (value){
            this._Validators = value;
        },
        ValidateField: function (fieldDefinition, getter, resultBuilder){
            var $it1 = fieldDefinition.get_Metadata().get_Keys().GetEnumerator();
            while ($it1.MoveNext()){
                var key = $it1.get_Current();
                var validator;
                if ((function (){
                    var $1 = {
                        Value: validator
                    };
                    var $res = this.get_Validators().TryGet(this.get_ModelDefinition().get_Identifier(), fieldDefinition.get_Identifier(), key, $1);
                    validator = $1.Value;
                    return $res;
                }).call(this))
                    validator.Validate(fieldDefinition, getter, resultBuilder);
            }
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["Neptuo.PresentationModels.IModelDefinition", "Neptuo.PresentationModels.Validation.IMetadataValidatorCollection"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$Validation$MetadataModelValidator);
var Neptuo$PresentationModels$Validation$MetadataValidatorCollection = {
    fullname: "Neptuo.PresentationModels.Validation.MetadataValidatorCollection",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.Validation",
    interfaceNames: ["Neptuo.PresentationModels.Validation.IMetadataValidatorCollection"],
    Kind: "Class",
    definition: {
        ctor: function (){
            this._Validators = null;
            System.Object.ctor.call(this);
            this.set_Validators(new System.Collections.Generic.Dictionary$2.ctor(System.String.ctor, System.Collections.Generic.Dictionary$2.ctor));
        },
        Validators$$: "System.Collections.Generic.Dictionary`2[[System.String],[System.Collections.Generic.Dictionary`2[[System.String],[System.Collections.Generic.Dictionary`2[[System.String],[Neptuo.PresentationModels.Validation.IFieldMetadataValidatorFactory]]]]]]",
        get_Validators: function (){
            return this._Validators;
        },
        set_Validators: function (value){
            this._Validators = value;
        },
        Add: function (modelIdentifier, fieldIdentifier, metadataKey, validatorFactory){
            if (modelIdentifier == null)
                modelIdentifier = System.String.Empty;
            if (fieldIdentifier == null)
                fieldIdentifier = System.String.Empty;
            if (!this.get_Validators().ContainsKey(modelIdentifier))
                this.get_Validators().set_Item$$TKey(modelIdentifier, new System.Collections.Generic.Dictionary$2.ctor(System.String.ctor, System.Collections.Generic.Dictionary$2.ctor));
            if (!this.get_Validators().get_Item$$TKey(modelIdentifier).ContainsKey(fieldIdentifier))
                this.get_Validators().get_Item$$TKey(modelIdentifier).set_Item$$TKey(fieldIdentifier, new System.Collections.Generic.Dictionary$2.ctor(System.String.ctor, Neptuo.PresentationModels.Validation.IFieldMetadataValidatorFactory.ctor));
            this.get_Validators().get_Item$$TKey(modelIdentifier).get_Item$$TKey(fieldIdentifier).set_Item$$TKey(metadataKey, validatorFactory);
            return this;
        },
        TryGet: function (modelIdentifier, fieldIdentifier, metadataKey, validator){
            var modelValidators;
            if (!(function (){
                var $1 = {
                    Value: modelValidators
                };
                var $res = this.get_Validators().TryGetValue(modelIdentifier, $1);
                modelValidators = $1.Value;
                return $res;
            }).call(this) && !(function (){
                var $1 = {
                    Value: modelValidators
                };
                var $res = this.get_Validators().TryGetValue(System.String.Empty, $1);
                modelValidators = $1.Value;
                return $res;
            }).call(this)){
                validator.Value = null;
                return false;
            }
            var fieldValidators;
            if (!(function (){
                var $1 = {
                    Value: fieldValidators
                };
                var $res = modelValidators.TryGetValue(fieldIdentifier, $1);
                fieldValidators = $1.Value;
                return $res;
            }).call(this) && !(function (){
                var $1 = {
                    Value: fieldValidators
                };
                var $res = modelValidators.TryGetValue(System.String.Empty, $1);
                fieldValidators = $1.Value;
                return $res;
            }).call(this)){
                validator.Value = null;
                return false;
            }
            var factory;
            if (!(function (){
                var $1 = {
                    Value: factory
                };
                var $res = fieldValidators.TryGetValue(metadataKey, $1);
                factory = $1.Value;
                return $res;
            }).call(this) && !(function (){
                var $1 = {
                    Value: factory
                };
                var $res = fieldValidators.TryGetValue(System.String.Empty, $1);
                factory = $1.Value;
                return $res;
            }).call(this)){
                validator.Value = null;
                return false;
            }
            validator.Value = factory.Create();
            return true;
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$Validation$MetadataValidatorCollection);
var Neptuo$PresentationModels$Validation$ModelValidationBuilder = {
    fullname: "Neptuo.PresentationModels.Validation.ModelValidationBuilder",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.Validation",
    interfaceNames: ["Neptuo.Validation.IValidationResult", "Neptuo.PresentationModels.Validation.IModelValidationBuilder"],
    Kind: "Class",
    definition: {
        ctor: function (){
            this._MessageList = null;
            System.Object.ctor.call(this);
            this.set_MessageList(new System.Collections.Generic.List$1.ctor(Neptuo.Validation.IValidationMessage.ctor));
        },
        MessageList$$: "System.Collections.Generic.List`1[[Neptuo.Validation.IValidationMessage]]",
        get_MessageList: function (){
            return this._MessageList;
        },
        set_MessageList: function (value){
            this._MessageList = value;
        },
        IsValid$$: "System.Boolean",
        get_IsValid: function (){
            return this.get_MessageList().get_Count() == 0;
        },
        Messages$$: "System.Collections.Generic.IEnumerable`1[[Neptuo.Validation.IValidationMessage]]",
        get_Messages: function (){
            return this.get_MessageList();
        },
        AddMessage: function (message){
            this.get_MessageList().Add(message);
            return this;
        },
        AddMessages: function (messages){
            this.get_MessageList().AddRange(messages);
            return this;
        },
        ToResult: function (){
            return this;
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$Validation$ModelValidationBuilder);
var Neptuo$PresentationModels$Validation$ModelValidatorBase = {
    fullname: "Neptuo.PresentationModels.Validation.ModelValidatorBase",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.Validation",
    interfaceNames: ["Neptuo.PresentationModels.Validation.IModelValidator"],
    Kind: "Class",
    definition: {
        ctor: function (modelDefinition){
            this._ModelDefinition = null;
            System.Object.ctor.call(this);
            if (modelDefinition == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("modelDefinition"), new Error());
            this.set_ModelDefinition(modelDefinition);
        },
        ModelDefinition$$: "Neptuo.PresentationModels.IModelDefinition",
        get_ModelDefinition: function (){
            return this._ModelDefinition;
        },
        set_ModelDefinition: function (value){
            this._ModelDefinition = value;
        },
        CreateResultBuilder: function (){
            return new Neptuo.PresentationModels.Validation.ModelValidationBuilder.ctor();
        },
        Validate: function (getter){
            var resultBuilder = this.CreateResultBuilder();
            var $it2 = this.get_ModelDefinition().get_Fields().GetEnumerator();
            while ($it2.MoveNext()){
                var fieldDefinition = $it2.get_Current();
                this.ValidateField(fieldDefinition, getter, resultBuilder);
            }
            return resultBuilder.ToResult();
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["Neptuo.PresentationModels.IModelDefinition"]
    }
    ],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$Validation$ModelValidatorBase);
var Neptuo$PresentationModels$Validation$SingletonFieldMetadataValidatorFactory = {
    fullname: "Neptuo.PresentationModels.Validation.SingletonFieldMetadataValidatorFactory",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.Validation",
    interfaceNames: ["Neptuo.PresentationModels.Validation.IFieldMetadataValidatorFactory"],
    Kind: "Class",
    definition: {
        ctor: function (validator){
            this._Validator = null;
            System.Object.ctor.call(this);
            if (validator == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("validator"), new Error());
            this.set_Validator(validator);
        },
        Validator$$: "Neptuo.PresentationModels.Validation.IFieldMetadataValidator",
        get_Validator: function (){
            return this._Validator;
        },
        set_Validator: function (value){
            this._Validator = value;
        },
        Create: function (){
            return this.get_Validator();
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["Neptuo.PresentationModels.Validation.IFieldMetadataValidator"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$Validation$SingletonFieldMetadataValidatorFactory);
