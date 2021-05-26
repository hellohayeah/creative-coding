import { FC } from "react";
import styled from "styled-components";
import WorkItem from "../WorkItem";

const Section = styled.section`
  width: 100%;
  overflow: auto;
  border: 1px solid hsla(0, 0%, 100%, 0.5);
  background-color: hsla(0, 0%, 100%, 0.01);
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 50px;
`;

interface Work {
  title: string;
  link: string;
}

interface WorkSectionProps {
  title: string;
  works: Work[];
}

const WorkSection: FC<WorkSectionProps> = ({ title, works }) => {
  return (
    <Section>
      <h2>{title}</h2>
      {works.map((work) => (
        <WorkItem key={work.title} {...work} />
      ))}
    </Section>
  );
};

export default WorkSection;
