import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../common/Container";

interface WorkTypes {
  name: string;
  description: string;
  difficulty: string;
  advanced: string;
  component: JSX.Element;
}

const BackLink = styled.div`
  a {
    width: 100px;
    height: 50px;
    border: 1px solid white;
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

const Work: FC<WorkTypes> = ({
  name,
  description,
  difficulty,
  advanced,
  component,
}) => (
  <Container>
    <BackLink>
      <Link to="/">Back</Link>
    </BackLink>
    <Title>作品名稱</Title>
    {name}
    <Title>作品介紹</Title>
    {description}
    {difficulty ? (
      <React.Fragment>
        <Title>創作過程中有沒有遇到困難？怎麼解決的呢？</Title>
        {difficulty}
      </React.Fragment>
    ) : null}
    {advanced ? (
      <React.Fragment>
        <Title>有沒有進階想要嘗試的效果？</Title>
        {advanced}
      </React.Fragment>
    ) : null}
    <Title>作品</Title>
    <WorkContainer>{component}</WorkContainer>
  </Container>
);

export default Work;
