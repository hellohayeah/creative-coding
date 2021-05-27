import { FC, useRef, useEffect } from "react";
import P5 from "p5";
import NBALeaders from "../../assets/json/nbaLeaders.json";

const sketch = (p5: P5) => {
  let nbaData: any = NBALeaders;
  let showData: any;
  let selectorElm: any;
  let sliderElement: any;

  const onChangeSelect = () => {
    const selectedType = selectorElm.value();
    p5.storeItem("TYPE_SELECTED", selectedType);
    if (selectedType === "得分") {
      showData = nbaData.points;
    }
    if (selectedType === "籃板") {
      showData = nbaData.rebounds;
    }
    if (selectedType === "助攻") {
      showData = nbaData.assists;
    }
  };

  p5.setup = () => {
    p5.createCanvas(1200, 600);
    let storedType = p5.getItem("TYPE_SELECTED") || "得分";
    selectorElm = p5.createSelect();
    selectorElm.position(10, 20);
    selectorElm.option("得分");
    selectorElm.option("籃板");
    selectorElm.option("助攻");
    selectorElm.selected(storedType);
    selectorElm.changed(onChangeSelect);
    onChangeSelect();
    let storedScale: any = p5.getItem("TYPE_SCALE");
    let resultScale = storedScale ? storedScale.value : 0.86;
    sliderElement = p5.createSlider(0.2, 1, resultScale, 0.001);
    sliderElement.position(10, 50);
    sliderElement.changed(function () {
      p5.storeItem("TYPE_SCALE", {
        value: sliderElement.value(),
      });
    });
  };

  const easeInOutQuint = (x: number) =>
    x < 0.5 ? 16 * x * x * x * x * x : 1 - p5.pow(-2 * x + 2, 5) / 2;

  p5.draw = () => {
    p5.background("#051C2E");
    const rectHeight = 30;
    p5.fill(255);
    let powerNumber = sliderElement.value();
    for (var i = 0; i <= 8; i++) {
      let h = p5.map(p5.pow(i * 50, powerNumber), 0, 450, 0, p5.width);
      p5.push();
      p5.textAlign(p5.CENTER);
      p5.text(i * 5, h + 50, 100);
      p5.pop();
    }

    for (let i = 0; i < 10 - 1; i++) {
      let h = p5.map(p5.pow(i * 50, powerNumber), 0, 450, 0, p5.width);
      p5.push();
      p5.translate(h + 50, 100);
      p5.noStroke();
      p5.fill(255, 30);
      p5.rect(0, 0, 2, p5.height - 200);
      p5.pop();
    }

    p5.push();
    for (let i = 0; i < showData.length; i++) {
      let animationProgress = easeInOutQuint(
        p5.map(p5.frameCount - i * 5, 0, 450, 0, 1, true)
      );
      let h =
        p5.map(
          p5.pow(showData[i].value * 10, powerNumber),
          0,
          450,
          0,
          p5.width
        ) * animationProgress;
      p5.translate(0, p5.height / 5 - rectHeight);
      p5.push();
      p5.imageMode(p5.CENTER);
      p5.textAlign(p5.LEFT, p5.CENTER);
      p5.textSize(14);
      p5.text(showData[i].name, 50, rectHeight);
      p5.rect(50, -rectHeight / 2, h, rectHeight);
      p5.text(showData[i].value, h, -rectHeight + 5);
      p5.pop();
    }
    p5.pop();

    p5.push();
    p5.textSize(24);
    p5.text(`NBA 2020 - 2021 ${selectorElm.value()}王`, 30, p5.height - 30);
    p5.pop();
  };
};

const Work13: FC = () => {
  const work13 = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    let newp5 = new P5(sketch, work13.current);
    return () => newp5.remove();
  }, []);

  return <div className="work13" ref={work13} />;
};

export default Work13;
