import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  padding: 6.5vh 7vw;
  height: 16vh;
  top: 0px;
  display: flex;
  justify-content: space-between;
  color: #000000;
  font-size: 1rem;
  box-sizing: border-box;
  z-index: 5;
  background-color: #fff;

  & > ul {
    display: flex;

    & > li {
      cursor: pointer;
      display: inline-block;
      margin-right: 5vw;
      letter-spacing: 0.1rem;

      &:after {
        display: block;
        content: "";
        border-bottom: 1px solid #000;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
      }

      &:hover:after {
        transform: scaleX(1);
        transform-origin: 0% 50%;
      }
    }
  }

  .logo {
    font-weight: bold;
    letter-spacing: 0.3rem;
  }
`;

const Nav = ({ checkBox, setCheckBox }) => {
  const goBox = (e) => {
    setCheckBox(e.target.getAttribute("name"));
  };

  return (
    <Wrapper>
      <div className="logo">HYUNJIN</div>
      <ul>
        <li name="home" onClick={goBox}>
          HOME
        </li>
        <li name="projects" onClick={goBox}>
          PROJECTS
        </li>
        <li name="skills" onClick={goBox}>
          SKILLS
        </li>
        <li name="aboutMe" onClick={goBox}>
          ABOUT ME
        </li>
        <li style={{ marginRight: "0px" }} name="contact" onClick={goBox}>
          CONTACT
        </li>
      </ul>
    </Wrapper>
  );
};

export default Nav;
