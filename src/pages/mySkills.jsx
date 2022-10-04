import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo_solidity } from "../img/logo_solidity.svg";
import { ReactComponent as Logo_expressjs } from "../img/logo_expressjs.svg";
import { ReactComponent as Logo_ganache } from "../img/logo_ganache.svg";
import { ReactComponent as Logo_nextjs } from "../img/logo_nextjs.svg";
import { ReactComponent as Logo_react } from "../img/logo_react.svg";
import { ReactComponent as Logo_truffle } from "../img/logo_truffle.svg";
import { ReactComponent as Logo_web3 } from "../img/logo_web3js.svg";
import { ReactComponent as Logo_js } from "../img/logo_js.svg";
import { ReactComponent as Logo_slack } from "../img/logo_slack.svg";
import { ReactComponent as Logo_git } from "../img/logo_git.svg";
import { ReactComponent as Logo_ps } from "../img/logo_ps.svg";
import { ReactComponent as Logo_ai } from "../img/logo_ai.svg";
import { ReactComponent as Logo_id } from "../img/logo_id.svg";
import { ReactComponent as Logo_figma } from "../img/logo_figma.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 7vw;
  height: 76vh;
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
      box-sizing: border-box;
      overflow: hidden;

      & > .titleText {
        display: flex;
        margin-bottom: 100px;
        justify-content: flex-end;

        .mainText {
          display: inline-block;
          text-align: center;
          font-size: 5rem;
          font-weight: 700;
          line-height: 100%;
          height: 75px;
          background-color: #000;
          color: #fff;
          line-height: 90%;
          padding: 0px 20px;
          box-sizing: border-box;
        }
      }

      .subText {
        display: flex;
        justify-content: flex-end;
        text-align: right;
        box-sizing: border-box;

        & > .subTextUl {
          height: 80%;
          width: 100%;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          box-sizing: border-box;
          transition: all 450ms ease-in-out;

          & > .skillBox {
            padding: 0 0 0 20px;
            height: 85px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: nowrap;
            width: 100%;
            box-sizing: border-box;

            &.viewAll {
              .subTitleText {
                background-color: #000;
                color: #fff;
                font-size: 3rem;
                transition: all 450ms ease-in-out;
                font-weight: 400;
                border-bottom: 3px solid #000;
                line-height: 90%;
                margin-bottom: 30px;
                padding: 10px 0 0 0;
              }
            }

            &.active {
              margin: 10px 0;
              & > .icons {
                .simpleText {
                  opacity: 1;
                  margin-top: 23px;
                  padding-left: 5px;
                  text-align: left;
                  font-size: 1.2rem;
                  transition: all 1200ms ease-in-out;
                }

                & > ul {
                  & > li {
                    opacity: 1;
                    transition-delay: 250ms;
                    transition: all 450ms ease-in-out;
                    box-shadow: 0px 8px 18px 0px rgba(0, 0, 0, 0.3);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                }
              }
              .subTitleText {
                background-color: #000;
                color: #fff;
                font-size: 4.5rem;
                transition: all 450ms ease-in-out;
              }
            }

            &.off {
              .subTitleText {
                margin: 0;
                color: #000;
                font-size: 2.3rem;
                transition: all 600ms ease-in-out;
              }
            }

            .icons {
              height: 100%;
              margin-right: 100px;
              position: relative;
              .simpleText {
                opacity: 0;
                margin-top: 23px;
                padding-left: 5px;
                text-align: left;
                font-size: 1.2rem;
                transition: all 50ms ease-in-out;
              }

              & > ul {
                display: flex;
                & > li {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  opacity: 0;
                  height: 80px;
                  width: 80px;
                  border-radius: 30%;
                  margin-right: 30px;
                  transition: all 450ms ease-in-out;
                }
              }
            }

            .subTitleText {
              cursor: pointer;
              position: relative;
              display: inline-block;
              font-size: 3rem;
              font-weight: 400;
              border-bottom: 3px solid #000;
              line-height: 90%;
              margin-bottom: 30px;
              transition: all 450ms ease-in-out;

              &:hover {
                color: #fff;
              }

              &:after {
                content: "";
                display: inline-block;
                position: absolute;
                bottom: 0;
                right: 0;
                width: 100%;
                height: 50px;
                background-color: #000;
                transform: scaleX(0);
                transition: transform 250ms ease-in-out;
                z-index: -1;
              }

              &:hover:after {
                transform: scaleX(1);
                transform-origin: right;
              }
            }
          }
        }
      }
    }
  }
`;

function MySkills() {
  const [click, setClick] = useState("");

  const handleClick = (e) => {
    const name = e.target.getAttribute("name");
    if (click == name) {
      setClick("");
    } else {
      setClick(name);
    }
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
              <div className="mainText">
                <p>MY SKILLS</p>
              </div>
            </div>

            <div className="subText">
              <ul className="subTextUl">
                <li
                  className={
                    click == "blockchain"
                      ? "skillBox active"
                      : click !== ""
                      ? "skillBox off"
                      : "skillBox"
                  }
                >
                  <div className="icons">
                    <ul>
                      <li>
                        <Logo_solidity width="65px" height="65px" />
                      </li>
                      <li>
                        <Logo_web3 width="60px" height="60px" />
                      </li>
                      <li>
                        <Logo_truffle width="65px" height="65px" />
                      </li>
                    </ul>
                    <p className="simpleText">설명이 보이니</p>
                  </div>
                  <p
                    className="subTitleText"
                    name="blockchain"
                    onClick={handleClick}
                  >
                    BLOCK-CHAIN
                  </p>
                </li>
                <li
                  className={
                    click == "front"
                      ? "skillBox active"
                      : click !== ""
                      ? "skillBox off"
                      : "skillBox"
                  }
                >
                  <div className="icons">
                    <ul>
                      <li>
                        <Logo_react width="60px" height="60px" />
                      </li>
                      <li>
                        <Logo_nextjs width="60px" height="60px" />
                      </li>
                    </ul>
                    <p className="simpleText">설명이 보이니</p>
                  </div>
                  <p
                    className="subTitleText"
                    name="front"
                    onClick={handleClick}
                  >
                    FRONT-END
                  </p>
                </li>
                <li
                  className={
                    click == "back"
                      ? "skillBox active"
                      : click !== ""
                      ? "skillBox off"
                      : "skillBox"
                  }
                >
                  <div className="icons">
                    <ul>
                      <li>
                        <Logo_expressjs width="60px" height="60px" />
                      </li>
                      <li>
                        <Logo_js width="55px" height="55px" />
                      </li>
                    </ul>
                    <p className="simpleText">설명이 보이니</p>
                  </div>
                  <p className="subTitleText" name="back" onClick={handleClick}>
                    BACK-END
                  </p>
                </li>
                <li
                  className={
                    click == "etc"
                      ? "skillBox active"
                      : click !== ""
                      ? "skillBox off"
                      : "skillBox"
                  }
                >
                  <div className="icons">
                    <ul>
                      <li>
                        <Logo_slack width="60px" height="60px" />
                      </li>
                      <li>
                        <Logo_git width="60px" height="60px" />
                      </li>
                      <li>
                        <Logo_figma width="60px" height="60px" />
                      </li>
                      <li>
                        <Logo_ps width="60px" height="60px" />
                      </li>
                      <li>
                        <Logo_ai width="60px" height="60px" />
                      </li>
                      <li>
                        <Logo_id width="60px" height="60px" />
                      </li>
                    </ul>
                    <p className="simpleText">설명이 보이니</p>
                  </div>
                  <p className="subTitleText" name="etc" onClick={handleClick}>
                    ETC
                  </p>
                </li>
                <li
                  className={
                    click == "viewAll"
                      ? "skillBox viewAll"
                      : click !== ""
                      ? "skillBox off"
                      : "skillBox"
                  }
                >
                  <div className="icons"></div>
                  <p
                    className="subTitleText"
                    name="viewAll"
                    onClick={handleClick}
                  >
                    VIEW ALL SKILLS
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default MySkills;
