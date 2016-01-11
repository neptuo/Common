/* Generated by SharpKit 5 v5.4.4 */

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];
var Neptuo$Services$Validators$DependencyValidationDispatcher = {
    fullname: "Neptuo.Services.Validators.DependencyValidationDispatcher",
    baseTypeName: "System.Object",
    staticDefinition: {
        cctor: function (){
            Neptuo.Services.Validators.DependencyValidationDispatcher.ValidateMethodName = "Validate";
        }
    },
    assemblyName: "Neptuo.Services.Validators",
    interfaceNames: ["Neptuo.Services.Validators.IValidationDispatcher"],
    Kind: "Class",
    definition: {
        ctor: function (dependencyProvider){
            this.dependencyProvider = null;
            System.Object.ctor.call(this);
            Neptuo.Ensure.NotNull$$Object$$String(dependencyProvider, "dependencyProvider");
            this.dependencyProvider = dependencyProvider;
        },
        Validate$1$$TModel: function (TModel, model){
            var validatable = As(model, Neptuo.Models.IValidatableModel.ctor);
            if (validatable != null){
                if (validatable.get_IsValid() != null)
                    return new Neptuo.Services.Validators.ValidationResult.ctor$$Boolean(validatable.get_IsValid().get_Value());
            }
            var validator = Neptuo.Activators._DependencyProviderExtensions.Resolve$1$$IDependencyProvider(Neptuo.Services.Validators.Handlers.IValidationHandler$1.ctor, this.dependencyProvider);
            var result = validator.Handle(model);
            if (validatable != null)
                validatable.set_IsValid(result.get_IsValid());
            return result;
        },
        Validate$$Object: function (model){
            Neptuo.Ensure.NotNull$$Object$$String(model, "model");
            var modelType = model.GetType();
            var validatorType = Typeof(Neptuo.Services.Validators.Handlers.IValidationHandler$1.ctor).MakeGenericType(modelType);
            var validateMethod = validatorType.GetMethod$$String(Neptuo.Services.Validators.DependencyValidationDispatcher.ValidateMethodName);
            var validator = this.dependencyProvider.Resolve(validatorType);
            var validationResult = validateMethod.Invoke$$Object$$Object$Array(validator, [model]);
            return Cast(validationResult, Neptuo.Services.Validators.IValidationResult.ctor);
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["Neptuo.Activators.IDependencyProvider"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Services$Validators$DependencyValidationDispatcher);
var Neptuo$Services$Validators$Handlers$IValidationHandler$1 = {
    fullname: "Neptuo.Services.Validators.Handlers.IValidationHandler$1",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Validators",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Validators$Handlers$IValidationHandler$1);
var Neptuo$Services$Validators$IValidationDispatcher = {
    fullname: "Neptuo.Services.Validators.IValidationDispatcher",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Validators",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Validators$IValidationDispatcher);
var Neptuo$Services$Validators$IValidationResult = {
    fullname: "Neptuo.Services.Validators.IValidationResult",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Validators",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Validators$IValidationResult);
var Neptuo$Services$Validators$IValidationResultBuilder = {
    fullname: "Neptuo.Services.Validators.IValidationResultBuilder",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Validators",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Validators$IValidationResultBuilder);
var Neptuo$Services$Validators$Messages$IValidationMessage = {
    fullname: "Neptuo.Services.Validators.Messages.IValidationMessage",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Validators",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Validators$Messages$IValidationMessage);
var Neptuo$Services$Validators$Messages$PropertyEqualMessage = {
    fullname: "Neptuo.Services.Validators.Messages.PropertyEqualMessage",
    baseTypeName: "Neptuo.Services.Validators.Messages.PropertyValidationMessageBase",
    assemblyName: "Neptuo.Services.Validators",
    Kind: "Class",
    definition: {
        ctor: function (key, otherProperty, propertyName){
            this._OtherProperty = null;
            Neptuo.Services.Validators.Messages.PropertyValidationMessageBase.ctor.call(this, key, propertyName);
            this.set_OtherProperty(otherProperty);
        },
        OtherProperty$$: "System.String",
        get_OtherProperty: function (){
            return this._OtherProperty;
        },
        set_OtherProperty: function (value){
            this._OtherProperty = value;
        },
        GetTextMessage: function (){
            return System.String.Format$$String$$Object$$Object("{0} must match {1}.", this.get_PropertyName(), this.get_OtherProperty());
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["System.String", "System.String", "System.String"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Services$Validators$Messages$PropertyEqualMessage);
var Neptuo$Services$Validators$Messages$PropertyValidationMessageBase = {
    fullname: "Neptuo.Services.Validators.Messages.PropertyValidationMessageBase",
    baseTypeName: "Neptuo.Services.Validators.Messages.ValidationMessageBase",
    assemblyName: "Neptuo.Services.Validators",
    Kind: "Class",
    definition: {
        ctor: function (key, propertyName){
            this.propertyName = null;
            Neptuo.Services.Validators.Messages.ValidationMessageBase.ctor.call(this, key, null);
            this.propertyName = propertyName;
        },
        PropertyName$$: "System.String",
        get_PropertyName: function (){
            return (this.propertyName != null ? this.propertyName : this.get_Key());
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["System.String", "System.String"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Services$Validators$Messages$PropertyValidationMessageBase);
var Neptuo$Services$Validators$Messages$StringLengthMessage = {
    fullname: "Neptuo.Services.Validators.Messages.StringLengthMessage",
    baseTypeName: "Neptuo.Services.Validators.Messages.PropertyValidationMessageBase",
    assemblyName: "Neptuo.Services.Validators",
    Kind: "Class",
    definition: {
        ctor: function (key, minLength, maxLength, propertyName){
            this._MinLength = null;
            this._MaxLength = null;
            Neptuo.Services.Validators.Messages.PropertyValidationMessageBase.ctor.call(this, key, propertyName);
            this.set_MinLength(minLength);
            this.set_MaxLength(maxLength);
        },
        MinLength$$: "System.Nullable`1[[System.Int32]]",
        get_MinLength: function (){
            return this._MinLength;
        },
        set_MinLength: function (value){
            this._MinLength = value;
        },
        MaxLength$$: "System.Nullable`1[[System.Int32]]",
        get_MaxLength: function (){
            return this._MaxLength;
        },
        set_MaxLength: function (value){
            this._MaxLength = value;
        },
        GetTextMessage: function (){
            if (this.get_MinLength() == null)
                return System.String.Format$$String$$Object$$Object("{0} must be shorter or equal to {1} characters.", this.get_PropertyName(), this.get_MaxLength());
            if (this.get_MaxLength() == null)
                return System.String.Format$$String$$Object$$Object("{0} must have length at least {1} characters.", this.get_PropertyName(), this.get_MinLength());
            return System.String.Format$$String$$Object$$Object("Length of {0} muset be between {1} and {2} characters.", this.get_MinLength(), this.get_MaxLength());
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["System.String", "System.Nullable", "System.Nullable", "System.String"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Services$Validators$Messages$StringLengthMessage);
var Neptuo$Services$Validators$Messages$StringNullOrEmptyMessage = {
    fullname: "Neptuo.Services.Validators.Messages.StringNullOrEmptyMessage",
    baseTypeName: "Neptuo.Services.Validators.Messages.PropertyValidationMessageBase",
    assemblyName: "Neptuo.Services.Validators",
    Kind: "Class",
    definition: {
        ctor: function (key, propertyName){
            Neptuo.Services.Validators.Messages.PropertyValidationMessageBase.ctor.call(this, key, propertyName);
        },
        GetTextMessage: function (){
            return System.String.Format$$String$$Object("{0} can\'t be empty.", this.get_PropertyName());
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["System.String", "System.String"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Services$Validators$Messages$StringNullOrEmptyMessage);
var Neptuo$Services$Validators$Messages$TextValidationMessage = {
    fullname: "Neptuo.Services.Validators.Messages.TextValidationMessage",
    baseTypeName: "Neptuo.Services.Validators.Messages.ValidationMessageBase",
    assemblyName: "Neptuo.Services.Validators",
    Kind: "Class",
    definition: {
        ctor: function (key, message){
            Neptuo.Services.Validators.Messages.ValidationMessageBase.ctor.call(this, key, message);
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["System.String", "System.String"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Services$Validators$Messages$TextValidationMessage);
var Neptuo$Services$Validators$Messages$ValidationMessageBase = {
    fullname: "Neptuo.Services.Validators.Messages.ValidationMessageBase",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Validators",
    interfaceNames: ["Neptuo.Services.Validators.Messages.IValidationMessage"],
    Kind: "Class",
    definition: {
        ctor: function (key, message){
            this.message = null;
            this._Key = null;
            System.Object.ctor.call(this);
            this.set_Key(key);
            this.set_Message(message);
        },
        Key$$: "System.String",
        get_Key: function (){
            return this._Key;
        },
        set_Key: function (value){
            this._Key = value;
        },
        Message$$: "System.String",
        get_Message: function (){
            if (this.message == null)
                this.message = this.GetTextMessage();
            return this.message;
        },
        set_Message: function (value){
            this.message = value;
        },
        GetTextMessage: function (){
            return System.String.Empty;
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["System.String", "System.String"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Services$Validators$Messages$ValidationMessageBase);
var Neptuo$Services$Validators$VersionInfo = {
    fullname: "Neptuo.Services.Validators.VersionInfo",
    baseTypeName: "System.Object",
    staticDefinition: {
        cctor: function (){
            Neptuo.Services.Validators.VersionInfo.Version = "0.1.0";
        },
        GetVersion: function (){
            return new System.Version.ctor$$String("0.1.0");
        }
    },
    assemblyName: "Neptuo.Services.Validators",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    },
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Validators$VersionInfo);
var Neptuo$Services$Validators$ValidationException = {
    fullname: "Neptuo.Services.Validators.ValidationException",
    baseTypeName: "System.Exception",
    assemblyName: "Neptuo.Services.Validators",
    Kind: "Class",
    definition: {
        ctor: function (result){
            this._Result = null;
            System.Exception.ctor.call(this);
            Neptuo.Ensure.NotNull$$Object$$String(result, "result");
            this.set_Result(result);
        },
        Result$$: "Neptuo.Services.Validators.IValidationResult",
        get_Result: function (){
            return this._Result;
        },
        set_Result: function (value){
            this._Result = value;
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["Neptuo.Services.Validators.IValidationResult"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Services$Validators$ValidationException);
var Neptuo$Services$Validators$ValidationResult = {
    fullname: "Neptuo.Services.Validators.ValidationResult",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Validators",
    interfaceNames: ["Neptuo.Services.Validators.IValidationResult"],
    Kind: "Class",
    definition: {
        ctor$$Boolean: function (isValid){
            this._IsValid = false;
            this._Messages = null;
            Neptuo.Services.Validators.ValidationResult.ctor$$Boolean$$IEnumerable$1$IValidationMessage.call(this, isValid, new System.Collections.Generic.List$1.ctor(Neptuo.Services.Validators.Messages.IValidationMessage.ctor));
        },
        IsValid$$: "System.Boolean",
        get_IsValid: function (){
            return this._IsValid;
        },
        set_IsValid: function (value){
            this._IsValid = value;
        },
        Messages$$: "System.Collections.Generic.IEnumerable`1[[Neptuo.Services.Validators.Messages.IValidationMessage]]",
        get_Messages: function (){
            return this._Messages;
        },
        set_Messages: function (value){
            this._Messages = value;
        },
        ctor$$Boolean$$IEnumerable$1$IValidationMessage: function (isValid, messages){
            this._IsValid = false;
            this._Messages = null;
            System.Object.ctor.call(this);
            Neptuo.Ensure.NotNull$$Object$$String(messages, "messages");
            this.set_IsValid(isValid);
            this.set_Messages(messages);
        }
    },
    ctors: [{
        name: "ctor$$Boolean",
        parameters: ["System.Boolean"]
    }, {
        name: "ctor$$Boolean$$IEnumerable",
        parameters: ["System.Boolean", "System.Collections.Generic.IEnumerable"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Services$Validators$ValidationResult);
var Neptuo$Services$Validators$ValidationResultBuilder = {
    fullname: "Neptuo.Services.Validators.ValidationResultBuilder",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Validators",
    interfaceNames: ["Neptuo.Services.Validators.IValidationResult", "Neptuo.Services.Validators.IValidationResultBuilder"],
    Kind: "Class",
    definition: {
        ctor: function (isInvalidationCausedByAnyMessage){
            this.messages = new System.Collections.Generic.List$1.ctor(Neptuo.Services.Validators.Messages.IValidationMessage.ctor);
            this.isInvalidationCausedByAnyMessage = false;
            this.isValid = true;
            System.Object.ctor.call(this);
            this.isInvalidationCausedByAnyMessage = isInvalidationCausedByAnyMessage;
        },
        Add$$IValidationMessage: function (message){
            return this.Add$$IValidationMessage$$Boolean(message, this.isInvalidationCausedByAnyMessage);
        },
        Add$$IValidationMessage$$Boolean: function (message, causesInvalidation){
            Neptuo.Ensure.NotNull$$Object$$String(message, "message");
            this.messages.Add(message);
            if (causesInvalidation)
                this.isValid = false;
            return this;
        },
        ToResult: function (){
            return this;
        },
        ToString: function (){
            return System.String.Format$$String$$Object$$Object("{0} ({1})", this.isValid ? "Valid" : "Not valid", this.messages.get_Count());
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["System.Boolean"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Services$Validators$ValidationResultBuilder);
var Neptuo$Services$Validators$_ValidationResultBuilderExtensions = {
    fullname: "Neptuo.Services.Validators._ValidationResultBuilderExtensions",
    baseTypeName: "System.Object",
    staticDefinition: {
        AddTextMessage: function (builder, key, message, parameters){
            Neptuo.Ensure.NotNull$$Object$$String(builder, "builder");
            return builder.Add$$IValidationMessage(new Neptuo.Services.Validators.Messages.TextValidationMessage.ctor(key, System.String.Format$$String$$Object$Array(message, parameters)));
        }
    },
    assemblyName: "Neptuo.Services.Validators",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    },
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Validators$_ValidationResultBuilderExtensions);
