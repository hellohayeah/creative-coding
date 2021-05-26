import { FC, useRef, useEffect } from "react";
import P5 from "p5";

const sketch = (p5: P5) => {
  p5.setup = () => {
    p5.createCanvas(1200, 600);
    p5.background(50);
  };

  p5.draw = () => {
    p5.translate(p5.mouseX, p5.mouseY);
    p5.colorMode(p5.HSB);
    p5.angleMode(p5.DEGREES);
    if (p5.mouseIsPressed) {
      p5.rotate(-p5.frameCount);
    } else {
      p5.rotate(p5.frameCount);
    }
    p5.noFill();
    p5.stroke(p5.frameCount % 330, 60, 100);
    p5.rect(0, 0, 250, 250);
  };
};

const Work6: FC = () => {
  const work6 = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    let newp5 = new P5(sketch, work6.current);
    return () => newp5.remove();
  }, []);

  return <div className="work6" ref={work6} />;
};

export default Work6;
