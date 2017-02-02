class Parent {
  prop1 = 'prop1';

  constructor() {
    this.prop2 = 'prop2';
  }

  method1() {}

  render() {}
}

class Child
extends Parent {
  constructor() {
    super();

    this.prop3 = 'prop3';
  }

  method2() {}
}

class ChildNoConstructor
extends Parent {
  method2() {}
}

class ChildNoConstructorWithProperties
extends Parent {
  prop1 = 'prop1';

  method1() {}

  render() {}
}

class NoConstructor {
  method1() {}

  render() {}
}

class NoConstructorWithProperties {
  prop1 = 'prop1';

  method1() {}

  render() {}
}
