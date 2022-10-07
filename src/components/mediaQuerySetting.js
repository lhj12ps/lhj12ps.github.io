import { useMediaQuery } from "react-responsive";
import React from "react";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  return <React.Fragment>{isMobile && children}</React.Fragment>;
};

const PC = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:768px) ",
  });
  return <React.Fragment>{isPc && children}</React.Fragment>;
};

export { Mobile, PC };
