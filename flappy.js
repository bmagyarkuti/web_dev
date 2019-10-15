import Bird from './bird.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const bird = new Bird();

const image = new Image();
image.src = './bird.png';

const render = function() {
  ctx.drawImage(image, bird.position, 100, 50, 50);
}

image.onload = render;

ctx.fillRect(5, 5, 20, 100)
ctx.strokeRect(30, 5, 20, 100)