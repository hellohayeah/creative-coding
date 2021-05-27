import { FC, useRef, useEffect } from "react";
import P5 from "p5";

const sketch = (p5: P5) => {
  p5.setup = () => {
    p5.createCanvas(1200, 600);
  };

  const halfTriangle = (w: number, y: number, wh: number) => {
    p5.fill("#052f57");
    p5.triangle(w + wh, y, w + wh, y + wh, w, y + wh);
  };

  p5.draw = () => {
    p5.background("#e0c4b5");
    const m = 100;
    const wh = 300;
    p5.noStroke();
    const mapX = p5.map(p5.mouseX, 0, p5.width, 0, 20);
    const mapY = p5.map(p5.mouseY, 0, p5.height, 0, 20);
    for (let w = m; w < p5.width; w += wh + m) {
      for (let y = m; y < p5.height; y += wh + m) {
        p5.fill("#e5e5da");
        p5.rect(w, y, wh, wh, 5);
        p5.fill("#dcab97");
        p5.ellipse(w + wh / 2 + mapX, y + wh / 2 + mapY, 250);
        halfTriangle(w, y, wh);
      }
    }
  };
};

const Work4: FC = () => {
  const work4 = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    let newp5 = new P5(sketch, work4.current);
    return () => newp5.remove();
  }, []);

  return <div className="work4" ref={work4} />;
};

export default Work4;
