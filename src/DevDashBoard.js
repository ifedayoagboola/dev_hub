import React from "react";
import styled from "styled-components";
import img1 from "./images/msg1.svg";

const DevDashBoard = () => {
  return (
    <Container>
      <Content>
        <Profile>
          <h3>My Profile</h3>
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
          <h2>Projects</h2>
          <h2>Add New Project</h2>
          <Project>
            <p>Project name</p>
            <a href="">Link</a>
            <p>Stack used</p>
          </Project>
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
  padding: 3rem 0;
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
const Project = styled.div``;
export default DevDashBoard;
