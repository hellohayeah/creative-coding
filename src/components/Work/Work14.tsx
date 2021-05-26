import { FC, useRef, useEffect } from "react";
import P5 from "p5";

const sketch = (p5: P5) => {
  p5.setup = () => {
    p5.createCanvas(1200, 600);
  };

  p5.draw = () => {
    p5.background("#645DD7");
    duck.update();
    duck.draw();
  };

  class Duck {
    x: number;
    y: number;
    size: number;
    constructor(size: number, x = 0, y = 0) {
      this.x = x * size;
      this.y = y;
      this.size = size;
    }
    update() {
      this.x = p5.lerp(this.x, p5.mouseX, 0.01);
      this.y = p5.lerp(this.y, p5.mouseY, 0.01);
    }
    draw() {
      p5.noStroke();
      p5.push();
      p5.fill("#F2FF49");
      p5.ellipse(this.x, this.y, this.size, this.size / 1.5);
      p5.fill("#F2FF49");
      p5.circle(
        p5.lerp(this.x, p5.mouseX, 0.02),
        this.y - this.size / 1.5,
        this.size
      );
      p5.fill(255);
      p5.circle(
        p5.lerp(this.x, p5.mouseX, 0.03) - this.size / 4,
        this.y - this.size / 1.3,
        this.size / 3.5
      );
      p5.circle(
        p5.lerp(this.x, p5.mouseX, 0.03) + this.size / 4,
        this.y - this.size / 1.3,
        this.size / 3.5
      );
      p5.fill(0);
      p5.circle(
        p5.lerp(this.x, p5.mouseX, 0.03) - this.size / 4,
        this.y - this.size / 1.3,
        this.size / 5.5
      );
      p5.circle(
        p5.lerp(this.x, p5.mouseX, 0.03) + this.size / 4,
        this.y - this.size / 1.3,
        this.size / 5.5
      );
      p5.fill("#FF4242");
      p5.ellipse(
        p5.lerp(this.x, p5.mouseX, 0.05),
        this.y - this.size / 2,
        this.size / 1.5,
        this.size / 2.5
      );
      p5.pop();
    }
  }

  const duck = new Duck(50);
};

const Work14: FC = () => {
  const work14 = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    let newp5 = new P5(sketch, work14.current);
    return () => newp5.remove();
  }, []);

  return <div className="work14" ref={work14} />;
};

export default Work14;
