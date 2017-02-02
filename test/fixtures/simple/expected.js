'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Example = function () {
  _createClass(Example, null, [{
    key: 'staticMethod1',
    value: function staticMethod1() {}
  }]);

  function Example() {
    _classCallCheck(this, Example);

    this.classMethod1 = this.classMethod1.bind(this);
    this.classProp1 = 'classProp1';

    this.classProp2 = 'classProp2';
  }

  _createClass(Example, [{
    key: 'classMethod1',
    value: function classMethod1() {}
  }]);

  return Example;
}();

Example.staticProp1 = 'staticProp1';
exports.default = Example;
