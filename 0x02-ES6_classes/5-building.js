export default class Building {
  constructor(sqft) {
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new TypeError('Sqft must be a number');
    }
  }

  // sqft Getter And Setter
  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    return this;
  }
}
