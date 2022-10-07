import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { ReactComponent as LogoSolidity } from "../img/logo/logo_solidity.svg";
import { ReactComponent as LogoExpressjs } from "../img/logo/logo_expressjs.svg";
import { ReactComponent as LogoNextjs } from "../img/logo/logo_nextjs.svg";
import { ReactComponent as LogoReact } from "../img/logo/logo_react.svg";
import { ReactComponent as LogoTruffle } from "../img/logo/logo_truffle.svg";
import { ReactComponent as LogoWeb3 } from "../img/logo/logo_web3js.svg";
import { ReactComponent as LogoJs } from "../img/logo/logo_js.svg";
import { ReactComponent as LogoSlack } from "../img/logo/logo_slack.svg";
import { ReactComponent as LogoGit } from "../img/logo/logo_git.svg";
import { ReactComponent as LogoPs } from "../img/logo/logo_ps.svg";
import { ReactComponent as LogoAi } from "../img/logo/logo_ai.svg";
import { ReactComponent as LogoId } from "../img/logo/logo_id.svg";
import { ReactComponent as LogoFigma } from "../img/logo/logo_figma.svg";
import { ReactComponent as LogoChakra } from "../img/logo/logo_chakra.svg";
import { ReactComponent as LogoMongo } from "../img/logo/logo_mongo.svg";
import { ReactComponent as LogoMysql } from "../img/logo/logo_mysql.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 7vw;
  height: 80vh;
  display: flex;
  box-sizing: border-box;

  & > .bodyBox {
    width: 100%;
    min-width: 940px;
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
        box-sizing: border-box;
        height: 100%;

        & > .subTextUl {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          transition: all 450ms ease-in-out;
          overflow: hidden;
          box-sizing: border-box;
          padding: 10px 0;

          & > .skillBox {
            position: relative;
            padding: 0 0 0 20px;
            width: 100%;
            height: 100%;
            min-height: 85px;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            flex-direction: row;
            flex-wrap: nowrap;
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
              width: 100%;
              justify-content: flex-end;
              flex-direction: row;
              margin-bottom: 10px;

              & > .icons {
                position: absolute;
                left: 0;
                display: block;
                height: 100%;
                & > ul {
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: flex-end;
                  padding-right: 10px;
                  & > li {
                    width: 80px;
                    height: 80px;
                    margin-left: 20px;
                    background-color: #fff;
                    border-radius: 30%;
                    box-shadow: 0px 8px 18px 0px rgba(0, 0, 0, 0.3);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    opacity: 1;
                    transition-delay: 250ms;
                    transition: all 450ms ease-in-out;
                  }
                }
              }
              .subTitleText {
                display: inline-block;
                background-color: #000;
                color: #fff;
                transition: all 450ms ease-in-out;
              }
            }

            &.off {
              .subTitleText {
                transition: all 450ms ease-in-out;
                color: #000;
              }

              .icons {
                transition: all 450ms ease-in-out;
                right: -1000px;
              }
            }

            .icons {
              display: none;
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

const ModalSkills = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  .Modal {
    position: absolute;
    min-width: 700px;
    width: 50vw;
    height: 75vh;
    padding: 40px 50px;
    text-align: center;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
    z-index: 50;
    overflow-y: auto;
    box-sizing: border-box;

    & > .iconsBox {
      height: 70%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 20px 0;
      box-sizing: border-box;
      & > .iconsView {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        min-width: 650px;
        & > ul {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          flex-direction: row;
          & > li {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 80px;
            width: 80px;
            border-radius: 30%;
            box-shadow: -1px 8px 5px 0px rgba(0, 0, 0, 0.2);
            margin: 0 15px 30px 0;
          }
        }
      }
    }
  }
`;

function MySkills() {
  const [click, setClick] = useState("");
  const [modalClick, setModalClick] = useState(false);
  const modalRef = useRef();

  const handleClick = (e) => {
    const name = e.target.getAttribute("name");
    if (click === name) {
      setClick("");
    } else {
      setClick(name);
    }
  };

  const handleModalClick = () => {
    setModalClick(true);
    setClick("");
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickModalOutside);
    return () => {
      document.removeEventListener("mousedown", clickModalOutside);
    };
  });

  const clickModalOutside = (e) => {
    document.body.style.overflow = "hidden";
    if (modalClick && !modalRef.current.contains(e.target)) {
      setModalClick(false);
      document.body.style.overflow = "unset";
    }
  };

  return (
    <>
      {modalClick ? (
        <ModalSkills>
          <div className="Modal" ref={modalRef}>
            <p
              style={{
                fontSize: "3.2rem",
                fontWeight: "700",
                margin: "0 0 45px 0",
                backgroundColor: "#000",
                color: "#fff",
                display: "inline-block",
                padding: "3px 10px 10px 10px",
              }}
            >
              My Skills
            </p>
            <div className="iconsBox">
              <div className="iconsView">
                <ul>
                  <li>
                    <LogoSolidity width="65px" height="65px" />
                  </li>
                  <li>
                    <LogoWeb3 width="60px" height="60px" />
                  </li>
                  <li>
                    <LogoTruffle width="65px" height="65px" />
                  </li>
                </ul>
              </div>
              <div className="iconsView">
                <ul>
                  <li>
                    <LogoReact width="60px" height="60px" />
                  </li>
                  <li>
                    <LogoNextjs width="60px" height="60px" />
                  </li>
                  <li>
                    <LogoChakra width="60px" height="60px" />
                  </li>
                </ul>
              </div>
              <div className="iconsView">
                <ul>
                  <li>
                    <LogoExpressjs width="60px" height="60px" />
                  </li>
                  <li>
                    <LogoJs width="55px" height="55px" />
                  </li>
                  <li>
                    <LogoMongo width="55px" height="55px" />
                  </li>
                  <li>
                    <LogoMysql width="55px" height="55px" />
                  </li>
                </ul>
              </div>
              <div className="iconsView">
                <ul>
                  <li>
                    <LogoSlack width="60px" height="60px" />
                  </li>
                  <li>
                    <LogoGit width="60px" height="60px" />
                  </li>
                  <li>
                    <LogoFigma width="60px" height="60px" />
                  </li>
                  <li>
                    <LogoPs width="60px" height="60px" />
                  </li>
                  <li>
                    <LogoAi width="60px" height="60px" />
                  </li>
                  <li>
                    <LogoId width="60px" height="60px" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ModalSkills>
      ) : null}

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
                    click === "blockchain"
                      ? "skillBox active"
                      : click !== ""
                      ? "skillBox off"
                      : "skillBox"
                  }
                >
                  <p
                    className="subTitleText"
                    name="blockchain"
                    onClick={handleClick}
                  >
                    BLOCK-CHAIN
                  </p>
                  <div className="icons">
                    <ul>
                      <li>
                        <LogoSolidity width="65px" height="65px" />
                      </li>
                      <li>
                        <LogoWeb3 width="60px" height="60px" />
                      </li>
                      <li>
                        <LogoTruffle width="65px" height="65px" />
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className={
                    click === "front"
                      ? "skillBox active"
                      : click !== ""
                      ? "skillBox off"
                      : "skillBox"
                  }
                >
                  <p
                    className="subTitleText"
                    name="front"
                    onClick={handleClick}
                  >
                    FRONT-END
                  </p>
                  <div className="icons">
                    <ul>
                      <li>
                        <LogoReact width="60px" height="60px" />
                      </li>
                      <li>
                        <LogoNextjs width="60px" height="60px" />
                      </li>
                    </ul>
                  </div>{" "}
                </li>
                <li
                  className={
                    click === "back"
                      ? "skillBox active"
                      : click !== ""
                      ? "skillBox off"
                      : "skillBox"
                  }
                >
                  <p className="subTitleText" name="back" onClick={handleClick}>
                    BACK-END
                  </p>
                  <div className="icons">
                    <ul>
                      <li>
                        <LogoExpressjs width="60px" height="60px" />
                      </li>
                      <li>
                        <LogoJs width="55px" height="55px" />
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className={
                    click === "etc"
                      ? "skillBox active"
                      : click !== ""
                      ? "skillBox off"
                      : "skillBox"
                  }
                >
                  <div className="icons">
                    <ul>
                      <li>
                        <LogoSlack width="60px" height="60px" />
                      </li>
                      <li>
                        <LogoGit width="60px" height="60px" />
                      </li>
                      <li>
                        <LogoFigma width="60px" height="60px" />
                      </li>
                      <li>
                        <LogoPs width="60px" height="60px" />
                      </li>
                      <li>
                        <LogoAi width="60px" height="60px" />
                      </li>
                      <li>
                        <LogoId width="60px" height="60px" />
                      </li>
                    </ul>
                  </div>
                  <p className="subTitleText" name="etc" onClick={handleClick}>
                    ETC
                  </p>
                </li>
                <li
                  className={
                    click === "viewAll"
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
                    onClick={handleModalClick}
                  >
                    VIEW ALL
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
