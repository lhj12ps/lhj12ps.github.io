import styled from "styled-components";
import React, { useEffect } from "react";
import { ReactComponent as LogoYoutube } from "../img/logo/logo_youtube.svg";

import ddapGif from "../img/gif/ddapTube.gif";
import reactGif from "../img/gif/ddapTube.gif";
import greatGif from "../img/gif/ddapTube.gif";
import team5Gif from "../img/gif/ddapTube.gif";

import ddapImg from "../img/img_ddapTube.png";
import reactImg from "../img/img_ddapTube.png";
import greatImg from "../img/img_ddapTube.png";
import team5Img from "../img/img_ddapTube.png";

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
    height: 70vh;
    padding: 40px 50px;
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
        background-color: orange;
        width: 28vw;
        padding: 20px;
        box-sizing: border-box;
      }

      .modalImg {
        width: 20vw;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        & > li.gif {
          height: 22vh;
        }
        & > li.img {
          cursor: pointer;
          opacity: 30%;
          height: 22vh;

          background-position: top center;
          background-repeat: no-repeat;
          background-size: cover;
          &:hover {
            opacity: 1;
          }
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
          background-image: url(${ddapImg});
        }
        .reactI {
          background-image: url(${reactImg});
        }
        .greatI {
          background-image: url(${greatImg});
        }
        .team5I {
          background-image: url(${team5Img});
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
          <div className="modalText"></div>

          {modal !== undefined && modal === "ddap" ? (
            <ul className="modalImg">
              <li className="gif ddapG"></li>
              <li className="img ddapI">
                <LogoYoutube
                  className="linkIcon"
                  width="130px"
                  height="150px"
                  backgroundColor="#fff"
                />
              </li>
            </ul>
          ) : (
            ""
          )}

          {modal !== undefined && modal === "react" ? (
            <ul className="modalImg">
              <li className="gif reactG"></li>
              <li className="img reactI">
                <LogoYoutube
                  className="linkIcon"
                  width="130px"
                  height="150px"
                  backgroundColor="#fff"
                />
              </li>
            </ul>
          ) : (
            ""
          )}

          {modal !== undefined && modal === "great" ? (
            <ul className="modalImg">
              <li className="gif greatG"></li>
              <li className="img greatI">
                <LogoYoutube
                  className="linkIcon"
                  width="130px"
                  height="150px"
                  backgroundColor="#fff"
                />
              </li>
            </ul>
          ) : (
            ""
          )}

          {modal !== undefined && modal === "team5" ? (
            <ul className="modalImg">
              <li className="gif team5G"></li>
              <li className="img team5I">
                <LogoYoutube
                  className="linkIcon"
                  width="130px"
                  height="150px"
                  backgroundColor="#fff"
                />
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Modal;
