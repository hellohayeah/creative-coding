import { FC } from "react";
import works from "./works.json";
import Container from "../../components/common/Container";
import WorkSection from "../WorkSection";

const Home: FC = () => (
  <Container>
    <h1>互動藝術程式創作入門 課程作業</h1>
    {works.map((work) => (
      <WorkSection {...work} key={work.title} />
    ))}
  </Container>
);

export default Home;
