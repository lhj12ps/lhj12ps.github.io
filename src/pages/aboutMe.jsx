import styled from "styled-components";
import React, { useState } from "react";

import imgB from "../img/img/img_bible.jpg";
import imgC from "../img/img/img_coffee.png";
import imgM from "../img/img/img_wave.jpg";
import imgR from "../img/img/img_record.jpg";
import imgP from "../img/img/img_japan.jpg";
import a1 from "../img/img/img_aboutMe1.jpg";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 7vw;
  display: flex;
  box-sizing: border-box;
  min-width: 1000px;

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
      box-sizing: border-box;

      & > .titleText {
        min-height: 80px;
        padding-top: 5px;
        height: 10vh;
        min-width: 950px;
        display: flex;
        margin-bottom: 3vh;
        justify-content: flex-start;
        overflow-x: auto;
        overflow-y: hidden;

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
          margin-bottom: 10px;
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
        box-shadow: 0 8px 18px 0 rgba(34, 36, 38, 0.15);
        box-sizing: border-box;

        .imgBox {
          width: 60%;
          height: 100%;
          box-sizing: border-box;
          background-position: top center;
          background-repeat: no-repeat;
          background-size: cover;
          &.a {
            background-image: url(${a1});
          }
          &.b {
            background-image: url(${imgB});
          }
          &.c {
            background-image: url(${imgC});
            background-position: top;
          }
          &.m {
            background-image: url(${imgM});
          }
          &.r {
            background-image: url(${imgR});
          }
          &.p {
            background-image: url(${imgP});
          }
        }

        .textBox {
          position: relative;
          width: 40%;
          height: 100%;
          padding: 85px 60px;
          box-sizing: border-box;

          .text {
            width: 100%;
            text-align: left;
            font-size: 2.8rem;
            font-weight: 600;
            letter-spacing: 1px;
            color: #090a05;
            opacity: 1;
            line-height: 95%;
            box-sizing: border-box;

            .midLine {
              width: 1px;
              height: 100px;
              background-color: #090a05;
              margin: 60px 0 50px 3px;
            }

            .smallText {
              color: #090a05;
              font-size: 1rem;
              word-break: break-word;
            }

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
                  className={click === "b" ? "mainText" : "mainText off"}
                  onClick={handleClick}
                  name="b"
                >
                  B
                </li>
                <li
                  className={click === "c" ? "mainText" : "mainText off"}
                  onClick={handleClick}
                  name="c"
                >
                  C
                </li>
                <li
                  className={click === "m" ? "mainText" : "mainText off"}
                  onClick={handleClick}
                  name="m"
                >
                  M
                </li>
                <li
                  className={click === "r" ? "mainText" : "mainText off"}
                  onClick={handleClick}
                  name="r"
                >
                  R
                </li>
                <li
                  className={click === "p" ? "mainText" : "mainText off"}
                  onClick={handleClick}
                  name="p"
                >
                  P
                </li>
                <li className="mainText">ABOUT ME</li>
              </ul>
            </div>
            <div className="subText">
              <div className="textBox">
                {click === "" ? (
                  <div className="text">
                    <p>HELLO</p>
                    <p>THIS IS ME</p>
                    <div className="midLine"></div>
                    <p className="smallText">#?????????????????? #ISTP</p>
                    <p className="smallText">#???????????????</p>
                  </div>
                ) : null}
                {click === "b" ? (
                  <div className="text">
                    <p>BASIC</p>
                    <p>BIBLE</p>
                    <div className="midLine"></div>
                    <p className="smallText">#????????????_?????? #??????_11???_7???</p>
                    <p className="smallText">#????????????_?????????_????????????_??????</p>
                  </div>
                ) : null}
                {click === "c" ? (
                  <div className="text">
                    <p>CODE</p>
                    <p>COFFEE</p>
                    <div className="midLine"></div>
                    <p className="smallText">#2020_?????????_????????????</p>
                    <p className="smallText">#?????????_????????????_?????????</p>
                  </div>
                ) : null}
                {click === "m" ? (
                  <div className="text">
                    <p>MOOD</p>
                    <p>MUSIC</p>
                    <div className="midLine"></div>
                    <p className="smallText">#?????????_????????????_?????? #?????????</p>
                    <p className="smallText">#????????????_??????_??????_??????</p>
                  </div>
                ) : null}
                {click === "r" ? (
                  <div className="text">
                    <p>READ</p>
                    <p>RECORD</p>
                    <div className="midLine"></div>
                    <p className="smallText">#?????????_?????????_?????????</p>
                    <p className="smallText">#??????_????????? #30??????_???????????????</p>
                  </div>
                ) : null}
                {click === "p" ? (
                  <div className="text">
                    <p>PLACE</p>
                    <p>PEACE</p>
                    <div className="midLine"></div>
                    <p className="smallText">#????????????_1.5??? #????????????_5???</p>
                    <p className="smallText">#??????????????? #?????????_?????????_??????</p>
                  </div>
                ) : null}
              </div>
              {click === "" ? <div className="imgBox a"></div> : null}
              {click === "b" ? <div className="imgBox b"></div> : null}
              {click === "c" ? <div className="imgBox c"></div> : null}
              {click === "m" ? <div className="imgBox m"></div> : null}
              {click === "r" ? <div className="imgBox r"></div> : null}
              {click === "p" ? <div className="imgBox p"></div> : null}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default AboutMe;
