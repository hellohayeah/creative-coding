import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Container from "../common/Container";
import Work1 from "./Work1";
import Work2 from "./Work2";
import Work3 from "./Work3";
import Work4 from "./Work4";
import Work5 from "./Work5";
import Work6 from "./Work6";
import Work7 from "./Work7";
import Work8 from "./Work8";
import Work9 from "./Work9";
import Work10 from "./Work10";
import Work11 from "./Work11";
import Work12 from "./Work12";
import Work13 from "./Work13";
import Work14 from "./Work14";

const Works = [
  <Work1 />,
  <Work2 />,
  <Work3 />,
  <Work4 />,
  <Work5 />,
  <Work6 />,
  <Work7 />,
  <Work8 />,
  <Work9 />,
  <Work10 />,
  <Work11 />,
  <Work12 />,
  <Work13 />,
  <Work14 />,
];

interface ParamsTypes {
  id: string;
}

interface WorkTypes {
  name: string;
  description: string;
  difficulty: string;
  advanced: string;
}

const BackLink = styled.div`
  a {
    width: 100px;
    height: 50px;
    border: 1px solid #fff;
    color: #fff;
    font-size: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-top: 50px;
  padding-bottom: 10px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.5);
  margin-bottom: 20px;
`;

const WorkContainer = styled.div`
  position: relative;
`;

const Work: FC<WorkTypes> = (props) => {
  const { name, description, difficulty, advanced } = props;
  const { id } = useParams<ParamsTypes>();

  return (
    <Container>
      <BackLink>
        <Link to="/">Back</Link>
      </BackLink>
      <Title>作品名稱</Title>
      {name}
      <Title>作品介紹</Title>
      {description}
      <Title>創作過程中有沒有遇到困難？怎麼解決的呢？</Title>
      {difficulty}
      <Title>有沒有進階想要嘗試的效果？</Title>
      {advanced}
      <Title>作品</Title>
      <WorkContainer>{Works[parseInt(id) - 1]}</WorkContainer>
    </Container>
  );
};

export default Work;
