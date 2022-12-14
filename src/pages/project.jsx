import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 7vw;
  height: 75vh;
  min-height: 720px;
  display: flex;
  box-sizing: border-box;
  font-family: "stationName";
  overflow-x: auto;

  & > .bodyBox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;

    .numberBox {
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
    & > .bodyText {
      padding: 10vh 0 10vh 0;
      width: 66.5vw;
      height: 100%;
      box-sizing: border-box;
      & > ul {
        padding: 100px 0 30px 0;
        width: 100%;
        height: 100%;
        min-height: 520px;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;

        & > li {
          height: 85%;
          width: 21%;
          min-width: 200px;
          margin-right: 10px;
          text-align: center;
          padding: 0 0 20px 0;

          .backBox {
            cursor: pointer;
            height: 100%;
            width: 100%;
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: start;
            position: relative;
            background-color: #fff;
            box-shadow: 0px 8px 18px 0px rgba(0, 0, 0, 0.1);

            & > p {
              text-align: left;
              margin-bottom: 0.8vh;
            }
            &:hover {
              margin-top: -30px;
              transition: all 600ms ease-in-out;
              & > .bigNum {
                color: #004cf2;
              }
            }
            & > .bigNum {
              line-height: 0%;
              font-size: 11rem;
              font-weight: 900;
            }
            & > .midLine {
              width: 2px;
              height: 120px;
              background-color: #000;
              margin: 100px 0 50px 0;
            }
            & > .titleText {
              font-size: 1.6rem;
              font-weight: 500;
              margin-bottom: 3vh;
            }
          }
        }
        & > li:nth-child(2) {
          margin-top: 80px;
          &:hover {
            margin-top: -30px;
            transition: all 1.2s ease-in-out;
          }
        }
        & > li:nth-child(4) {
          margin-top: 40px;
          &:hover {
            margin-top: -30px;
            transition: all 1.3s ease-in-out;
          }
        }
      }
    }
  }
`;

const Project = ({ checkBox, modal, setModal, setClose }) => {
  const handleClick = (e) => {
    const name = e.currentTarget.getAttribute("name");
    setModal(name);
    setClose(true);
  };
  return (
    <>
      <Wrapper>
        <div className="bodyBox">
          <div className="numberBox">
            <div className="midLineCol"></div>
          </div>
          <div className="bodyText">
            <ul>
              <li onClick={handleClick} name="ddap">
                <div className="backBox">
                  <span className="bigNum">01</span>
                  <div className="midLine"></div>
                  <p className="titleText">DappTube</p>
                  <p>8/22 - 9/27</p>
                  <p>?????? ?????? ????????????</p>
                  <p>????????? ??????????????? ?????????</p>
                  <p>Youtube NFT ??????</p>
                </div>
              </li>
              <li onClick={handleClick} name="react">
                <div className="backBox">
                  <span className="bigNum">02</span>
                  <div className="midLine"></div>
                  <p className="titleText">React_project</p>
                  <p>05/16 - 06/03</p>
                  <p>?????? ??????</p>
                  <p>?????? ?????? ??????</p>
                  <p>?????? ?????? / ?????? ?????????</p>
                </div>
              </li>
              <li onClick={handleClick} name="great">
                <div className="backBox">
                  <span className="bigNum">03</span>
                  <div className="midLine"></div>
                  <p className="titleText">theGreatest6</p>
                  <p>03/18 - 4/11</p>
                  <p>??????, ?????? ?????? ?????????</p>
                  <p>??????????????????(mysql)???</p>
                  <p>????????? ????????? ????????? ?????????</p>
                </div>
              </li>
              <li onClick={handleClick} name="team5">
                <div className="backBox">
                  <span className="bigNum">04</span>
                  <div className="midLine"></div>
                  <p className="titleText">Team5</p>
                  <p>02/21 - 02/25</p>
                  <p>nodejs??? ?????????</p>
                  <p>????????????????????? ????????????</p>
                  <p>????????? CRUD ??????</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Project;
