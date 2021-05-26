import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SectionLink = styled.div`
  display: inline-block;
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
  a {
    display: block;
    text-decoration: none;
  }
`;

const Section = styled.div`
  padding: 20px;
  position: relative;
  min-height: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  overflow: hidden;
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  text-shadow: 0 0 20px rgb(0 0 0 / 70%);
`;

const Title = styled.div`
  background-color: #000;
  padding: 5px;
  font-size: 18px;
  letter-spacing: 1px;
`;

interface WorkItemProps {
  link: string;
  title: string;
}

const WorkItem: FC<WorkItemProps> = ({ link, title }) => {
  return (
    <SectionLink>
      <Link to={link}>
        <Section>
          <Title>{title}</Title>
        </Section>
      </Link>
    </SectionLink>
  );
};

export default WorkItem;
