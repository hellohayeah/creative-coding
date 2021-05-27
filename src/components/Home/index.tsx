import { FC } from "react";
import works from "./works.json";
import Container from "../../components/common/Container";
import WorkItem from "./WorkItem";

const Home: FC = () => (
  <Container>
    <h1>互動藝術程式創作入門 課程作業</h1>
    {works.map((work) => (
      <WorkItem key={work.link} {...work} />
    ))}
  </Container>
);

export default Home;
