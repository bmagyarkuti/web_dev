export default class Bird {
  constructor() {
    this._position = 100;
  }

  get position() {
    return this._position;
  }

  move() {
    this._position += 1;
  }
}