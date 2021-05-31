import { FC, useRef, useEffect } from "react";
import P5 from "p5";
import Avalokiteśvara from "../../assets/images/avalokitesvara.png";

interface strArrTypes {
  x: number;
  y: number;
  text: string;
  size: number;
  clr: string;
}

const sketch = (p5: P5) => {
  let inputElem: any;
  let buttonElem;
  let imgElem: any;
  // let fontFamily: any;
  const colors = ["#090107", "#fff"];
  const strArr: strArrTypes[] = [];

  p5.preload = () => {
    imgElem = p5.loadImage(Avalokiteśvara);
    // fontFamily = p5.loadFont("AaZanJinXiaoKai.ttf");
  };

  const verticalText = (input: string, x: number, y: number) => {
    let output = "";

    for (let i = 0; i < input.length; i++) {
      output += input.charAt(i) + "\n";
    }

    p5.push();
    p5.textAlign(p5.CENTER, p5.TOP);
    p5.text(output, x, y);
    p5.pop();
  };

  const addString = () => {
    pushString(
      p5.random(p5.width),
      p5.random(p5.height / 3),
      inputElem.value(),
      p5.random(50, 80),
      p5.random(colors)
    );
    inputElem.value("");
  };

  const pushString = (
    x: number,
    y: number,
    text: string,
    size: number,
    clr: string
  ) => {
    strArr.push({
      x,
      y,
      text,
      size,
      clr,
    });
  };

  p5.setup = () => {
    p5.createCanvas(1200, 600);
    /* Input */
    inputElem = p5.createInput("");
    inputElem.position(20, 20);
    /* ----- */
    /* Input */
    buttonElem = p5.createButton("新增");
    buttonElem.position(20, 50);
    buttonElem.mousePressed(addString);
    /* ----- */
    /* back Font */
    // textFont(fontFamily);
    for (let i = 0; i < 1; i++) {
      pushString(
        p5.random(p5.width),
        p5.random(p5.height / 3),
        p5.random(["恭迎慈孤觀音", "渡世靈顯四方"]),
        p5.random(50, 80),
        p5.random(colors)
      );
    }
    /* ----- */
  };

  p5.draw = () => {
    p5.background("#E51B40");
    /* back Font */
    for (const val of strArr) {
      p5.textSize(val.size);
      p5.fill(val.clr);
      verticalText(val.text, val.x, val.y);
    }
    /* ----- */
    /* Image */
    p5.push();
    p5.imageMode(p5.CENTER);
    p5.image(imgElem, p5.width / 2, p5.height / 2);
    p5.pop();
    /* ----- */
  };
};

const Work9: FC = () => {
  const work9 = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    let newp5 = new P5(sketch, work9.current);
    return () => newp5.remove();
  }, []);

  return <div className="work9" ref={work9} />;
};

export default Work9;
