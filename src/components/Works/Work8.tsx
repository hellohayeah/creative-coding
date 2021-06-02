import { FC, useRef, useEffect } from "react";
import P5 from "p5";

interface ParticleTypes {
  x: number;
  y: number;
  size: number;
  clr: P5.Color;
}

const sketch = (p5: P5) => {
  const particles: ParticleTypes[] = [];

  p5.setup = () => {
    p5.createCanvas(1200, 600);
    p5.colorMode(p5.HSB);
    p5.background(230, 100, 50);
    for (let x = 0; x <= p5.width; x += 15) {
      for (let y = 0; y <= p5.height; y += 15) {
        particles.push({
          x,
          y,
          size: p5.random(3, 5),
          clr: p5.color(
            p5.noise(x, y) * 30,
            p5.noise(x / 10, y / 10) * 100,
            100
          ),
        });
      }
    }
  };

  p5.draw = () => {
    p5.background(230, 100, 50, 0.01);
    p5.noStroke();
    for (const p of particles) {
      p5.fill(p.clr);
      p5.circle(p.x, p.y, p.size);
      p.x += p5.noise(p.x / 100, p.y / 100, 10000) - 0.5;
      p.y += p5.noise(p.x / 100, p.y / 100, 1000) - 0.5;
    }
  };
};

const Work8: FC = () => {
  const work8 = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    let newp5 = new P5(sketch, work8.current);
    return () => newp5.remove();
  }, []);

  return <div className="work8" ref={work8} />;
};

export default Work8;
