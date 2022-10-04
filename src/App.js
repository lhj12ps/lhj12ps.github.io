import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/globalStyles";

import Nav from "./components/nav";
import ScrollLine from "./components/scrollLine";
import ClickTop from "./components/clickTop";

import First from "./pages/first";
import Project from "./pages/project";
import Contact from "./pages/contact";
import MySkills from "./pages/mySkills";
import AboutMe from "./pages/aboutMe";

const Wrapper = styled.div`
  width: 100vw;

  & > .pageBox {
    position: relative;
    height: 100vh;
    overflow: hidden;
    padding: 22vh 0vw;
    box-sizing: border-box;

    & > .backCircle {
      color: #f8f8f8;
      font-size: 30rem;
      line-height: 30%;
      position: absolute;
      font-weight: 700;
      bottom: -10vh;
      left: 35vw;
      z-index: -10;
      background-color: #fff;
    }
  }
`;

const App = () => {
  const category = {
    home: 0,
    projects: 1,
    skills: 2,
    aboutMe: 3,
    contact: 4,
  };
  const [checkBox, setCheckBox] = useState();
  const focusTarget = useRef([]);

  const scrollTo = () => {
    focusTarget.current[category[checkBox]].scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (category[checkBox] !== undefined) {
      scrollTo();
    }
  }, [checkBox]);

  return (
    <>
      <GlobalStyles />
      <Nav checkBox={checkBox} setCheckBox={setCheckBox} />
      <ScrollLine />
      <ClickTop checkBox={checkBox} />
      <Wrapper>
        <div className="pageBox" ref={(el) => (focusTarget.current[0] = el)}>
          <First name="home" checkBox={checkBox} />
          <div className="backCircle">HOME</div>
        </div>

        <div
          className="pageBox"
          ref={(el) => (focusTarget.current[1] = el)}
          style={{ height: "105vh" }}
        >
          <Project checkBox={checkBox} />
          <div className="backCircle"></div>
        </div>

        <div
          className="pageBox"
          ref={(el) => (focusTarget.current[2] = el)}
          style={{ height: "100vh" }}
        >
          <MySkills checkBox={checkBox} />
          <div className="backCircle">SKILLS</div>
        </div>

        <div
          className="pageBox"
          style={{ height: "130vh" }}
          ref={(el) => (focusTarget.current[3] = el)}
        >
          <AboutMe checkBox={checkBox} />
        </div>

        <div
          className="pageBox"
          style={{ backgroundColor: "#000", height: "75vh" }}
          ref={(el) => (focusTarget.current[4] = el)}
        >
          <Contact checkBox={checkBox} />
        </div>
      </Wrapper>
    </>
  );
};

export default App;
