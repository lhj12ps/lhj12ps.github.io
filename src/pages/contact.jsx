import styled from "styled-components";

const Wrapper = styled.div`
  color: #fff;
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

      & > .midLineCol {
        position: relative;
        background-color: #fff;
        width: 38px;
        height: 200px;
        rotate: 45deg;
      }

      & > .midLineCol::after {
        position: absolute;
        background-color: #fff;
        width: 38px;
        height: 200px;
        rotate: 90deg;
        content: "";
      }
    }

    & > .bodyText {
      display: flex;
      width: 100%;
      align-items: center;
      flex-direction: column;
      /* background-color: orange; */
      box-sizing: border-box;

      & > .mainText {
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 100%;
        letter-spacing: 0.3rem;
        text-align: center;
      }
      & > .subText {
        margin: 10px 0 0 0;
        width: 70%;
        font-size: 1rem;
        font-weight: 400;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        & > ul {
          & > li {
            border-bottom: 1px solid #fff;
            margin: 0 20px;
          }
        }
      }

      & > .midLineRow {
        letter-spacing: 7px;
        font-size: 2rem;
        margin: 5vh 0 8vh 0;
      }
    }
  }
`;

function Contact() {
  return (
    <>
      <Wrapper>
        <div className="bodyBox">
          <div className="numberBox">
            <div className="midLineCol"></div>
          </div>
          <div className="bodyText">
            <div className="mainText">
              <p style={{ margin: "0 0 10px 0" }}>CONTACT</p>
              <p
                style={{
                  fontSize: "1.7rem",
                  fontWeight: "300",
                  letterSpacing: "none",
                }}
              >
                E-MAIL : lhj12ps@gmail.com
              </p>
              <p
                style={{
                  fontSize: "1.7rem",
                  fontWeight: "300",
                  letterSpacing: "none",
                }}
              >
                PHONE : 010-2238-0387
              </p>
            </div>
            <div className="midLineRow">...</div>
            <div className="subText">
              <ul style={{ display: "flex" }}>
                <li>ⓒ 2022 HYUNJIN LEE</li>
                <li style={{ border: "none" }}>/</li>
                <li
                  style={{ letterSpacing: "2.5px", cursor: "pointer" }}
                  onClick={() =>
                    window.open("https://github.com/lhj12ps", "_blank")
                  }
                >
                  GITHUB
                </li>
                <li style={{ border: "none" }}>/</li>
                <li
                  style={{ letterSpacing: "2.5px", cursor: "pointer" }}
                  onClick={() =>
                    window.open("https://hancoco.tistory.com/", "_blank")
                  }
                >
                  BLOG
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Contact;
