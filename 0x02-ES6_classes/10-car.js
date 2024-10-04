const brandSymbol = Symbol('brand');
const motorSymbol = Symbol('motor');
const colorSymbol = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(brand) {
    if (typeof brand === 'string') {
      this._brand = brand;
    } else {
      throw new TypeError('Brand must be a string');
    }
  }

  get motor() {
    return this._motor;
  }

  set motor(motor) {
    if (typeof motor === 'string') {
      this._motor = motor;
    } else {
      throw new TypeError('Motor must be a string');
    }
  }

  get color() {
    return this._color;
  }

  set color(color) {
    if (typeof color === 'string') {
      this._color = color;
    } else {
      throw new TypeError('Color must be a string');
    }
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
