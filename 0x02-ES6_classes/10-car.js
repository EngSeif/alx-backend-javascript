// 10-car.js

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Getter for species - allows returning the correct constructor when cloning
  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    // Use the species constructor to create a new instance
    const SpeciesConstructor = this.constructor[Symbol.species];
    return new SpeciesConstructor(this._brand, this._motor, this._color);
  }
}

export default Car;
