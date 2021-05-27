import { FC, useRef, useEffect } from "react";
import P5 from "p5";

const sketch = (p5: P5) => {
  const colors = ["#3704FD", "#FF6002", "#E781B8", "#245427", "#000"];
  const circleColors = ["#FF6002", "#245427", "#fff", "#000", "#3704FD"];
  let moveY = 0;

  p5.setup = () => {
    p5.createCanvas(600, 600);
    p5.background("#f6c74f");
  };

  const isoscelesTriangle = (
    i: number,
    startX: number,
    startY: number,
    w: number,
    h: number
  ) => {
    p5.triangle(
      startX - w / 2,
      i === 2 ? startY - w * 2 : startY + w * 2,
      startX + w / 2,
      i === 2 ? startY - w * 2 : startY + w * 2,
      startX,
      i === 2 ? startY - h / 2 : startY + h / 2
    );
  };

  const meow = (moveY: number) => {
    p5.rectMode(p5.CENTER);
    p5.noStroke();
    const meowW = 40;
    for (let i = 0; i < 5; i++) {
      const PosW = p5.width / 2 - meowW * 2 + i * meowW;
      const d = i % 2 ? -i : i;
      const PosH = p5.height / 2 - moveY * (d === 0 ? 3 : d);
      const meowH = 100 + moveY * d;
      p5.fill(colors[i]);
      p5.rect(PosW, PosH, meowW, meowH, meowW / 2);
      p5.fill(circleColors[i]);
      i === 0 && p5.circle(PosW, PosH - moveY, meowW);
      (i === 1 || i === 4) &&
        p5.arc(PosW, PosH - meowW / 2 - meowH / 2, meowW, meowW, 0, p5.PI);
      (i === 2 || i === 3) && isoscelesTriangle(i, PosW, PosH, meowW, meowH);
    }
  };

  p5.draw = () => {
    moveY = p5.map(p5.mouseY, 0, p5.height, -10, 10);
    p5.background("#f6c74f");
    meow(moveY);
  };
};

const Work3: FC = () => {
  const work3 = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    let newp5 = new P5(sketch, work3.current);
    return () => newp5.remove();
  }, []);

  return <div className="work3" ref={work3} />;
};

export default Work3;
