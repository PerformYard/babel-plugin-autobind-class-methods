'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _makeJsClassGreatAgain(_this, funcName, params) {
  return Object.getPrototypeOf(_this)[funcName].apply(_this, params);
}

var Simple = function () {
  function Simple() {
    var _this2 = this;

    _classCallCheck(this, Simple);

    this.greet = function () {
      for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
      }

      return _makeJsClassGreatAgain(_this2, 'greet', rest);
    };
  }

  _createClass(Simple, [{
    key: 'greet',
    value: function greet() {
      console.log(this.greeting);
    }
  }]);

  return Simple;
}();

var Example = function (_Simple) {
  _inherits(Example, _Simple);

  function Example() {
    _classCallCheck(this, Example);

    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Example).call(this));

    _this3.render = function () {
      for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        rest[_key2] = arguments[_key2];
      }

      return _makeJsClassGreatAgain(_this3, 'render', rest);
    };

    _this3.greeting = 'Hello';
    return _this3;
  }

  _createClass(Example, [{
    key: 'render',
    value: function render() {
      setTimeout(this.greet, 0);
    }
  }]);

  return Example;
}(Simple);

var example = new Example();

example.render(); // logs out 'Hello', in vanilla js it would log out undefined
