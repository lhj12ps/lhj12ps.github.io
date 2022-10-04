import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }

  /* 프로젝트 내 body 태그 안에 공통적으로 적용 */
  body {
      font-family: Helvetica Neue, sans-serif, 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif,'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif, stataionName;
  }

  @font-face {
  font-family: "stationName";
  src: url("./font/JalnanOTF.ttf");
  } 
`;

export default GlobalStyles;
