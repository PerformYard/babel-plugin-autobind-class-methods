'use strict'
// TODO REFACTOR, this was written as a hack

exports.__esModule = true;

var template = require("babel-template");

module.exports = function (_ref) {
    var t = _ref.types;
    return {
        inherits: require("babel-plugin-syntax-class-properties"),

        visitor: {
            ClassExpression: function(path, state){
                let isDerived = !!path.node.superClass;
                let constructor;
                let body = path.get("body");
                let methods = [];

                for (let path of body.get("body")) {
                    if (path.isClassMethod({ kind: "constructor" })) {
                        constructor = path;
                    } else{
                        methods.push(path.node.key)
                    }
                }

                state.file.path.unshiftContainer("body",(template('function _makeJsClassGreatAgain(_this, funcName, params){return Object.getPrototypeOf(_this)[funcName].apply(_this, params)};')({})))

                var newNodes = methods.map((method)=> {
                        return template('THIS.METHOD = ()=> _makeJsClassGreatAgain(THIS, \'' + method.name + '\', arguments)')({THIS: t.thisExpression(), METHOD: method})
                    }
                );

                if (!constructor) {
                    let newConstructor = t.classMethod("constructor", t.identifier("constructor"), [], t.blockStatement([]));
                    if (isDerived) {
                        newConstructor.params = [t.restElement(t.identifier("args"))];
                        newConstructor.body.body.push(t.callExpression(t.super(), [t.spreadElement(t.identifier("args"))]));
                    }
                    constructor = body.unshiftContainer("body", newConstructor)[0];
                }

                newNodes.forEach((node)=>{
                    constructor.get("body").pushContainer("body", node)
                })
            }
        }
    };
};
