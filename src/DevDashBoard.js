import React from "react";
import styled from "styled-components";
import img1 from "./images/msg1.svg";

const DevDashBoard = () => {
  return (
    <Container>
      <Content>
        <Profile>
          <h2>My Profile</h2>
          <Image>
            <img src={img1} alt="" />
          </Image>
          <Info>
            <h4>Ifedayo Agboola</h4>
            <p>Your favourite Tech guy</p>
            <button>Edit profile</button>
            <p>Company</p>
            <p>ifedayoagboola19@gmail.com</p>
            <p>Stack</p>
          </Info>
        </Profile>
        <Projects>
          <Header>
            <h2>Projects</h2>
            <h3>Add</h3>
          </Header>
          <ProjectList>
            <Project>
              <p>Project name</p>
              <p>Description</p>
              <a href="">Link</a>
              <p>Stack used</p>
            </Project>
          </ProjectList>
        </Projects>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  padding: 3rem;
`;
const Content = styled.div`
  display: flex;
`;
const Profile = styled.div`
  flex: 1;
`;
const Image = styled.div`
  max-width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 3px solid blue;
  img {
    width: 100%;
  }
`;
const Info = styled.div`
  margin: 5rem 0;
`;
const Projects = styled.div`
  flex: 2;
`;
const Header = styled.div`
  display: flex;
  gap: 2rem;
`;
const ProjectList = styled.div`
  margin: 2rem 0;
  display: flex;
`;
const Project = styled.div`
  width: 100%;
  border: 3px solid blue;
  flex: 1;
  flex-wrap: wrap;
`;
export default DevDashBoard;
