const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set up an Set of dots
const animatedDots = new Set(); // list of animated dots

class Dot {
    constructor(x, height, speed) {
        this.x = x;
        this.height = height;
        this.speed = speed;
    }

    draw() {
        // draw dot
        let dotRadius = 10;
        ctx.beginPath();
        ctx.arc(this.x, canvas.height - this.height, dotRadius, 0, 2 * Math.PI);
        ctx.fill();
    }
}


// physics animation parameters
const dotAcceleration = -2000; // pixel per second^2
const bouncingLossFactor = 0.9; // speed loss factor when rebouncing at the bottom
const minBouncingSpeed = 25; // minimum speed stopping

// physics animation state
let animationTime = null; // current animation time

canvas.addEventListener('click', onClick);

function onClick(evt) {
    const canvasClientRect = canvas.getBoundingClientRect();
    const x = evt.clientX - canvasClientRect.x;
    const y = evt.clientY - canvasClientRect.y;

    // create dot
    const dot = new Dot(x, canvas.height - y, 0);
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
        if (animateDot(dot, deltaTime)) {
            dot.draw();
        } else {
            animatedDots.delete(dot);
        }

        // advance animation time
        animationTime = now;

        // continue animation
        if (animatedDots.size > 0) {
            requestAnimationFrame(onAnimationFrame);
        }

    }
}


function animateDot(dot, deltaTime) {
    // update height from speed
    dot.height += deltaTime * dot.speed;

    // bounce at bottom
    if (dot.height <= 0) {
        dot.height = -dot.height; // correct of negative y-positions
        dot.speed *= -bouncingLossFactor; // invert speed and apply loss

        // stop animation when rebouncing too slowly
        if (dot.speed < minBouncingSpeed) {
            return false;
        }
    }

    // update speed from acceleration
    dot.speed += deltaTime * dotAcceleration;

    // continue animation
    return true;
}