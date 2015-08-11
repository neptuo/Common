/* Generated by SharpKit 5 v5.4.4 */
"use strict";
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
var System$Text$StringBuilder = {
    fullname: "System.Text.StringBuilder",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.System.Client",
    Kind: "Class",
    definition: {
        ctor: function (){
            this.array = null;
            this.length = 0;
            System.Object.ctor.call(this);
            this.array = new Array(0);
            this.length = 0;
        },
        ctor$$String: function (s){
            this.array = null;
            this.length = 0;
            System.Object.ctor.call(this);
            this.array = [s];
            this.length = s == null ? 0 : s.length;
        },
        Append$$Char: function (s){
            this.array.push(s);
            this.length += 1;
        },
        Append$$String: function (s){
            this.array.push(s);
            this.length += s.length;
        },
        AppendFormat$$String$$Object: function (s, arg0){
            var ss = System.String.Format$$String$$Object(s, arg0);
            this.array.push(ss);
            this.length += ss.length;
        },
        AppendFormat$$String$$Object$$Object: function (s, arg0, arg1){
            var ss = System.String.Format$$String$$Object$$Object(s, arg0, arg1);
            this.array.push(ss);
            this.length += ss.length;
        },
        AppendFormat$$String$$Object$$Object$$Object: function (s, arg0, arg1, arg2){
            var ss = System.String.Format$$String$$Object$$Object$$Object(s, arg0, arg1, arg2);
            this.array.push(ss);
            this.length += ss.length;
        },
        AppendLine: function (){
            this.Append$$String(System.Environment.get_NewLine());
        },
        AppendLine$$String: function (s){
            this.Append$$String(s);
            this.AppendLine();
        },
        Append$$Object: function (obj){
            if (obj != null){
                var s = obj.toString();
                this.array.push(s);
                this.length += s.length;
            }
        },
        Insert$$Int32$$Boolean: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.IndexOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value.toString());
            return this;
        },
        Insert$$Int32$$Byte: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$Char: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$Char$Array: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$Decimal: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$Double: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$Int16: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$Int32: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$Int64: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$Object: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$SByte: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$Single: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$String: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$UInt16: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$UInt32: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$UInt64: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$String$$Int32: function (index, value, count){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            for (var i = 0; i < count; i++)
                this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$Char$Array$$Int32: function (index, value, count){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            for (var i = 0; i < count; i++)
                this.array.insert(index, value);
            return this;
        },
        ToString: function (){
            return this.array.join("");
        },
        Length$$: "System.Int32",
        get_Length: function (){
            return this.array.length;
        },
        set_Length: function (value){
            if (value < 0)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            if (value < this.array.length)
                this.array.length = value;
            else {
                for (var i = this.array.length; i < this.length; i++)
                    this.array.push("\0");
            }
        },
        Remove: function (start, count){
            var s = this.array.join("");
            s = s.Remove$$Int32$$Int32(start, count);
            this.array = [s];
            this.length = s.length;
            return this;
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }, {
        name: "ctor$$String",
        parameters: ["System.String"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(System$Text$StringBuilder);
