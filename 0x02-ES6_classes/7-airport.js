export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // Code Getter And Setter
  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
