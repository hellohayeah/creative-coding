import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SectionLink = styled.div`
  display: inline-block;
  width: 50%;
  padding: 0.5em;
  box-sizing: border-box;
  a {
    display: block;
    text-decoration: none;
  }
`;

const Section = styled.div`
  padding: 1.5em;
  position: relative;
  min-height: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  border: 1px solid white;
`;

const Title = styled.div`
  padding: 5px;
  font-size: 18px;
  letter-spacing: 1px;
`;

interface WorkItemProps {
  link: string;
  title: string;
}

const WorkItem: FC<WorkItemProps> = ({ link, title }) => (
  <SectionLink>
    <Link to={link}>
      <Section>
        <Title>{title}</Title>
      </Section>
    </Link>
  </SectionLink>
);

export default WorkItem;
