import React, { FC } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Container from "../common/Container";
import works from "./works";

const BackLink = styled.div`
  a {
    width: 100px;
    height: 50px;
    border: 1px solid white;
    font-size: 20px;
    text-decoration: none;
    padding: 0.5em 1em;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-top: 50px;
  padding-bottom: 10px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.5);
  margin-bottom: 20px;
`;

const Description = styled.div`
  a {
    color: #ff5826;
  }
`;

const WorkContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ParamsTypes {
  id: string;
}

const Work: FC = () => {
  const { id } = useParams<ParamsTypes>();

  const { name, description, difficulty, advanced, Component } =
    works[works.length - parseInt(id)];

  return (
    <Container>
      <BackLink>
        <Link to="/">回首頁</Link>
      </BackLink>
      <Title>作品名稱</Title>
      {name}
      <Title>作品介紹</Title>
      <Description>{description}</Description>
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
      <WorkContainer>
        <Component />
      </WorkContainer>
    </Container>
  );
};

export default Work;
