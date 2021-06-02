import { FC, useRef, useEffect } from "react";
import P5 from "p5";

const sketch = (p5: P5) => {
  class Particles {
    r: number;
    p: P5.Vector;
    clr: string;
    constructor() {
      this.r = 5;
      this.p = p5.createVector(p5.width / 2, p5.height / 2);
      this.clr = p5.random(["#f4d06f", "#ff8811", "#9dd9d2", "#fff8f0"]);
    }
    update() {
      this.p.x += p5.random(-5, 5);
      this.p.y += p5.random(-5, 5);
    }
    draw() {
      p5.push();
      p5.noStroke();
      p5.fill(this.clr);
      p5.translate(this.p.x, this.p.y);
      p5.circle(0, 0, this.r);
      p5.pop();
    }
  }

  const particles: Particles[] = [];

  p5.setup = () => {
    p5.createCanvas(1200, 600);
    p5.background("#392f5a");
    for (let i = 0; i < 300; i++) {
      particles[i] = new Particles();
    }
  };

  p5.draw = () => {
    for (const particle of particles) {
      particle.update();
      particle.draw();
    }
  };
};

const Work10: FC = () => {
  const work10 = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    let newp5 = new P5(sketch, work10.current);
    return () => newp5.remove();
  }, []);

  return <div className="work10" ref={work10} />;
};

export default Work10;
