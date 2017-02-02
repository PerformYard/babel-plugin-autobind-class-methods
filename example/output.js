'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parent = function () {
  _createClass(Parent, null, [{
    key: 'staticMethod1',
    value: function staticMethod1() {}
  }]);

  function Parent() {
    _classCallCheck(this, Parent);

    this.classMethod1 = this.classMethod1.bind(this);
    this.classProp1 = 'classProp1';

    this.classProp2 = 'classProp2';
  }

  _createClass(Parent, [{
    key: 'classMethod1',
    value: function classMethod1() {}
  }, {
    key: 'render',
    value: function render() {}
  }]);

  return Parent;
}();

Parent.staticProp1 = 'staticProp1';
exports.default = Parent;

var Child = exports.Child = function (_Parent) {
  _inherits(Child, _Parent);

  _createClass(Child, null, [{
    key: 'staticMethod2',
    value: function staticMethod2() {}
  }]);

  function Child() {
    _classCallCheck(this, Child);

    var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this));

    _this.classMethod2 = _this.classMethod2.bind(_this);


    _this.classProp3 = 'classProp3';
    return _this;
  }

  _createClass(Child, [{
    key: 'classMethod2',
    value: function classMethod2() {}
  }]);

  return Child;
}(Parent);

Child.staticProp2 = 'staticProp2';

var ChildNoConstructor = function (_Parent2) {
  _inherits(ChildNoConstructor, _Parent2);

  function ChildNoConstructor() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, ChildNoConstructor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = ChildNoConstructor.__proto__ || Object.getPrototypeOf(ChildNoConstructor)).call.apply(_ref, [this].concat(args))), _this2), _this2.classMethod2 = _this2.classMethod2.bind(_this2), _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(ChildNoConstructor, [{
    key: 'classMethod2',
    value: function classMethod2() {}
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

    return _ret2 = (_temp2 = (_temp3 = (_this3 = _possibleConstructorReturn(this, (_ref2 = ChildNoConstructorWithProperties.__proto__ || Object.getPrototypeOf(ChildNoConstructorWithProperties)).call.apply(_ref2, [this].concat(args))), _this3), _this3.classMethod1 = _this3.classMethod1.bind(_this3), _temp3), _this3.classProp1 = 'classProp1', _temp2), _possibleConstructorReturn(_this3, _ret2);
  }

  _createClass(ChildNoConstructorWithProperties, [{
    key: 'classMethod1',
    value: function classMethod1() {}
  }, {
    key: 'render',
    value: function render() {}
  }]);

  return ChildNoConstructorWithProperties;
}(Parent);

var NoConstructor = function () {
  function NoConstructor() {
    _classCallCheck(this, NoConstructor);

    this.classMethod1 = this.classMethod1.bind(this);
  }

  _createClass(NoConstructor, [{
    key: 'classMethod1',
    value: function classMethod1() {}
  }, {
    key: 'render',
    value: function render() {}
  }]);

  return NoConstructor;
}();

var NoConstructorWithProperties = function () {
  function NoConstructorWithProperties() {
    _classCallCheck(this, NoConstructorWithProperties);

    this.classMethod1 = this.classMethod1.bind(this);
    this.classProp1 = 'classProp1';
  }

  _createClass(NoConstructorWithProperties, [{
    key: 'classMethod1',
    value: function classMethod1() {}
  }, {
    key: 'render',
    value: function render() {}
  }]);

  return NoConstructorWithProperties;
}();
