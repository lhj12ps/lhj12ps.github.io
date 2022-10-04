import styled from "styled-components";
import React, { useEffect, useState } from "react";

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
    padding: 50px;
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
      margin-bottom: 30px;

      .modalTitle {
        width: 28vw;
        font-size: 2.5rem;
        background-color: olive;
      }

      .modalCloseBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4vw;
        height: 100%;
        background-color: blue;
        border: none;
        color: rgba(0, 0, 0, 0.7);
        font-size: 20px;

        &:hover {
          cursor: pointer;
        }
      }
    }

    .modalBody {
      background-color: palegreen;
      width: 28vw;
      height: 100%;
    }
  }
`;

const Modal = ({ modal, close, setClose }) => {
  const category = {
    ddap: 0,
    react: 1,
    great: 2,
    team5: 3,
  };
  console.log("modal 체크2222:");

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
    console.log("취소버튼 클릭했다.");
    e.stopPropagation();
    setClose(false);
  };

  return (
    <Wrapper>
      <div className="Modal">
        <div className="modalHeader">
          <div className="modalTitle">제목</div>
          <div
            className="modalCloseBtn"
            onClick={closeModal}
            style={{ fontSize: "2.5rem" }}
          >
            X
          </div>
        </div>
        <div className="ModalBody">본문</div>
        <ul>
          <li className="ModalImg">사진자료1</li>
          <li className="ModalImg">사진자료1</li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Modal;
