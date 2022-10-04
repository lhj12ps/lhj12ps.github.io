import styled from "styled-components";
import React, { useEffect, useState } from "react";

const Wrapper = styled.div`
  position: fixed;
  bottom: 100px;
  right: 50px;

  .clickBox {
    opacity: 0;
  }

  .clickBox.active {
    opacity: 1;
    cursor: pointer;
    transition: opacity 0.3s ease-in;
    height: 22vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    .arrowBox {
      position: relative;
      width: 20px;
      margin: 0 0 0 13px;

      .arrowLine {
        position: relative;
        width: 1px;
        height: 80px;
        background-color: #000000;
      }

      .arrowLine::after {
        position: absolute;
        content: "";
        right: -4px;
        bottom: 0;
        width: 1px;
        height: 10px;
        background-color: #000000;
        transform: rotate(225deg);
      }
    }

    & > .scrollText {
      rotate: 90deg;
    }
  }
`;

const ScrollLine = () => {
  const [scrollY, setScrollY] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  return (
    <Wrapper>
      <div className={btnStatus ? "clickBox" : "clickBox active"}>
        <p className="scrollText">SCROLL DOWN</p>
        <div className="arrowBox">
          <div className="arrowLine"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ScrollLine;
