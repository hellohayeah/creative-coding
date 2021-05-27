import { FC, useRef, useEffect } from "react";
import P5 from "p5";
import meme from "../../assets/images/meme.png";

const sketch = (p5: P5) => {
  let memeImg: any;

  p5.preload = () => {
    memeImg = p5.loadImage(meme);
  };

  p5.setup = () => {
    p5.createCanvas(1000, 500);
    p5.image(memeImg, 0, 0, 1000, 500);
  };

  p5.draw = () => {
    const span = 30;
    for (let w = 0; w < memeImg.width; w += span) {
      for (let h = 0; h < memeImg.height; h += span) {
        let c = memeImg.get(w, h);
        p5.fill(
          c[0] + p5.random(-span, p5.mouseY / span),
          c[1],
          c[2] + p5.random(-span, p5.mouseX / span)
        );
        p5.noStroke();
        p5.push();
        p5.translate(
          p5.random(w - span / 2, w + span / 2),
          p5.random(h - span / 2, h + span / 2)
        );
        p5.circle(0, 0, span);
        p5.pop();
      }
    }
  };
};

const Work11: FC = () => {
  const work11 = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    let newp5 = new P5(sketch, work11.current);
    return () => newp5.remove();
  }, []);

  return <div className="work11" ref={work11} />;
};

export default Work11;
