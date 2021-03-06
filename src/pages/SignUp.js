import React from "react";
import styled from "styled-components";
import { MailWithCircle } from "@styled-icons/entypo-social/MailWithCircle";
import msg1 from "../images/msg1.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <Parent>
        <Content>
          <p>
            Already have an account?
            <span>
              <a href="/"> Sign In</a>
            </span>
          </p>
          <form action="">
            <div>
              <label>Username</label>
              <input type="text" />
            </div>
            <div>
              <label>E-mail</label>
              <input type="email" />
            </div>
            <div>
              <label>Pasword</label>
              <input type="password" />
            </div>
            <Link to="/developersDB">
              <button>SIGN UP</button>
            </Link>
          </form>
        </Content>
      </Parent>
    </>
  );
};

const Parent = styled.div`
  background: #eaf0ff;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 3rem;
  width: 30%;
  min-height: 70%;
  border-radius: 10px;
  box-shadow: 0 3px 40px rgba(0, 0, 0, 0.4);
  background: #fff;
  span {
    color: #3f66ff;
    a {
      text-decoration: none;
    }
  }

  input {
    width: 100%;
    padding: 0.8rem;
    margin: 0.3rem 0 1rem;
    border-radius: 5px;
    border: 1px solid;
    outline: none;
    &:hover {
      box-shadow: 0 3px 20px rgba(0, 0, 0, 0.4);
    }
  }

  button {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 2rem;
    background: #201568;
    color: #fff;
    border-radius: 10px;
    border: none;
    outline: none;
    &:hover {
      box-shadow: 0 3px 20px rgba(0, 0, 0, 0.4);
    }
  }
  p {
    width: 100%;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export default SignUp;
