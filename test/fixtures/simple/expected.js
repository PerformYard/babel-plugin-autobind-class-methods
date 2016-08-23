'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _makeJsClassGreatAgain(_this, funcName, params) {
  return Object.getPrototypeOf(_this)[funcName].apply(_this, params);
}

var Example = function () {
  function Example() {
    var _this2 = this;

    _classCallCheck(this, Example);

    this.greeting = 'Hello';

    this.greet = function () {
      for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
      }

      return _makeJsClassGreatAgain(_this2, 'greet', rest);
    };

    this.render = function () {
      for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        rest[_key2] = arguments[_key2];
      }

      return _makeJsClassGreatAgain(_this2, 'render', rest);
    };
  }

  _createClass(Example, [{
    key: 'greet',
    value: function greet() {
      console.log(this.greeting);
    }
  }, {
    key: 'render',
    value: function render() {
      setTimeout(this.greet, 0);
    }
  }]);

  return Example;
}();

var example = new Example();

example.render(); // logs out 'Hello', in vanilla js it would log out undefined
