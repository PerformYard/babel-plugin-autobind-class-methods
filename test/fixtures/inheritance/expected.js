'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parent = function () {
  function Parent() {
    _classCallCheck(this, Parent);

    this.method1 = this.method1.bind(this);
    this.prop1 = 'prop1';

    this.prop2 = 'prop2';
  }

  _createClass(Parent, [{
    key: 'method1',
    value: function method1() {}
  }, {
    key: 'render',
    value: function render() {}
  }]);

  return Parent;
}();

var Child = function (_Parent) {
  _inherits(Child, _Parent);

  function Child() {
    _classCallCheck(this, Child);

    var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this));

    _this.method2 = _this.method2.bind(_this);


    _this.prop3 = 'prop3';
    return _this;
  }

  _createClass(Child, [{
    key: 'method2',
    value: function method2() {}
  }]);

  return Child;
}(Parent);

var ChildNoConstructor = function (_Parent2) {
  _inherits(ChildNoConstructor, _Parent2);

  function ChildNoConstructor() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, ChildNoConstructor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = ChildNoConstructor.__proto__ || Object.getPrototypeOf(ChildNoConstructor)).call.apply(_ref, [this].concat(args))), _this2), _this2.method2 = _this2.method2.bind(_this2), _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(ChildNoConstructor, [{
    key: 'method2',
    value: function method2() {}
  }]);

  return ChildNoConstructor;
}(Parent);

var ChildNoConstructorWithProperties = function (_Parent3) {
  _inherits(ChildNoConstructorWithProperties, _Parent3);

  function ChildNoConstructorWithProperties() {
    var _ref2;

    var _temp2, _temp3, _this3, _ret2;

    _classCallCheck(this, ChildNoConstructorWithProperties);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_temp3 = (_this3 = _possibleConstructorReturn(this, (_ref2 = ChildNoConstructorWithProperties.__proto__ || Object.getPrototypeOf(ChildNoConstructorWithProperties)).call.apply(_ref2, [this].concat(args))), _this3), _this3.method1 = _this3.method1.bind(_this3), _temp3), _this3.prop1 = 'prop1', _temp2), _possibleConstructorReturn(_this3, _ret2);
  }

  _createClass(ChildNoConstructorWithProperties, [{
    key: 'method1',
    value: function method1() {}
  }, {
    key: 'render',
    value: function render() {}
  }]);

  return ChildNoConstructorWithProperties;
}(Parent);
