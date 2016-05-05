// TODO REFACTOR, this was written as a hack

exports.__esModule = true;

var template = require("babel-template");

module.exports = function ({ types: t }) {
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

                var newNodes = methods.map((method)=>
                    t.assignmentExpression(
                        "=",
                        t.memberExpression(t.thisExpression(), method),
                        t.functionExpression(null,[],
                            t.blockStatement([
                                template('return _makeJsClassGreatAgain(_this, \'' + method.name + '\', arguments)')({})
                            ])
                        )
                    )
                )

                if (!constructor) {
                    let newConstructor = t.classMethod("constructor", t.identifier("constructor"), [], t.blockStatement([]));
                    if (isDerived) {
                        newConstructor.params = [t.restElement(t.identifier("args"))];
                        newConstructor.body.body.push(t.returnStatement(t.callExpression(t.super(), [t.spreadElement(t.identifier("args"))])));
                    }
                    constructor = body.unshiftContainer("body", newConstructor)[0];
                }

                newNodes.forEach((node)=>{
                    constructor.get("body").pushContainer("body", node)
                })

                if (!isDerived) {
                    constructor.get("body").insertBefore(template(`var _this = this;`)({}))
                }
            }
        }
    };
};