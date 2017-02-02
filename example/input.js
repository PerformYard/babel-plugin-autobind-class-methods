export default class Parent {
  static staticProp1 = 'staticProp1';

  static staticMethod1() {}

  classProp1 = 'classProp1';

  constructor() {
    this.classProp2 = 'classProp2';
  }

  classMethod1() {}

  render() {}
}

export class Child
extends Parent {
  static staticProp2 = 'staticProp2';

  static staticMethod2() {}

  constructor() {
    super();

    this.classProp3 = 'classProp3';
  }

  classMethod2() {}
}

class ChildNoConstructor
extends Parent {
  classMethod2() {}
}

class ChildNoConstructorWithProperties
extends Parent {
  classProp1 = 'classProp1';

  classMethod1() {}

  render() {}
}

class NoConstructor {
  classMethod1() {}

  render() {}
}

class NoConstructorWithProperties {
  classProp1 = 'classProp1';

  classMethod1() {}

  render() {}
}
