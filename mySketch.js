function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#645DD7");
  duck.update();
  duck.draw();
}

class Duck {
  constructor(size, x = 0, y = 0) {
    this.x = x * size;
    this.y = y;
    this.size = size;
  }
  update() {
    this.x = lerp(this.x, mouseX, 0.01);
    this.y = lerp(this.y, mouseY, 0.01);
  }
  draw() {
    noStroke();
    push();
    fill("#F2FF49");
    circle(lerp(this.x, mouseX, 0.02), this.y - this.size / 1.5, this.size);
    fill(255);
    circle(
      lerp(this.x, mouseX, 0.02),
      this.y - this.size / 1.3,
      this.size / 3.5
    );
    fill(0);
    circle(lerp(this.x, mouseX, 0.02), this.y - this.size / 1.3, this.size / 5);
    fill("#FF4242");
    ellipse(
      lerp(this.x, mouseX, 0.05),
      this.y - this.size / 2,
      this.size / 1.5,
      this.size / 2.5
    );
    fill("#F2FF49");
    ellipse(this.x, this.y, this.size, this.size / 1.5);
    pop();
  }
}

const duck = new Duck(50);
