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
var Neptuo$PresentationModels$TypeModels$Expressions$DictionaryPropertyValueProviderCollection$1 = {
    fullname: "Neptuo.PresentationModels.TypeModels.Expressions.DictionaryPropertyValueProviderCollection$1",
    baseTypeName: "System.Collections.Generic.Dictionary$2",
    assemblyName: "Neptuo.PresentationModels.TypeModels",
    interfaceNames: ["Neptuo.PresentationModels.TypeModels.Expressions.IPropertyValueProviderCollection$1"],
    Kind: "Class",
    definition: {
        ctor: function (TModel){
            this.TModel = TModel;
            System.Collections.Generic.Dictionary$2.ctor.call(this, System.String.ctor, Neptuo.PresentationModels.TypeModels.Expressions.IPropertyValueProvider$1.ctor);
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$Expressions$DictionaryPropertyValueProviderCollection$1);
var Neptuo$PresentationModels$TypeModels$Expressions$ExpressionModelValueProvider$1 = {
    fullname: "Neptuo.PresentationModels.TypeModels.Expressions.ExpressionModelValueProvider$1",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.TypeModels",
    interfaceNames: ["Neptuo.PresentationModels.IModelValueProvider"],
    Kind: "Class",
    definition: {
        ctor: function (TModel, model, valueProviders){
            this.TModel = TModel;
            this._Model = null;
            this._ValueProviders = null;
            System.Object.ctor.call(this);
            if (model == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("model"), new Error());
            this.set_Model(model);
            if (valueProviders != null)
                this.set_ValueProviders(valueProviders);
            else
                this.set_ValueProviders(new Neptuo.PresentationModels.TypeModels.Expressions.DictionaryPropertyValueProviderCollection$1.ctor(this.TModel));
        },
        Model$$: "`0",
        get_Model: function (){
            return this._Model;
        },
        set_Model: function (value){
            this._Model = value;
        },
        ValueProviders$$: "Neptuo.PresentationModels.TypeModels.Expressions.IPropertyValueProviderCollection`1[[`0]]",
        get_ValueProviders: function (){
            return this._ValueProviders;
        },
        set_ValueProviders: function (value){
            this._ValueProviders = value;
        },
        Add: function (identifier, valueProvider){
            this.get_ValueProviders().set_Item$$String(identifier, valueProvider);
            return this;
        },
        TryGetValue: function (identifier, value){
            value.Value = this.GetValueProvider(identifier).GetValue(this.get_Model());
            return true;
        },
        SetValue: function (identifier, value){
            this.GetValueProvider(identifier).SetValue(this.get_Model(), value);
        },
        GetValueProvider: function (identifier){
            var valueProvider;
            if (!(function (){
                var $1 = {
                    Value: valueProvider
                };
                var $res = this.get_ValueProviders().TryGetValue(identifier, $1);
                valueProvider = $1.Value;
                return $res;
            }).call(this))
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor$$String$$String("identifier", System.String.Format$$String$$Object("Unnable to find property \'{0}\'", identifier)), new Error());
            return valueProvider;
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["TModel", "Neptuo.PresentationModels.TypeModels.Expressions.IPropertyValueProviderCollection"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$Expressions$ExpressionModelValueProvider$1);
var Neptuo$PresentationModels$TypeModels$Expressions$FuncPropertyValueProvider$2 = {
    fullname: "Neptuo.PresentationModels.TypeModels.Expressions.FuncPropertyValueProvider$2",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.TypeModels",
    interfaceNames: ["Neptuo.PresentationModels.TypeModels.Expressions.IPropertyValueProvider$1"],
    Kind: "Class",
    definition: {
        ctor: function (TModel, TPropertyType, getter, setter){
            this.TModel = TModel;
            this.TPropertyType = TPropertyType;
            this._Getter = null;
            this._Setter = null;
            System.Object.ctor.call(this);
            if (System.MulticastDelegate.op_Equality$$MulticastDelegate$$MulticastDelegate(getter, null))
                throw $CreateException(new System.ArgumentNullException.ctor$$String("getter"), new Error());
            if (System.MulticastDelegate.op_Equality$$MulticastDelegate$$MulticastDelegate(setter, null))
                throw $CreateException(new System.ArgumentNullException.ctor$$String("setter"), new Error());
            this.set_Getter(getter);
            this.set_Setter(setter);
        },
        Getter$$: "System.Func`2[[`0],[`1]]",
        get_Getter: function (){
            return this._Getter;
        },
        set_Getter: function (value){
            this._Getter = value;
        },
        Setter$$: "System.Action`2[[`0],[`1]]",
        get_Setter: function (){
            return this._Setter;
        },
        set_Setter: function (value){
            this._Setter = value;
        },
        GetValue: function (model){
            return this.get_Getter()(model);
        },
        SetValue: function (model, value){
            this.get_Setter()(model, Cast(value, this.TPropertyType));
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["System.Func", "System.Action"]
    }
    ],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$Expressions$FuncPropertyValueProvider$2);
var Neptuo$PresentationModels$TypeModels$Expressions$IPropertyValueProvider$1 = {
    fullname: "Neptuo.PresentationModels.TypeModels.Expressions.IPropertyValueProvider$1",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.TypeModels",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$Expressions$IPropertyValueProvider$1);
var Neptuo$PresentationModels$TypeModels$Expressions$IPropertyValueProviderCollection$1 = {
    fullname: "Neptuo.PresentationModels.TypeModels.Expressions.IPropertyValueProviderCollection$1",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.TypeModels",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$Expressions$IPropertyValueProviderCollection$1);
var Neptuo$PresentationModels$TypeModels$IMetadataBuilder = {
    fullname: "Neptuo.PresentationModels.TypeModels.IMetadataBuilder",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.TypeModels",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$IMetadataBuilder);
var Neptuo$PresentationModels$TypeModels$IMetadataReader = {
    fullname: "Neptuo.PresentationModels.TypeModels.IMetadataReader",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.TypeModels",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$IMetadataReader);
var Neptuo$PresentationModels$TypeModels$IModelDefinitionFactory = {
    fullname: "Neptuo.PresentationModels.TypeModels.IModelDefinitionFactory",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.TypeModels",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$IModelDefinitionFactory);
var Neptuo$PresentationModels$TypeModels$IModelValueProviderFactory = {
    fullname: "Neptuo.PresentationModels.TypeModels.IModelValueProviderFactory",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.TypeModels",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$IModelValueProviderFactory);
var Neptuo$PresentationModels$TypeModels$MetadataBuilderCollection = {
    fullname: "Neptuo.PresentationModels.TypeModels.MetadataBuilderCollection",
    baseTypeName: "Neptuo.PresentationModels.MetadataCollection",
    assemblyName: "Neptuo.PresentationModels.TypeModels",
    interfaceNames: ["Neptuo.PresentationModels.TypeModels.IMetadataBuilder"],
    Kind: "Class",
    definition: {
        ctor: function (){
            Neptuo.PresentationModels.MetadataCollection.ctor.call(this);
        },
        Set: function (identifier, value){
            if (identifier == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("identifier"), new Error());
            this.get_Values().set_Item$$TKey(identifier, value);
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$MetadataBuilderCollection);
var Neptuo$PresentationModels$TypeModels$MetadataReaderService = {
    fullname: "Neptuo.PresentationModels.TypeModels.MetadataReaderService",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.TypeModels",
    Kind: "Class",
    definition: {
        ctor: function (){
            this._Values = null;
            System.Object.ctor.call(this);
            this.set_Values(new System.Collections.Generic.Dictionary$2.ctor(System.Type.ctor, Neptuo.PresentationModels.TypeModels.IMetadataReader.ctor));
        },
        Values$$: "System.Collections.Generic.Dictionary`2[[System.Type],[Neptuo.PresentationModels.TypeModels.IMetadataReader]]",
        get_Values: function (){
            return this._Values;
        },
        set_Values: function (value){
            this._Values = value;
        },
        Add: function (attributeType, reader){
            if (System.Type.op_Equality$$Type$$Type(attributeType, null))
                throw $CreateException(new System.ArgumentNullException.ctor$$String("attributeType"), new Error());
            if (reader == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("reader"), new Error());
            this.get_Values().set_Item$$TKey(attributeType, reader);
            return this;
        },
        TryGetReader: function (attributeType, reader){
            return this.get_Values().TryGetValue(attributeType, reader);
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$MetadataReaderService);
var Neptuo$PresentationModels$TypeModels$MetadataReaderBase$1 = {
    fullname: "Neptuo.PresentationModels.TypeModels.MetadataReaderBase$1",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.TypeModels",
    interfaceNames: ["Neptuo.PresentationModels.TypeModels.IMetadataReader"],
    Kind: "Class",
    definition: {
        ctor: function (T){
            this.T = T;
            System.Object.ctor.call(this);
        },
        Apply: function (attribute, builder){
            if (attribute == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("attribute"), new Error());
            if (builder == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("builder"), new Error());
            var targetAttribute = As(attribute, this.T);
            if (targetAttribute == null)
                throw $CreateException(new System.InvalidOperationException.ctor$$String(System.String.Format$$String$$Object("Reader can process only attribute of type \'{0}\'", Typeof(this.T).get_FullName())), new Error());
            this.ApplyInternal(targetAttribute, builder);
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$MetadataReaderBase$1);
var Neptuo$PresentationModels$TypeModels$ModelDefinitionFactoryExtensions = {
    fullname: "Neptuo.PresentationModels.TypeModels.ModelDefinitionFactoryExtensions",
    baseTypeName: "System.Object",
    staticDefinition: {
        Create$1: function (TModel, factory){
            return factory.Create(Typeof(TModel));
        }
    },
    assemblyName: "Neptuo.PresentationModels.TypeModels",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    },
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$ModelDefinitionFactoryExtensions);
var Neptuo$PresentationModels$TypeModels$ReflectionModelDefinitionBuilder = {
    fullname: "Neptuo.PresentationModels.TypeModels.ReflectionModelDefinitionBuilder",
    baseTypeName: "Neptuo.PresentationModels.ModelDefinitionBuilderBase",
    assemblyName: "Neptuo.PresentationModels.TypeModels",
    Kind: "Class",
    definition: {
        ctor: function (modelType, metadataReaderService){
            this._ModelType = null;
            this._MetadataReaderService = null;
            Neptuo.PresentationModels.ModelDefinitionBuilderBase.ctor.call(this);
            if (System.Type.op_Equality$$Type$$Type(modelType, null))
                throw $CreateException(new System.ArgumentNullException.ctor$$String("modelType"), new Error());
            if (metadataReaderService == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("metadataReaderService"), new Error());
            this.set_ModelType(modelType);
            this.set_MetadataReaderService(metadataReaderService);
        },
        ModelType$$: "System.Type",
        get_ModelType: function (){
            return this._ModelType;
        },
        set_ModelType: function (value){
            this._ModelType = value;
        },
        MetadataReaderService$$: "Neptuo.PresentationModels.TypeModels.MetadataReaderService",
        get_MetadataReaderService: function (){
            return this._MetadataReaderService;
        },
        set_MetadataReaderService: function (value){
            this._MetadataReaderService = value;
        },
        BuildModelIdentifier: function (){
            return this.BuildIdentifier(this.get_ModelType());
        },
        BuildFieldDefinitions: function (){
            var fields = new System.Collections.Generic.List$1.ctor(Neptuo.PresentationModels.IFieldDefinition.ctor);
            var $it1 = this.get_ModelType().GetProperties().GetEnumerator();
            while ($it1.MoveNext()){
                var propertyInfo = $it1.get_Current();
                fields.Add(new Neptuo.PresentationModels.FieldDefinition.ctor(this.BuildIdentifier(propertyInfo), new Neptuo.PresentationModels.FieldType.ctor(propertyInfo.get_PropertyType()), this.BuildMetadata(propertyInfo)));
            }
            return fields;
        },
        BuildModelMetadata: function (){
            return this.BuildMetadata(this.get_ModelType());
        },
        BuildMetadata: function (memberInfo){
            var collection = new Neptuo.PresentationModels.TypeModels.MetadataBuilderCollection.ctor();
            var $it2 = memberInfo.GetCustomAttributes$$Boolean(true).GetEnumerator();
            while ($it2.MoveNext()){
                var attribute = $it2.get_Current();
                var reader = As(attribute, Neptuo.PresentationModels.TypeModels.IMetadataReader.ctor);
                if (reader != null)
                    reader.Apply(attribute, collection);
                else if ((function (){
                    var $1 = {
                        Value: reader
                    };
                    var $res = this.get_MetadataReaderService().TryGetReader(attribute.GetType(), $1);
                    reader = $1.Value;
                    return $res;
                }).call(this))
                    reader.Apply(attribute, collection);
            }
            return collection;
        },
        BuildIdentifier: function (memberInfo){
            return memberInfo.get_Name();
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["System.Type", "Neptuo.PresentationModels.TypeModels.MetadataReaderService"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$ReflectionModelDefinitionBuilder);
var Neptuo$PresentationModels$TypeModels$ModelDefinitionFactoryBase = {
    fullname: "Neptuo.PresentationModels.TypeModels.ModelDefinitionFactoryBase",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.TypeModels",
    interfaceNames: ["Neptuo.PresentationModels.TypeModels.IModelDefinitionFactory"],
    Kind: "Class",
    definition: {
        ctor: function (){
            this._Storage = null;
            System.Object.ctor.call(this);
            this.set_Storage(new System.Collections.Generic.Dictionary$2.ctor(System.Type.ctor, Neptuo.PresentationModels.IModelDefinition.ctor));
        },
        Storage$$: "System.Collections.Generic.Dictionary`2[[System.Type],[Neptuo.PresentationModels.IModelDefinition]]",
        get_Storage: function (){
            return this._Storage;
        },
        set_Storage: function (value){
            this._Storage = value;
        },
        Create: function (modelType){
            if (System.Type.op_Equality$$Type$$Type(modelType, null))
                throw $CreateException(new System.ArgumentNullException.ctor$$String("modelType"), new Error());
            var modelDefinition;
            if (!(function (){
                var $1 = {
                    Value: modelDefinition
                };
                var $res = this.get_Storage().TryGetValue(modelType, $1);
                modelDefinition = $1.Value;
                return $res;
            }).call(this)){
                var builder = this.CreateModelDefinitionBuilder(modelType);
                modelDefinition = builder.Build();
                this.get_Storage().set_Item$$TKey(modelType, modelDefinition);
            }
            return modelDefinition;
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$ModelDefinitionFactoryBase);
var Neptuo$PresentationModels$TypeModels$ReflectionModelDefinitionFactory = {
    fullname: "Neptuo.PresentationModels.TypeModels.ReflectionModelDefinitionFactory",
    baseTypeName: "Neptuo.PresentationModels.TypeModels.ModelDefinitionFactoryBase",
    assemblyName: "Neptuo.PresentationModels.TypeModels",
    Kind: "Class",
    definition: {
        ctor: function (metadataReaders){
            this._MetadataReaders = null;
            Neptuo.PresentationModels.TypeModels.ModelDefinitionFactoryBase.ctor.call(this);
            if (metadataReaders == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("metadataReaders"), new Error());
            this.set_MetadataReaders(metadataReaders);
        },
        MetadataReaders$$: "Neptuo.PresentationModels.TypeModels.MetadataReaderService",
        get_MetadataReaders: function (){
            return this._MetadataReaders;
        },
        set_MetadataReaders: function (value){
            this._MetadataReaders = value;
        },
        CreateModelDefinitionBuilder: function (modelType){
            return new Neptuo.PresentationModels.TypeModels.ReflectionModelDefinitionBuilder.ctor(modelType, this.get_MetadataReaders());
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["Neptuo.PresentationModels.TypeModels.MetadataReaderService"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$ReflectionModelDefinitionFactory);
var Neptuo$PresentationModels$TypeModels$ReflectionModelValueProvider$1 = {
    fullname: "Neptuo.PresentationModels.TypeModels.ReflectionModelValueProvider$1",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.TypeModels",
    interfaceNames: ["Neptuo.PresentationModels.IModelValueProvider"],
    Kind: "Class",
    definition: {
        ctor: function (TModel, model){
            this.TModel = TModel;
            this.properties = new System.Collections.Generic.Dictionary$2.ctor(System.String.ctor, System.Reflection.PropertyInfo.ctor);
            this._ModelType = null;
            this._Model = null;
            System.Object.ctor.call(this);
            if (model == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("model"), new Error());
            this.set_Model(model);
            this.set_ModelType(model.GetType());
        },
        ModelType$$: "System.Type",
        get_ModelType: function (){
            return this._ModelType;
        },
        set_ModelType: function (value){
            this._ModelType = value;
        },
        Model$$: "`0",
        get_Model: function (){
            return this._Model;
        },
        set_Model: function (value){
            this._Model = value;
        },
        TryGetValue: function (identifier, value){
            if (identifier == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("identifier"), new Error());
            value.Value = this.GetPropertyInfo(identifier).GetValue$$Object(this.get_Model());
            return true;
        },
        SetValue: function (identifier, value){
            if (identifier == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("identifier"), new Error());
            var propertyInfo = this.GetPropertyInfo(identifier);
            if (System.Reflection.PropertyInfo.op_Equality$$PropertyInfo$$PropertyInfo(propertyInfo, null))
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor$$String$$String("identifier", System.String.Format$$String$$Object$$Object("Unnable to find property \'{0}\' in \'{1}\'.", identifier, this.get_ModelType().get_FullName())), new Error());
            if (value != null && !propertyInfo.get_PropertyType().IsAssignableFrom(value.GetType())){
                var typeConverter = System.ComponentModel.TypeDescriptor.GetConverter$$Type(propertyInfo.get_PropertyType());
                if (typeConverter != null)
                    value = typeConverter.ConvertFrom$$Object(value);
            }
            propertyInfo.SetValue$$Object$$Object(this.get_Model(), value);
        },
        GetPropertyInfo: function (identifier){
            var propertyInfo;
            if (!(function (){
                var $1 = {
                    Value: propertyInfo
                };
                var $res = this.properties.TryGetValue(identifier, $1);
                propertyInfo = $1.Value;
                return $res;
            }).call(this)){
                propertyInfo = this.get_ModelType().GetProperty$$String(identifier);
                if (System.Reflection.PropertyInfo.op_Equality$$PropertyInfo$$PropertyInfo(propertyInfo, null))
                    throw $CreateException(new System.ArgumentOutOfRangeException.ctor$$String$$String("identifier", System.String.Format$$String$$Object$$Object("\'{0}\' doesn\'t contain property named \'{1}\'.", this.get_ModelType().get_FullName(), identifier)), new Error());
                this.properties.set_Item$$TKey(identifier, propertyInfo);
            }
            return propertyInfo;
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["TModel"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$ReflectionModelValueProvider$1);
var Neptuo$PresentationModels$TypeModels$ReflectionModelValueProvider = {
    fullname: "Neptuo.PresentationModels.TypeModels.ReflectionModelValueProvider",
    baseTypeName: "Neptuo.PresentationModels.TypeModels.ReflectionModelValueProvider$1",
    assemblyName: "Neptuo.PresentationModels.TypeModels",
    Kind: "Class",
    definition: {
        ctor: function (model){
            Neptuo.PresentationModels.TypeModels.ReflectionModelValueProvider$1.ctor.call(this, System.Object.ctor, model);
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["System.Object"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$ReflectionModelValueProvider);
var Neptuo$PresentationModels$TypeModels$ReflectionModelValueProviderFactory = {
    fullname: "Neptuo.PresentationModels.TypeModels.ReflectionModelValueProviderFactory",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.TypeModels",
    interfaceNames: ["Neptuo.PresentationModels.TypeModels.IModelValueProviderFactory"],
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        },
        Create: function (instance){
            return new Neptuo.PresentationModels.TypeModels.ReflectionModelValueProvider.ctor(instance);
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$ReflectionModelValueProviderFactory);

