export const starField = sketch => {
  let stars = [],
      speed;

  sketch.setup = function() {
    const canvas = sketch.createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent('home');

    for(let i = 0; i < 500; i++) {
      stars.push(new Star());
    }
  };

  sketch.draw = function() {
    sketch.background('#132030');
    sketch.translate(sketch.width / 2, sketch.height / 2);
    speed = sketch.map(0.2, 0, sketch.width, 2, 20);

    for(let i = 0; i < stars.length; i++) {
      stars[i].display();
      stars[i].update();
    }
  };

  function Star() {
    this.x = sketch.random(-sketch.width, sketch.width);
    this.y = sketch.random(-sketch.height, sketch.height);
    this.z = sketch.random(sketch.width);

    this.display = function() {
      sketch.noStroke();
      sketch.fill(255);

      const sx = sketch.map(this.x / this.z, 0, 1, 0, sketch.width);
      const sy = sketch.map(this.y / this.z, 0, 1, 0, sketch.height);
      const r = sketch.map(this.z, 0, sketch.width, 12, 0);
      sketch.ellipse(sx, sy, r, r);
    };

    this.update = function() {
      this.z -= speed;

      if(this.z < 1) {
        this.z = sketch.width;
        this.x = sketch.random(-sketch.width, sketch.width);
        this.y = sketch.random(-sketch.height, sketch.height);
      }
    }
  }
};
