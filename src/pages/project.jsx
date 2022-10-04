import styled from "styled-components";
import React, { useEffect, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 7vw;
  height: 75vh;
  display: flex;
  box-sizing: border-box;
  font-family: "stationName";

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
      padding: 10vh 0 0 0;
      width: 66.5vw;
      box-sizing: border-box;

      & > ul {
        padding-top: 50px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;

        & > li {
          height: 91%;
          width: 21%;
          margin-right: 10px;
          text-align: center;
          .backBox {
            cursor: pointer;
            height: 100%;
            width: 100%;
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: start;
            position: relative;
            box-shadow: 0px 8px 18px 0px rgba(0, 0, 0, 0.1);

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
              margin: 100px 0 60px 0;
            }
            & > .titleText {
              font-size: 1.6rem;
              font-weight: 500;
              margin-bottom: 5px;
            }
          }
        }

        & > li:nth-child(2) {
          margin-top: 80px;
          &:hover {
            margin-top: -30px;
          }
        }

        & > li:nth-child(4) {
          margin-top: 40px;
          &:hover {
            margin-top: -30px;
          }
        }
      }
    }
  }
`;

const Project = ({ checkBox, modal, setModal,setClose }) => {
  const handleClick = (e) => {
    const name = e.currentTarget.getAttribute("name");
    setModal(name);
    setClose(true)
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
                  <p className="titleText ddapImg">DappTube</p>
                  <p>8/22 - 9/27</p>
                  <p>기업 협업 프로젝트</p>
                  <p>스마트 컨트랙트를 사용한</p>
                  <p>Youtube NFT 마켓</p>
                </div>
              </li>
              <li onClick={handleClick} name="react">
                <div className="backBox">
                  <span className="bigNum">02</span>
                  <div className="midLine"></div>
                  <p className="titleText">React_project</p>
                  <p>05/16 - 06/03</p>
                  <p>랜덤 민팅을 통한 토큰 생성</p>
                  <p>토큰 판매 / 구매 사이트</p>
                </div>
              </li>
              <li onClick={handleClick} name="great">
                <div className="backBox">
                  <span className="bigNum">03</span>
                  <div className="midLine"></div>
                  <p className="titleText">theGreatest6</p>
                  <p>03/18 - 4/11</p>
                  <p>연극, 영화 예매 사이트</p>
                  <p>데이터베이스(mysql)와</p>
                  <p>스키마 활용이 빛나는 사이트</p>
                </div>
              </li>
              <li onClick={handleClick} name="team5">
                <div className="backBox">
                  <span className="bigNum">04</span>
                  <div className="midLine"></div>
                  <p className="titleText">Team5</p>
                  <p>02/21 - 02/25</p>
                  <p>nodejs를 사용해</p>
                  <p>데이터베이스와 연결하고</p>
                  <p>데이터 CRUD 구현</p>
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
