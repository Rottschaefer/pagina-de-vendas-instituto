import styled, { keyframes } from "styled-components";

export const StyledPageBegin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #591527;
`;

export const StyledLogo = styled.img`
  width: 55vw;
  margin-bottom: -60px;
  margin-top: -10px;
`;

export const StyledSubTitle = styled.h1`
  font-family: "giarek";
  font-size: 2rem;
  text-align: center;
  color: #bfaaae;
`;

export const StyledSubTitleSpecial = styled.span`
  position: relative;

  font-family: "giarek";
  font-size: 2rem;
  text-align: center;
  /* text-decoration: underline; */
  color: #bfaaae;
  margin: 0;
`;

const underlineAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const StyledUnderline = styled.div`
  position: absolute;
  top: 32px;
  left: 0px;
  height: 2px;
  background-color: #bfaaae;
  animation: ${underlineAnimation} 1s ease-in-out 0.5s forwards;
`;
