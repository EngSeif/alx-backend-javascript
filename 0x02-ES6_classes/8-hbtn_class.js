export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get location() {
    return this._name;
  }

  set location(location) {
    if (typeof location === 'string') {
      this._location = location;
    } else {
      throw new TypeError('ocation must be a string');
    }
  }

  get size() {
    return this._size;
  }

  set size(size) {
    if (typeof size === 'number') {
      this._size = size;
    } else {
      throw new TypeError('Size must be a number');
    }
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
