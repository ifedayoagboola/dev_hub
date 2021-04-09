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
            <Name>
              <h3>Ifedayo Agboola</h3> <button>Edit profile</button>
            </Name>
            <p>Your favourite Tech guy</p>
            <p>Teragon LTD.</p>
            <p>ifedayoagboola19@gmail.com</p>
            <p>Stack: Javascript, React</p>
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
            <Project>
              <p>Project name</p>
              <p>Description</p>
              <a href="">Link</a>
              <p>Stack used</p>
            </Project>
            <Project>
              <p>Project name</p>
              <p>Description</p>
              <a href="">Link</a>
              <p>Stack used</p>
            </Project>
            <Project>
              <p>Project name</p>
              <p>Description</p>
              <a href="">Link</a>
              <p>Stack used</p>
            </Project>
            <Project>
              <p>Project name</p>
              <p>Description</p>
              <a href="">Link</a>
              <p>Stack used</p>
            </Project>
            <Project>
              <p>Project name</p>
              <p>Description</p>
              <a href="">Link</a>
              <p>Stack used</p>
            </Project>
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
  max-width: 1300px;
`;
const Content = styled.div`
  display: flex;
`;
const Profile = styled.div`
  flex: 1;
  h2 {
    margin-bottom: 2rem;
  }
`;
const Name = styled.div`
  display: flex;
  gap: 2rem;
`;
const Image = styled.div`
  max-width: 300px;
  height: 300px;
  border-radius: 50%;

  border: 3px solid #201568;
  img {
    width: 100%;
  }
`;
const Info = styled.div`
  margin: 5rem 0;
  > * {
    padding: 0.5rem 0;
  }
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;
const Project = styled.div`
  width: 100%;
  border: 3px solid #201568;
  padding: 1rem;
`;
export default DevDashBoard;
