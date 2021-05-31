import { FC } from "react";
import works from "./works.json";
import Container from "../../components/common/Container";
import WorkItem from "./WorkItem";

const Home: FC = () => (
  <Container>
    <h1>互動藝術程式創作入門 課程作業</h1>
    <p>線上課程的作業，嘗試使用 React 製作。</p>
    <p>有閒暇之餘會繼續修改，讓作品更加精緻完整。</p>
    {works.map((work) => (
      <WorkItem key={work.link} {...work} />
    ))}
  </Container>
);

export default Home;
