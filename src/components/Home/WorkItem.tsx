import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SectionLink = styled.div`
  display: inline-block;
  height: 285px;
  width: 25%;
  box-sizing: border-box;
  padding: 1em;
  a {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    display: block;
    text-decoration: none;
    height: 100%;
    img {
      filter: grayscale(1);
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }
    &:hover img {
      filter: grayscale(0);
      transition: filter 2s ease, -webkit-filter 2s ease;
    }
  }
`;

const Title = styled.span`
  position: absolute;
  left: 0;
  bottom: 10px;
  padding: 0.5em;
  letter-spacing: 1px;
  background-color: #ff5826;
`;

interface WorkItemProps {
  link: string;
  title: string;
  image?: string;
}

const WorkItem: FC<WorkItemProps> = ({ link, title, image }) => (
  <SectionLink>
    <Link to={link}>
      <img src={process.env.PUBLIC_URL + image} alt={title} />
      <Title>{title}</Title>
    </Link>
  </SectionLink>
);

export default WorkItem;
