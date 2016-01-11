/* Generated by SharpKit 5 v5.4.4 */
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
var Neptuo$Services$Deleters$DefaultDeleteDispatcher = {
    fullname: "Neptuo.Services.Deleters.DefaultDeleteDispatcher",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Deleters",
    interfaceNames: ["Neptuo.Services.Deleters.IDeleteDispatcher"],
    Kind: "Class",
    definition: {
        ctor: function (){
            this.handlersLock = new System.Object.ctor();
            this.searchHandlerLock = new System.Object.ctor();
            this.handlers = new System.Collections.Generic.Dictionary$2.ctor(System.String.ctor, Neptuo.Services.Deleters.Handlers.IDeleteHandler.ctor);
            this.onSearchHandler = new Neptuo.OutFuncCollection$3.ctor(System.String.ctor, Neptuo.Services.Deleters.Handlers.IDeleteHandler.ctor, System.Boolean.ctor);
            System.Object.ctor.call(this);
        },
        Add: function (objectType, handler){
            Neptuo.Ensure.NotNull$$Object$$String(objectType, "objectType");
            Neptuo.Ensure.NotNull$$Object$$String(handler, "handler");
            this.handlers.set_Item$$TKey(objectType, handler);
            return this;
        },
        AddSearchHandler: function (searchHandler){
            Neptuo.Ensure.NotNull$$Object$$String(searchHandler, "searchHandler");
            this.onSearchHandler.Add(searchHandler);
            return this;
        },
        PrepareContext: function (key){
            Neptuo.Ensure.NotNull$$Object$$String(key, "key");
            var handler;
            if ((function (){
                var $1 = {
                    Value: handler
                };
                var $res = this.handlers.TryGetValue(key.get_Type(), $1);
                handler = $1.Value;
                return $res;
            }).call(this))
                return handler.Handle(key);
            if ((function (){
                var $1 = {
                    Value: handler
                };
                var $res = Neptuo._OutFuncCollectionExtensions.TryExecute$2(System.String.ctor, Neptuo.Services.Deleters.Handlers.IDeleteHandler.ctor, this.onSearchHandler, key.get_Type(), $1);
                handler = $1.Value;
                return $res;
            }).call(this))
                return handler.Handle(key);
            return new Neptuo.Services.Deleters.MissingHandlerContext.ctor(key);
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Services$Deleters$DefaultDeleteDispatcher);
var Neptuo$Services$Deleters$Handlers$IDeleteExecutionHandler = {
    fullname: "Neptuo.Services.Deleters.Handlers.IDeleteExecutionHandler",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Deleters",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Deleters$Handlers$IDeleteExecutionHandler);
var Neptuo$Services$Deleters$Handlers$IDeleteHandler = {
    fullname: "Neptuo.Services.Deleters.Handlers.IDeleteHandler",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Deleters",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Deleters$Handlers$IDeleteHandler);
var Neptuo$Services$Deleters$Handlers$ModelDeleteHandlerBase$2 = {
    fullname: "Neptuo.Services.Deleters.Handlers.ModelDeleteHandlerBase$2",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Deleters",
    interfaceNames: ["Neptuo.Services.Deleters.Handlers.IDeleteHandler"],
    Kind: "Class",
    definition: {
        ctor: function (TModel, TKey, repository){
            this.TModel = TModel;
            this.TKey = TKey;
            this.repository = null;
            System.Object.ctor.call(this);
            Neptuo.Ensure.NotNull$$Object$$String(repository, "repository");
            this.repository = repository;
        },
        Handle: function (key){
            var modelKey = As(key, this.TKey);
            Neptuo.Ensure.NotNull$$Object$$String(modelKey, "key");
            var model = this.repository.Find(modelKey);
            if (model == null)
                return new Neptuo.Services.Deleters.MissingHandlerContext.ctor(key);
            return this.HandleModel(model);
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["Neptuo.Models.Repositories.IReadOnlyRepository"]
    }
    ],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Deleters$Handlers$ModelDeleteHandlerBase$2);
var Neptuo$Services$Deleters$IDeleteContext = {
    fullname: "Neptuo.Services.Deleters.IDeleteContext",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Deleters",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Deleters$IDeleteContext);
var Neptuo$Services$Deleters$IDeleteDispatcher = {
    fullname: "Neptuo.Services.Deleters.IDeleteDispatcher",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Deleters",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Deleters$IDeleteDispatcher);
var Neptuo$Services$Deleters$IDeleteHandlerCollection = {
    fullname: "Neptuo.Services.Deleters.IDeleteHandlerCollection",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Deleters",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Deleters$IDeleteHandlerCollection);
var Neptuo$Services$Deleters$IDeleteReference = {
    fullname: "Neptuo.Services.Deleters.IDeleteReference",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Deleters",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Deleters$IDeleteReference);
var Neptuo$Services$Deleters$MissingHandlerContext = {
    fullname: "Neptuo.Services.Deleters.MissingHandlerContext",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Deleters",
    interfaceNames: ["Neptuo.Services.Deleters.IDeleteContext"],
    Kind: "Class",
    definition: {
        ctor: function (sourceKey){
            this._SourceKey = null;
            System.Object.ctor.call(this);
            Neptuo.Ensure.NotNull$$Object$$String(sourceKey, "sourceKey");
            this.set_SourceKey(sourceKey);
        },
        SourceKey$$: "Neptuo.Models.Keys.IKey",
        get_SourceKey: function (){
            return this._SourceKey;
        },
        set_SourceKey: function (value){
            this._SourceKey = value;
        },
        CanDelete$$: "System.Boolean",
        get_CanDelete: function (){
            return false;
        },
        References$$: "System.Collections.Generic.IEnumerable`1[[Neptuo.Services.Deleters.IDeleteReference]]",
        get_References: function (){
            return System.Linq.Enumerable.Empty$1(Neptuo.Services.Deleters.IDeleteReference.ctor);
        },
        Delete: function (){
            throw $CreateException(Neptuo._EnsureSystemExtensions.NotSupported(Neptuo.Ensure.Exception, null), new Error());
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["Neptuo.Models.Keys.IKey"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Services$Deleters$MissingHandlerContext);
var Neptuo$Services$Deleters$VersionInfo = {
    fullname: "Neptuo.Services.Deleters.VersionInfo",
    baseTypeName: "System.Object",
    staticDefinition: {
        cctor: function (){
            Neptuo.Services.Deleters.VersionInfo.Version = "1.0.0";
        },
        GetVersion: function (){
            return new System.Version.ctor$$String("1.0.0");
        }
    },
    assemblyName: "Neptuo.Services.Deleters",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    },
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Deleters$VersionInfo);
