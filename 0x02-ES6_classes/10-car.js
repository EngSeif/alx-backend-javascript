const brandSymbol = Symbol('brand');
const motorSymbol = Symbol('motor');
const colorSymbol = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[brandSymbol] = brand;
    this[motorSymbol] = motor;
    this[colorSymbol] = color;
  }

  get brand() {
    return this[brandSymbol];
  }

  set brand(brand) {
    if (typeof brand === 'string') {
      this[brandSymbol] = brand;
    } else {
      throw new TypeError('Brand must be a string');
    }
  }

  get motor() {
    return this[motorSymbol];
  }

  set motor(motor) {
    if (typeof motor === 'string') {
      this[motorSymbol] = motor;
    } else {
      throw new TypeError('Motor must be a string');
    }
  }

  get color() {
    return this[colorSymbol];
  }

  set color(color) {
    if (typeof color === 'string') {
      this[colorSymbol] = color;
    } else {
      throw new TypeError('Color must be a string');
    }
  }

  cloneCar() {
    return new this.constructor(this[brandSymbol], this[motorSymbol], this[colorSymbol]);
  }
}
