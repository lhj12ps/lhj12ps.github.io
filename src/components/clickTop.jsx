import styled from "styled-components";
import React, { useEffect, useState } from "react";

const Wrapper = styled.div`
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 100;

  .clickBox {
    opacity: 0;
  }

  .clickBox.active {
    opacity: 1;
    cursor: pointer;
    transition: opacity 0.3s ease-in;
    padding-top: 20px;
    height: 25vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    .arrowBox {
      position: relative;
      width: 20px;
      margin: 0 0 60px 13px;

      .arrowLine {
        position: relative;
        width: 1px;
        height: 60px;
        background-color: #000;
      }

      .arrowLine::after {
        position: absolute;
        content: "";
        right: -4px;
        top: 0;
        width: 1px;
        height: 10px;
        background-color: #000;
        transform: rotate(-45deg);
      }

      &.colorWhite {
        .arrowLine {
          background-color: #fff;
          &:after {
            background-color: #fff;
          }
        }
      }
    }

    & > .scrollText {
      rotate: 90deg;
      &.colorWhite {
        color: #fff;
      }
    }
  }
`;

const ClickTop = () => {
  const [scrollY, setScrollY] = useState(0);
  const [white, setWhite] = useState(false);
  const [btnStatus, setBtnStatus] = useState(false);

  const handleClick = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 150) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  useEffect(() => {
    if (scrollY > 2700 && white === false) {
      setWhite(true);
    } else if (scrollY <= 2700 && white !== false) {
      setWhite(false);
    }
  }, [scrollY]);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0);
    setBtnStatus(false);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleClick);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleClick);
    };
  });

  return (
    <Wrapper>
      <div
        className={btnStatus ? "clickBox active" : "clickBox"}
        onClick={handleTop}
      >
        <div className={white === true ? "arrowBox colorWhite" : "arrowBox"}>
          <div className="arrowLine"></div>
        </div>
        <p className={white === true ? "scrollText colorWhite" : "scrollText"}>
          CLICK TO TOP
        </p>
      </div>
    </Wrapper>
  );
};

export default ClickTop;
