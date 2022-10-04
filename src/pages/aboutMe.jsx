import styled from "styled-components";
import React, { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 7vw;
  height: 80vh;
  display: flex;
  box-sizing: border-box;

  & > .bodyBox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;

    & > .numberBox {
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

    & > .bodyText {
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;

      & > .titleText {
        height: 100px;
        display: flex;
        margin-bottom: 30px;
        justify-content: flex-end;

        .mainText {
          display: inline-block;
          text-align: center;
          font-size: 5rem;
          font-weight: 700;
          line-height: 100%;
          height: 100%;
          background-color: #000;
          color: #fff;
          line-height: 82%;
          padding: 5px 10px;
          margin-left: 10px;
          box-sizing: border-box;
        }
        .off {
          opacity: 15%;
        }
        .off:hover {
          cursor: pointer;
          opacity: 1;
          background-color: #004cf2;
          transition: all 400ms ease-in-out;
        }
      }
      .subText {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        box-sizing: border-box;

        .imgBox {
          width: 70%;
          height: 100%;
          background-color: #353535;
          opacity: 30%;
          box-sizing: border-box;
        }

        .textBox {
          position: relative;
          width: 35%;
          height: 100%;
          padding: 10px 0px 10px 13px;
          background-color: #010e2f;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          overflow: auto;
          box-sizing: border-box;

          .text {
            position: absolute;
            top: 20px;
            left: 8px;
            width: 100%;
            text-align: center;
            font-size: 4.2rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            color: #fff;
            padding: 5px 10px 0px 0px;
            margin: 0 0 10px 0;
            opacity: 1;
            line-height: 95%;
            transition: all 1s ease-in-out;
            box-sizing: border-box;

            &.off {
              bottom: 0px;
              left: 8px;
              opacity: 0;
              font-size: 3rem;
              padding: 10px 10px 0px 0px;
              transition: all 450ms ease-in-out;
            }
          }
        }
      }
    }
  }
`;
function AboutMe() {
  const [click, setClick] = useState("");

  const handleClick = (e) => {
    const name = e.target.getAttribute("name");
    setClick(name);
  };

  return (
    <>
      <Wrapper>
        <div className="bodyBox">
          <div className="numberBox">
            <div className="midLineCol"></div>
          </div>
          <div className="bodyText">
            <div className="titleText">
              <ul>
                <li
                  className={click == "b" ? "mainText" : "mainText off"}
                  onClick={handleClick}
                  name="b"
                >
                  B
                </li>
                <li
                  className={click == "c" ? "mainText" : "mainText off"}
                  onClick={handleClick}
                  name="c"
                >
                  C
                </li>
                <li
                  className={click == "m" ? "mainText" : "mainText off"}
                  onClick={handleClick}
                  name="m"
                >
                  M
                </li>
                <li
                  className={click == "r" ? "mainText" : "mainText off"}
                  onClick={handleClick}
                  name="r"
                >
                  R
                </li>
                <li
                  className={click == "p" ? "mainText" : "mainText off"}
                  onClick={handleClick}
                  name="p"
                >
                  P
                </li>
                <li className="mainText">ABOUT ME</li>
              </ul>
            </div>
            <div className="subText">
              <ul className="imgBox">
                <li></li>
              </ul>
              <ul className="textBox">
                <li onClick={handleClick} name="b">
                  <div className={click == "b" ? "text" : "text off"}>
                    <p>BASIC</p>
                    <p>BIBLE</p>
                  </div>
                </li>
                <li onClick={handleClick} name="c">
                  <div className={click == "c" ? "text" : "text off"}>
                    <p>CODE</p>
                    <p>COFFEE</p>
                  </div>
                </li>
                <li onClick={handleClick} name="m">
                  <div className={click == "m" ? "text" : "text off"}>
                    <p>MOVE</p>
                    <p>MOOD</p>
                  </div>
                </li>
                <li onClick={handleClick} name="r">
                  <div className={click == "r" ? "text" : "text off"}>
                    <p>READ</p>
                    <p>RECORD</p>
                  </div>
                </li>
                <li onClick={handleClick} name="p">
                  <div className={click == "p" ? "text" : "text off"}>
                    <p>PLACE</p>
                    <p>PEACE</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default AboutMe;
