import { FC, useRef, useEffect } from "react";
import P5 from "p5";

const sketch = (p5: P5) => {
  p5.setup = () => {
    p5.createCanvas(660, 660);
    p5.background("#fefefe");
    cd();
  };

  const cd = () => {
    const color1 = p5.color("#fd62b1");
    const color2 = p5.color("#00C2B4");
    const color3 = p5.color("#6ABA00");
    const color4 = p5.color("#6448b4");

    const centerX = p5.width / 2;
    const centerY = p5.height / 2;

    p5.noStroke();
    p5.push();
    p5.translate(centerX, centerY);
    p5.rotate(-p5.QUARTER_PI);
    p5.fill("#35253A");
    p5.ellipse(0, -145, 150, 3);
    p5.ellipse(0, 145, 150, 3);
    p5.pop();

    p5.strokeWeight(1);
    p5.stroke("#d0cbc2");
    p5.fill("#fefefe");
    p5.circle(centerX, centerY, 310);
    p5.noStroke();
    let start = 0;
    let count = 200;
    for (let i = 0; i <= count; i++) {
      const round = p5.map(i, 0, count, 0, p5.TWO_PI);
      let middleColor;

      const cdHalf = count / 4;
      const colorPart = count / 16;

      if (i % cdHalf < colorPart) {
        middleColor = p5.lerpColor(color1, color2, (i % colorPart) / colorPart);
      } else if (i % cdHalf < colorPart * 2) {
        middleColor = p5.lerpColor(color2, color3, (i % colorPart) / colorPart);
      } else if (i % cdHalf < colorPart * 3) {
        middleColor = p5.lerpColor(color3, color4, (i % colorPart) / colorPart);
      } else {
        middleColor = p5.lerpColor(color4, color1, (i % colorPart) / colorPart);
      }

      p5.fill(middleColor);
      p5.arc(centerX, centerY, 300, 300, start, round);

      start = round;
    }
    p5.fill("#070212");
    p5.circle(centerX, centerY, 120);
    p5.fill("#fdfcfe");
    p5.circle(centerX, centerY, 100);
    p5.strokeWeight(1);
    p5.stroke("#d0cbc2");
    p5.fill("#fefefe");
    p5.circle(centerX, centerY, 45);

    p5.push();
    p5.translate(centerX, centerY);
    p5.rotate(-p5.QUARTER_PI);
    p5.noStroke();
    p5.rectMode(p5.CENTER);
    p5.rect(0, -153, 150, 15);
    p5.rect(0, 153, 150, 15);
    p5.strokeWeight(0);
    p5.textSize(20);
    p5.fill("#A29E8B");
    p5.textAlign(p5.CENTER);
    p5.textStyle(p5.BOLD);
    p5.textLeading(10);
    p5.text("S O F T   L I P A", 0, -155);
    p5.text("家   常   音   樂", 0, 170);
    p5.pop();
  };
};

const Work5: FC = () => {
  const work5 = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    let newp5 = new P5(sketch, work5.current);
    return () => newp5.remove();
  }, []);

  return <div className="work5" ref={work5} />;
};

export default Work5;
