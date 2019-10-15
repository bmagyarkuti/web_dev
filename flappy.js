import Bird from './bird.js';
import Renderer from './renderer.js';

const image = new Image();
image.src = './bird.png';

const canvas = document.querySelector('canvas');

const bird = new Bird();
image.onload = () => new Renderer(canvas, image, bird).render();
