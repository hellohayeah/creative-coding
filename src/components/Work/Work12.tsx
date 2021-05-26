import { FC, useRef, useEffect } from "react";
import P5 from "p5";

const sketch = (p5: P5) => {
  let capture: any;
  let cacheGraphics: any;
  let mic: any;

  p5.setup = () => {
    p5.createCanvas(640, 480);
    // capture = p5.createCapture(p5.VIDEO);
    // capture.size(640, 480);
    // cacheGraphics = p5.createGraphics(640, 480);
    // cacheGraphics.translate(640, 0);
    // cacheGraphics.scale(-1, 1);
    // capture.hide();
    // mic = new p5.AudioIn();
    // mic.start();
  };

  // p5.draw = () => {
  //   const micLevel = mic.getLevel();
  //   cacheGraphics.image(capture, 0, 0);
  //   p5.noStroke();
  //   p5.background(0);
  //   const span = 15;
  //   const addColor = micLevel * 1000;

  //   for (let i = 0; i <= cacheGraphics.width; i += span) {
  //     for (let j = 0; j <= cacheGraphics.height; j += span) {
  //       let pixel = cacheGraphics.get(i, j);
  //       const avgPixel = (pixel[0] + pixel[1] + pixel[2]) / 3;
  //       p5.push();
  //       p5.fill(pixel[0] + addColor, pixel[1], pixel[2]);
  //       p5.translate(i, j);
  //       p5.rotate(avgPixel);
  //       p5.rect(0, 0, span * p5.map(avgPixel, 0, 255, 0, 1));
  //       p5.pop();
  //     }
  //   }
  // };
};

const Work12: FC = () => {
  const work12 = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    let newp5 = new P5(sketch, work12.current);
    return () => newp5.remove();
  }, []);

  return <div className="work12" ref={work12} />;
};

export default Work12;
