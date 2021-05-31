import { FC, useRef, useEffect } from "react";
import P5 from "p5";

const sketch = (p5: P5) => {
  let count = 0;

  p5.setup = () => {
    p5.createCanvas(1200, 600);
    p5.background(50);
  };

  p5.draw = () => {
    p5.noStroke();
    if (count === 255) count = 0;
    else count++;

    p5.fill(p5.mouseX, p5.mouseY, count);
    p5.circle(p5.mouseX, p5.mouseY, 30);
  };
};

const Work1: FC = () => {
  const work1 = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    let newp5 = new P5(sketch, work1.current);
    return () => newp5.remove();
  }, []);

  return <div ref={work1} />;
};

export default Work1;
