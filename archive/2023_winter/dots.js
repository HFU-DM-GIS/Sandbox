const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const width = canvas.widht;
const height = canvas.height;

// physics animation parameters
const dotAcceleration = -2000; // pixel per second^2
const bouncingLossFactor = 0.9; // speed loss factor when rebouncing at the bottom
const minBouncingSpeed = 25; // minimum speed stopping
const animatedDots = new Set(); // list of animated dots
let animationTime = null; // current animation time


// add event listener
canvas.addEventListener('click', onClick);

function getRandomNumber(min, max) {
  return min + (max - min) * Math.random();
}


function onClick(evt) {
    const canvasClientRect = canvas.getBoundingClientRect();
    const x = evt.clientX - canvasClientRect.x;
    const y = evt.clientY - canvasClientRect.y;

    const hue = getRandomNumber(0, 360);

    // create new colored circle
    const color = `hsla(${hue}, 100%, 50%, 0.8)`;
    // create dot
    const dot = new ColoredDot(x,canvas.height - y, 0, color);

    // add dot to set of animated dots
    animatedDots.add(dot);

      // start animation on first dot
    if (animatedDots.size === 1) {
      animationTime = 0.001 * performance.now();
      requestAnimationFrame(onAnimationFrame);
    }
}

function onAnimationFrame() {
    const now = 0.001 * performance.now();
    const deltaTime = now - animationTime;

    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    for (let dot of animatedDots) {
        if (dot.animate(deltaTime)) {
            dot.draw();
        } else {
            console.log("before delete");
            animatedDots.delete(dot);
        }
    }
      // advance animation time
      animationTime = now;
  
      // continue animation if set not empty
      if (animatedDots.size > 0) {
        requestAnimationFrame(onAnimationFrame);
      }
    }

class Dot {
  constructor(x, height, speed) {
    this.x = x;
    this.height = height;
    this.speed = speed;
  }

  draw() {
    let dotRadius = 10;
    ctx.beginPath();
    ctx.arc(this.x, canvas.height - this.height - dotRadius, dotRadius, 0, 2.0*Math.PI);
    ctx.fill();
  }

  animate(deltaTime) {
    
    // update height from speed
    this.height += deltaTime * this.speed;
    
    // bounce at bottom
    if (this.height <= 0) {
      this.height = -this.height; // correct of negative y-positions
      this.speed *= -bouncingLossFactor; // invert speed and apply loss
    
        // stop animation when rebouncing too slowly
        if (this.speed < minBouncingSpeed) {
            console.log("Animate returns false");
            return false;
        }
    }
    // update speed from acceleration
    this.speed += deltaTime * dotAcceleration;

    // continue animation
    return true;
  }
}

class ColoredDot extends Dot {
    constructor(x, height, speed, color) {
      super(x,height,speed);
      this.color = color;
    }

    draw() {
      ctx.fillStyle = this.color;
      super.draw();
    }

    animate(deltaTime) {
      return super.animate(deltaTime);
    }
}