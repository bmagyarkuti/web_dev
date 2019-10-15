import Bird from './bird.js';
import Renderer from './renderer.js';

const image = new Image();
image.src = './bird.png';

const canvas = document.querySelector('canvas');


const bird = new Bird();
const renderer = new Renderer(canvas, image, bird)

const loop = () => {
  renderer.render();
  bird.move();
  window.requestAnimationFrame(loop);
}

loop();
