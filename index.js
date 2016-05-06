'use strict'
// TODO REFACTOR, this was written as a hack

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.__esModule = true;

var template = require("babel-template");

module.exports = function (_ref) {

    var findBareSupers = { /*istanbul ignore next*/
        Super: function Super(path) {
            if (path.parentPath.isCallExpression({ callee: path.node })) {
                this.push(path.parentPath);
            }
        }
    };

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

                var newNodes = methods
                    .map((method)=> {
                            return template('THIS.METHOD = (...rest)=> _makeJsClassGreatAgain(THIS, \'' + method.name + '\', rest)')({THIS: t.thisExpression(), METHOD: method})
                        }
                    );

                if (!constructor) {
                    let newConstructor = t.classMethod("constructor", t.identifier("constructor"), [], t.blockStatement([]));
                    if (isDerived) {
                        newConstructor.params = [t.restElement(t.identifier("args"))];
                        newConstructor.body.body.push(t.returnStatement(t.callExpression(t.super(), [t.spreadElement(t.identifier("args"))])));
                    }
                    constructor = body.unshiftContainer("body", newConstructor)[0];
                }
                var bareSupers = [];
                constructor.traverse(findBareSupers, bareSupers);
                for (var _iterator4 = bareSupers, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);;) {
                    var _ref5;

                    if (_isArray4) {
                        if (_i4 >= _iterator4.length) break;
                        _ref5 = _iterator4[_i4++];
                    } else {
                        _i4 = _iterator4.next();
                        if (_i4.done) break;
                        _ref5 = _i4.value;
                    }

                    var bareSuper = _ref5;

                    newNodes.forEach((node)=>{
                        bareSuper.insertAfter(node);
                    })
                }
            }
        }
    };
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
