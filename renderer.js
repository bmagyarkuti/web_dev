export default class Renderer {
  constructor(canvas, image, bird) {
    this._canvas = canvas;
    this._ctx =  canvas.getContext('2d');
    this._bird = bird;
    this._image = image;
  }

  render() {
    console.log('image is', this._image);
    this._ctx.drawImage(this._image, this._bird.position, 100, 50, 50);
//     ctx.fillRect(5, 5, 20, 100)
// ctx.strokeRect(30, 5, 20, 100)
  }
}