import styled from "styled-components";
import React, { useEffect } from "react";
import { ReactComponent as LogoYoutube } from "../img/logo/logo_youtube.svg";

import ddapGif from "../img/gif/ddapTube.gif";
import reactGif from "../img/gif/reactProject.gif";
import greatGif from "../img/gif/ddapTube.gif";
import team5Gif from "../img/gif/team5.gif";

import ddapImg from "../img/img/img_ddapTube.png";
import reactImg from "../img/img/img_reactProject.png";
import greatImg from "../img/img/img_ddapTube.png";
import team5Img from "../img/img/img_team5.png";

const Wrapper = styled.div`
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
    width: 60vw;
    height: 75vh;
    padding: 40px 50px 20px 50px;
    text-align: center;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
    z-index: 50;
    box-sizing: border-box;

    .modalHeader {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      margin-bottom: 15px;

      .modalTitle {
        width: 28vw;
        font-size: 2.3rem;
      }

      .modalCloseBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4vw;
        height: 100%;
        border: none;
        color: rgba(0, 0, 0, 0.7);
        font-size: 20px;

        &:hover {
          cursor: pointer;
        }
      }
    }

    .modalBody {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      height: 83%;
      width: 100%;

      .modalText {
        width: 28vw;
        box-sizing: border-box;
        overflow: auto;
        & > table {
          border-collapse: collapse;
          font-size: 0.9rem;
          height: 100%;
          & > tr,
          th,
          td {
            padding: 10px 0;
            vertical-align: middle;
          }
          & > tr {
            border-top: 1px solid black;
            border-bottom: 1px solid #d2d2d2;
            height: 30px;

            & > th {
              border-right: 1px solid #d2d2d2;
              width: 20%;
              margin: 0 0 10px 0;
              text-align: center;
              background-color: #c8c8c8;
              & > p {
                margin-bottom: 8px;
              }
            }
            & > td {
              color: #000;
              & > ul {
                line-height: 120%;
                & > li {
                  position: relative;
                  margin: 2px 0 0 0;
                  padding: 0 0 4px 16px;
                }
                & > li:before {
                  list-style-type: disc;
                  content: "";
                  position: absolute;
                  top: 11px;
                  left: 5px;
                  width: 2px;
                  height: 2px;
                  border-radius: 100%;
                  background-color: #8d8d8d;
                }
              }

              text-align: left;
              width: 80%;
              padding: 10px 0 10px 20px;
            }
          }
        }
      }

      .modalImg {
        width: 20vw;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        & > li.gif {
          height: 22vh;
          background-position: top center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        & > li.img {
          height: 22vh;
          background-position: top center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .ddapG {
          background-image: url(${ddapGif});
        }
        .reactG {
          background-image: url(${reactGif});
        }
        .greatG {
          background-image: url(${greatGif});
        }
        .team5G {
          background-image: url(${team5Gif});
        }

        .ddapI {
          cursor: pointer;
          opacity: 30%;
          background-image: url(${ddapImg});
          &:hover {
            opacity: 1;
          }
        }
        .reactI {
          cursor: pointer;
          opacity: 30%;
          background-image: url(${reactImg});
          &:hover {
            opacity: 1;
          }
        }
        .greatI {
          cursor: pointer;
          opacity: 30%;
          background-image: url(${greatImg});
          &:hover {
            opacity: 1;
          }
        }
        .team5I {
          cursor: pointer;
          opacity: 30%;
          background-image: url(${team5Img});
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
`;

const Modal = ({ modal, close, setClose }) => {
  const category = {
    ddap: "DDAPTUBE",
    react: "NFT 랜덤민팅/판매사이트",
    great: "연극/영화 예매사이트",
    team5: "TEAM5",
  };

  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const closeModal = (e) => {
    e.stopPropagation();
    setClose(false);
  };

  return (
    <Wrapper>
      <div className="Modal">
        <div className="modalHeader">
          <div className="modalTitle">{category[modal]}</div>
          <div
            className="modalCloseBtn"
            onClick={closeModal}
            style={{ fontSize: "2.5rem" }}
          >
            X
          </div>
        </div>

        <div className="modalBody">
          {modal !== undefined && modal === "ddap" ? (
            <>
              <div className="modalText">
                <table>
                  <tr>
                    <th>작업 기간</th>
                    <td>8/22 - 9/27 (약 5주) / 총 5명 (본인포함)</td>
                  </tr>
                  <tr>
                    <th>
                      <p>프로젝트</p>
                      <p>목적</p>
                    </th>
                    <td>
                      <ul>
                        <li>
                          영상으로 얻는 수익을 창작자 또는 소유자가 온전하게
                          받게하되 그 과정도 투명하게 알 수 있는 사이트를 만드는
                          것.
                        </li>
                        <li>
                          수익을 자유롭게 받거나 판매/구매하기 위한 기능과
                          경매기능, 조회수에 따라 수익을 받는 기능을 갖고있는
                          사이트일것.
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p>주요업무</p>
                      <p>및</p>
                      <p>상세역할</p>
                    </th>
                    <td>
                      <ul>
                        <li>경매생성 페이지를 구현 담당</li>
                        <li>
                          경매 마감시간을 설정하면 그 시간까지의 d-day가 생겨서
                          매 초마다 타이머가 줄어들도록 함
                        </li>
                        <li>
                          입찰자가 자유롭게 입찰을 취소하거나 입찰금액을 갱신할
                          수 있도록 함
                        </li>
                        <li>단, 최고 입찰자의 경우엔 취소하지 못하게 함</li>
                        <li>
                          경매시간이 끝나면 자동으로 최고입찰자와 경매생성자에게
                          정산버튼이 생겨서 누르면 정산을 받도록 함.
                        </li>
                        <li>
                          정산버튼을 누르면 입찰하지 못한 다른 사람들에게 환불이
                          되도록 함
                        </li>
                        <li>
                          필수적인 부분은 컨트랙트를 사용하되 다른 부분은 db를
                          사용해 가스비를 줄임
                        </li>
                        <li>팀원들과 소통하며 팀원이 구축한 서비스와 연결함</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p>사용언어</p>
                      <p>및</p>
                      <p>개발환경</p>
                    </th>
                    <td>
                      <ul>
                        <li>Next.js, React, Html, Css</li>
                        <li>Node.js,Javascript, MongoDB, Mongoose, Express</li>
                        <li>Truffle,Ganache, Web3, Metamask, solidity</li>
                      </ul>
                    </td>
                  </tr>
                </table>
              </div>
              <ul className="modalImg">
                <li className="gif ddapG"></li>
                <li className="img ddapI">
                  <LogoYoutube
                    className="linkIcon"
                    width="130px"
                    height="150px"
                    backgroundcolor="#fff"
                  />
                </li>
              </ul>
            </>
          ) : (
            ""
          )}
          {modal !== undefined && modal === "react" ? (
            <>
              <div className="modalText">
                <table>
                  <tr>
                    <th>작업 기간</th>
                    <td>05/16 - 06/03 (약 3주) / 총 4명 (본인포함)</td>
                  </tr>
                  <tr>
                    <th>
                      <p>프로젝트</p>
                      <p>목적</p>
                    </th>
                    <td>
                      <ul>
                        <li>
                          현재 가진 지식(react, nodeJs)으로 solidity와 ERC20,
                          ERC721을 이해해보자
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p>주요업무</p>
                      <p>및</p>
                      <p>상세역할</p>
                    </th>
                    <td>
                      <ul>
                        <li>
                          1주차 : 전혀 지식이 없는 solidity와 ERC20, ERC721에
                          관해 공부함.
                        </li>
                        <li>
                          2~3주차 : NFT 민팅(랜덤생성, 랜덤생성 난이도 작성),
                          판매, 구매 기능 구현
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p>사용언어</p>
                      <p>및</p>
                      <p>개발환경</p>
                    </th>
                    <td>
                      <ul>
                        <li>Next.js, React, Html, Css, Typescript</li>
                        <li>Node.js, Javascript, Mysql, Express</li>
                        <li>Truffle,Ganache, Web3, Metamask, solidity</li>
                        <li>Truffle, Ganache, Web3, Metamask, solidity</li>
                        <li>AWS-EC2</li>
                      </ul>
                    </td>
                  </tr>
                </table>
              </div>
              <ul className="modalImg">
                <li className="gif reactG"></li>
                <li
                  className="img reactI"
                  onClick={() =>
                    window.open(
                      "https://github.com/lhj12ps/React_project",
                      "_blank"
                    )
                  }
                ></li>
              </ul>
            </>
          ) : (
            ""
          )}
          {modal !== undefined && modal === "great" ? (
            <>
              <div className="modalText">
                <table>
                  <tr>
                    <th>작업 기간</th>
                    <td>3/18 - 4/11 (약 5주) / 총 3명 (본인포함)</td>
                  </tr>
                  <tr>
                    <th>
                      <p>프로젝트</p>
                      <p>목적</p>
                    </th>
                    <td>
                      <ul>
                        <li>DB와 스키마 활용을 빛낼 수 있는 사이트 만들기</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p>주요업무</p>
                      <p>및</p>
                      <p>상세역할</p>
                    </th>
                    <td>
                      <ul>
                        <li>달력을 사용한 공연 스케쥴러 작성</li>
                        <li>
                          티켓을 예매하면 데이터베이스에서 예매한 날짜를 가져와
                          스케쥴러에 자동으로 예매일을 표시함
                        </li>
                        <li>
                          공연담당자가 공연 이벤트를 생성하면 모든 고객
                          스케쥴러에 해당 이벤트가 생성됨
                        </li>
                        <li>개별적인 스케쥴러 CRUD</li>
                        <li>-</li>
                        <li>공연 정보 자세히보기</li>
                        <li>공연 정보 게시판 ( CRUD ) 공연 태그 (CRUD)</li>
                        <li>관리자용 메뉴</li>
                        <li>회원 레벨 보기, 수정하기</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p>사용언어</p>
                      <p>및</p>
                      <p>개발환경</p>
                    </th>
                    <td>
                      <ul>
                        <li>Html, Css, Javascript</li>
                        <li>Node.js, Javascript, Mysql, Express, Sequelize</li>
                        <li>Pigma</li>
                      </ul>
                    </td>
                  </tr>
                </table>
              </div>
              <ul className="modalImg">
                <li className="gif greatG"></li>
                <li
                  className="img greatI"
                  onClick={() =>
                    window.open(
                      "https://github.com/lhj12ps/theGreatest6",
                      "_blank"
                    )
                  }
                ></li>
              </ul>
            </>
          ) : (
            ""
          )}
          {modal !== undefined && modal === "team5" ? (
            <>
              <div className="modalText">
                <table>
                  <tr>
                    <th>작업 기간</th>
                    <td>02/21 - 02/25 (약 1주) / 총 4명 (본인포함)</td>
                  </tr>
                  <tr>
                    <th>
                      <p>프로젝트</p>
                      <p>목적</p>
                    </th>
                    <td>
                      <ul>
                        <li>
                          nodeJs를 사용해 database와 연결하고 데이터 CRUD
                          구현하기
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p>주요업무</p>
                      <p>및</p>
                      <p>상세역할</p>
                    </th>
                    <td>
                      <ul>
                        <li>백엔드 (user 담당)</li>
                        <li>로그인, 로그아웃, 회원가입, 회원탈퇴, 프로필</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p>사용언어</p>
                      <p>및</p>
                      <p>개발환경</p>
                    </th>
                    <td>
                      <ul>
                        <li>Node.js, Javascript, Mysql, Express</li>
                      </ul>
                    </td>
                  </tr>
                </table>
              </div>
              <ul className="modalImg">
                <li className="gif team5G"></li>
                <li
                  className="img team5I"
                  onClick={() =>
                    window.open("https://github.com/lhj12ps/teamPJ", "_blank")
                  }
                ></li>
              </ul>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Modal;
