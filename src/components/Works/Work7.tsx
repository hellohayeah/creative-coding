import { FC, useRef, useEffect } from "react";
import P5 from "p5";

const sketch = (p5: P5) => {
  const colors = ["#FFFDA2", "#F9A4B0"];
  const StarAndHeart: any[] = [];

  p5.setup = () => {
    p5.createCanvas(550, 550);
    p5.background("#0F2026");
    for (let i = 0; i < 20; i++) {
      StarAndHeart.push({
        type: p5.random(["star", "heart"]),
        x: p5.random(30, 550),
        y: 0,
        size: p5.random(30, 50),
        vy: p5.random(1, 5),
      });
    }
  };

  const heart = (x: number, y: number, size: number, clr: any = colors[1]) => {
    p5.fill(clr);
    p5.beginShape();
    p5.vertex(x, y);
    p5.bezierVertex(
      x - size / 2,
      y - size / 2,
      x - size,
      y + size / 3,
      x,
      y + size
    );
    p5.bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    p5.endShape(p5.CLOSE);
  };

  const star = (x: number, y: number, size: number) => {
    p5.fill(colors[0]);
    let angle = p5.TWO_PI / 5;
    let halfAngle = angle / 2.0;
    p5.beginShape();
    for (let a = 0; a < p5.TWO_PI; a += angle) {
      let sx = x + p5.cos(a) * size;
      let sy = y + p5.sin(a) * size;
      p5.vertex(sx, sy);
      sx = x + p5.cos(a + halfAngle) * (size - 15);
      sy = y + p5.sin(a + halfAngle) * (size - 15);
      p5.vertex(sx, sy);
    }
    p5.endShape(p5.CLOSE);
  };

  p5.draw = () => {
    p5.colorMode(p5.HSB);
    p5.noStroke();

    p5.push();
    p5.translate(p5.width / 2, 0);
    for (let i = 0; i < 10; i++) {
      let clr = [330 - i * 33, 60, 100];
      heart(0, 0 + i * 25, 800 - i * 80, clr);
    }
    p5.pop();

    for (let i = 0; i < StarAndHeart.length; i++) {
      p5.stroke(80);
      p5.strokeWeight(0.5);

      if (StarAndHeart[i].type === "star")
        star(StarAndHeart[i].x, StarAndHeart[i].y, StarAndHeart[i].size);
      else heart(StarAndHeart[i].x, StarAndHeart[i].y, StarAndHeart[i].size);

      StarAndHeart[i].y += StarAndHeart[i].vy;
      if (StarAndHeart[i].y > p5.height) {
        StarAndHeart.splice(i, 1);
      }
    }
  };

  p5.mousePressed = () => {
    StarAndHeart.push({
      type: p5.random(["star", "heart"]),
      x: p5.mouseX,
      y: p5.mouseY,
      size: p5.random(30, 50),
      vy: p5.random(1, 5),
    });
  };
};

const Work7: FC = () => {
  const work7 = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    let newp5 = new P5(sketch, work7.current);
    return () => newp5.remove();
  }, []);

  return <div className="work7" ref={work7} />;
};

export default Work7;
