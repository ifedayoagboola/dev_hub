import React from "react";
import styled from "styled-components";

import { PlusCircle } from "@styled-icons/bootstrap/PlusCircle";

const AddProject = () => {
  return (
    <Container>
      <Project>
        <Title>
          <h2>Create a new Project</h2>
          <p>
            A project contains all project files, including the revision
            history. Already have a project repository elsewhere?
          </p>
        </Title>
        <label>Poject Name:</label>
        <input type="text" />
        <label>Description:</label>
        <input type="text" />
        <label>Project link:</label>
        <input type="text" />
        <select name="" id="">
          <option value="">Select Stack</option>
          <option value="">Javascript</option>
          <option value="">Node JS</option>
          <option value="">React Js</option>
          <option value="">Vue</option>
          <option value="">PHP</option>
          <option value="">Others</option>
        </select>
        <h3>
          Upload code: <Plus />{" "}
        </h3>
      </Project>
    </Container>
  );
};
const Container = styled.div`
  padding: 0 3rem;
`;
const Title = styled.div`
  padding: 3rem 0;
`;
const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label,
  input,
  select,
  h3 {
    padding: 0.5rem 0;
    width: 65%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  select {
    margin-top: 2rem;
  }
`;
const Plus = styled(PlusCircle)`
  width: 30px;
  &:hover {
    color: #201568;
    transform: scale(1.2);
    transition: 0.4s;
  }
`;
export default AddProject;
