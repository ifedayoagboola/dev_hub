import React from "react";
import styled from "styled-components";

import Project from "../components/Project";
import Profile from "../components/Profile";

import { Link } from "react-router-dom";

import { PlusCircle } from "@styled-icons/bootstrap/PlusCircle";

const DevDashBoard = () => {
  return (
    <Container>
      <Content>
        <Profile />
        <Projects>
          <Header>
            <h2>My Projects</h2>
            <Link to="/add_project">
              <Plus />
            </Link>
          </Header>
          <ProjectList>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </ProjectList>
        </Projects>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  padding: 3rem;
  max-width: 1300px;
`;
const Content = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Projects = styled.div`
  flex: 2;
`;
const Header = styled.div`
  display: flex;
  gap: 2rem;
`;
const Plus = styled(PlusCircle)`
  width: 30px;
  &:hover {
    color: #201568;
    transform: scale(1.2);
    transition: 0.4s;
  }
`;
const ProjectList = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export default DevDashBoard;
