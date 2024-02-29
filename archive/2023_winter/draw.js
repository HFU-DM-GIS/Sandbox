// get canvas and context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

class Circle {
    // constructor
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
    }
  
    // draw method
    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
      ctx.stroke();
    }
  }

  class ColoredCircle extends Circle {
    constructor(x, y, size, color) {
        super(x,y,size);
        this.color = color;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        super.draw(ctx);
        ctx.fill();
    }
  }

  class ThickCircle extends ColoredCircle {
    constructor(x,y,size,color,thickness){
        super(x,y,size,color);
        this.thickness = thickness;
    }

    draw(ctx) {
        ctx.lineWidth = this.thickness;
        super.draw(ctx);
    }
  }
  
  function getRandomNumber(min, max) {
    return min + (max - min) * Math.random();
  }
  
  for (let i = 0; i < 10; i++) {
    const x = getRandomNumber(100, 300);
    const y = getRandomNumber(100, 300);
    const size = getRandomNumber(10, 40);
    const hue = getRandomNumber(0, 360);

    // create new colored circle
    const color = `hsla(${hue}, 100%, 50%, 0.5)`;
  
    const thickness = getRandomNumber(2,10);
    // create new circle
    const circle = new ThickCircle(x, y, size, color, thickness);
  
    // draw circle
    circle.draw(ctx);
  }