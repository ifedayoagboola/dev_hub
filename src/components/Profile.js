import React from "react";
import img1 from "../images/msg1.svg";
import styled from "styled-components";

const Profile = () => {
  return (
    <DevProfile>
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
    </DevProfile>
  );
};
const DevProfile = styled.div`
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
export default Profile;
