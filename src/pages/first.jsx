import styled, { keyframes } from "styled-components";

const pointAnimation = keyframes`
  0%{
    transform: scale(0,0)
  }
  100%{
    transform: scale(1,1)
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 7vw;
  height: 75vh;
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
      animation: pointAnimation 1s ease-in-out 1;

      & > .midLineCol {
        background-color: #000;
        width: 38px;
        height: 200px;
      }
    }

    & > .bodyText {
      display: flex;
      justify-content: center;

      flex-direction: column;
      & > .mainText {
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 100%;
      }
      & > .subText {
        font-size: 1.5rem;
        font-weight: 400;
      }

      & > .midLineRow {
        width: 60px;
        height: 5px;
        background-color: #000;
        margin: 5vh 0;
      }
    }
  }
`;

const First = ({ checkBox }) => {
  return (
    <>
      <Wrapper>
        <div className="bodyBox">
          <div className="numberBox">
            <div className="midLineCol"></div>
          </div>
          <div className="bodyText">
            <div className="mainText">
              <p>BLOCK-CHAIN</p>
              <p style={{ letterSpacing: "0.35rem" }}>DEVELOPER</p>
            </div>
            <div className="midLineRow"></div>
            <div className="subText">
              <span>Hi I am HyunJin Lee</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default First;
