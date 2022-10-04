import styled from "styled-components";
import React, { useEffect, useState } from "react";

const Wrapper = styled.div`
  .numberBox.home {
    display: flex;
    justify-content: center;
    align-items: start;
    width: 15vw;
    margin-right: 5vw;

    & > .midLineCol {
      background-color: #000;
      width: 38px;
      height: 200px;
    }
  }

  .numberBox.projects {
    display: flex;
    justify-content: center;
    align-items: start;
    width: 15vw;
    margin-right: 5vw;

    & > .midLineCol {
      position: relative;
      background-color: #000;
      width: 38px;
      height: 200px;
      rotate: 45deg;
    }
  }

  .numberBox.skills {
    display: flex;
    justify-content: center;
    align-items: start;
    width: 15vw;
    margin-right: 5vw;

    & > .midLineCol {
      position: relative;
      background-color: #000;
      width: 38px;
      height: 200px;
    }
    & > .midLineCol::after {
      position: absolute;
      background-color: #000;
      width: 38px;
      height: 200px;
      rotate: 90deg;
      content: "";
    }
  }

  .numberBox.aboutMe {
    display: flex;
    justify-content: center;
    align-items: start;
    width: 15vw;
    margin-right: 5vw;

    & > .midLineCol {
      position: relative;
      background-color: #000;
      width: 38px;
      height: 200px;
    }
    & > .midLineCol::after {
      position: absolute;
      background-color: #000;
      width: 38px;
      height: 200px;
      rotate: 90deg;
      content: "";
    }
  }

  .numberBox.contact {
    display: flex;
    justify-content: center;
    align-items: start;
    width: 15vw;
    margin-right: 5vw;

    & > .midLineCol {
      position: relative;
      background-color: #fff;
      width: 38px;
      height: 200px;
      rotate: 45deg;
    }

    & > .midLineCol::after {
      position: absolute;
      background-color: #fff;
      width: 38px;
      height: 200px;
      rotate: 90deg;
      content: "";
    }
  }
`;

const Point = ({ checkBox }) => {
  const [select, setSelect] = useState(0);
  const category = {
    home: "numberBox home",
    projects: "numberBox projects",
    skills: "numberBox skills",
    aboutMe: "numberBox aboutMe",
    contact: "numberBox contact",
  };

  useEffect(() => {
    if (checkBox !== undefined) {
      console.log("잘 나오고있니: ", checkBox, category[checkBox]);
      setSelect(checkBox);
    }
  }, [checkBox]);

  return (
    <Wrapper>
      <div className={category[checkBox]}>
        <div className="midLineCol"></div>
      </div>
    </Wrapper>
  );
};

export default Point;
