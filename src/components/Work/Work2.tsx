import { FC, useRef, useEffect } from "react";
import P5 from "p5";

const sketch = (p5: P5) => {
  p5.setup = () => {
    p5.createCanvas(600, 600);
    p5.background(15, 200, 210);
  };

  const eye = (x: number, y: number, left?: boolean) => {
    const eyeW = 75;
    const eyeY = 95;
    p5.strokeWeight(3);
    p5.stroke(0);
    p5.line(x, y - 50, x, y - 70);
    p5.line(x - 15, y - 45, x - 20, y - 65);
    p5.line(x + 15, y - 45, x + 20, y - 65);
    p5.fill(255);
    p5.ellipse(x, y, eyeW, eyeY);

    p5.strokeWeight(1);
    p5.fill(70, 200, 245);
    p5.ellipse(x, y, eyeW / 2, eyeY / 2);

    p5.fill(0);
    p5.ellipse(x, y, eyeW / 4, eyeY / 4);

    p5.fill(255);
    p5.circle(x - 5, y - 10, 10);
    p5.circle(x + 5, y + 10, 5);

    // 肉球
    p5.strokeWeight(3);
    p5.stroke(220, 155, 75);
    p5.fill(255, 245, 110);

    if (left) {
      p5.ellipse(x - 50, y + 35 / 2, 50, 35);
      p5.noStroke();
      p5.fill(220, 155, 75);
      p5.circle(x - 50, y + 10, 5);
      p5.circle(x - 60, y + 20, 5);
      p5.circle(x - 40, y + 20, 5);
    } else {
      p5.ellipse(x + 50, y + 35 / 2, 50, 35);
      p5.noStroke();
      p5.fill(220, 155, 75);
      p5.circle(x + 50, y + 10, 5);
      p5.circle(x + 60, y + 20, 5);
      p5.circle(x + 40, y + 20, 5);
    }
    p5.fill(255, 245, 110);
  };

  p5.draw = () => {
    p5.background(15, 200, 210);

    // 頭、身體？
    p5.rectMode(p5.CENTER);
    p5.fill(255, 245, 110);
    p5.strokeWeight(5);
    p5.stroke(140, 146, 61);
    p5.rect(p5.width / 2, p5.height / 2, 300, 300, 10);

    // 雀斑
    p5.noStroke();
    p5.fill(186, 188, 24);
    p5.ellipse(185, 195, 20, 30);
    p5.ellipse(175, 235, 10, 20);
    p5.ellipse(195, 355, 15, 25);
    p5.ellipse(215, 400, 20, 30);
    p5.ellipse(410, 210, 15, 20);
    p5.ellipse(395, 355, 20, 30);
    p5.ellipse(395, 355, 20, 40);
    p5.ellipse(380, 410, 15, 25);

    // 嘴巴
    p5.fill(116, 49, 54);
    p5.beginShape();
    p5.curveVertex(210, 265);
    p5.curveVertex(250, 305);
    p5.curveVertex(300, 310);
    p5.curveVertex(350, 305);
    p5.curveVertex(385, 265);
    p5.curveVertex(350, 380);
    p5.curveVertex(300, 410);
    p5.curveVertex(250, 380);
    p5.endShape(p5.CLOSE);
    p5.fill(250, 170, 170);
    p5.beginShape();
    p5.curveVertex(265, 400);
    p5.curveVertex(275, 390);
    p5.curveVertex(290, 385);
    p5.curveVertex(305, 395);
    p5.curveVertex(320, 385);
    p5.curveVertex(340, 395);
    p5.curveVertex(325, p5.random(410, 415));
    p5.curveVertex(300, p5.random(415, 420));
    p5.curveVertex(280, p5.random(410, 415));
    p5.endShape(p5.CLOSE);
    p5.stroke(220, 155, 75);
    p5.noFill();
    p5.beginShape();
    p5.curveVertex(235, 370);
    p5.curveVertex(240, 385);
    p5.curveVertex(265, 410);
    p5.curveVertex(300, 425);
    p5.curveVertex(335, 415);
    p5.curveVertex(360, 385);
    p5.curveVertex(370, 370);
    p5.endShape();
    p5.noStroke();
    p5.rectMode(p5.CORNER);
    p5.fill(255);
    p5.rect(275, 310, 20, 20);
    p5.rect(305, 310, 20, 20);

    // 眼睛
    eye(262.5, 250, true);
    eye(337.5, 250);

    // 鼻子
    p5.stroke(0);
    p5.ellipse(300, 280, 25, 35);
    p5.noStroke();
    p5.ellipse(300, 290, 20, 30);

    // 座標
    p5.noStroke();
    p5.fill("black");
    p5.textSize(14);
    p5.text(`${p5.int(p5.mouseX)}, ${p5.int(p5.mouseY)}`, 20, 30);
  };
};

const Work2: FC = () => {
  const work2 = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    let newp5 = new P5(sketch, work2.current);
    return () => newp5.remove();
  }, []);

  return <div className="work2" ref={work2} />;
};

export default Work2;
