import React from "react";
import styled from "styled-components";

const Project = () => {
  return (
    <MyProject>
      <p>Project name</p>
      <p>Description</p>
      <a href="">Link@herokuAppProject</a>
      <p>Stack used</p>
    </MyProject>
  );
};
const MyProject = styled.div`
  width: 100%;
  border: 1px solid #201568;
  padding: 1rem;
`;
export default Project;
