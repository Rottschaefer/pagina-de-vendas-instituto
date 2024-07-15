import styled, { keyframes } from "styled-components";

export const StyledPageBegin = styled.div`
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100vw;
  min-height: auto;
  height: 100vh;
  padding-bottom: 3rem;
  background-color: #591527;
  z-index: -1;
`;

export const StyledLogo = styled.img`
  width: 55vw;
  margin-bottom: -15vw;
  margin-top: -10vw;
`;

export const StyledPerfil = styled.img`
  @media (min-width: 1000px) {
    height: 100vw;
    top: 500px;
  }
  position: absolute;

  top: 400px;
  left: -60px;
  transform: translate(-50%, -50%);
  height: 100vh;
  margin-bottom: -60px;
  margin-top: -15px;
  z-index: 0;
  opacity: 0.4;
`;

export const StyledSubTitle = styled.h1`
  font-family: "giarek";
  font-size: 2rem;
  text-align: center;
  color: #bfaaae;
  z-index: 1;
  width: 85vw;
`;

export const StyledSubTitleSpecial = styled.span`
  position: relative;
  font-family: "giarek";
  font-size: 2rem;
  text-align: center;
  /* text-decoration: underline; */
  color: white;
  margin: 0;
  z-index: 0;
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
  top: 93%;
  left: 0px;
  height: 2px;
  background-color: #bfaaae;
  animation: ${underlineAnimation} 1s ease-in-out 0.5s forwards;
  z-index: -1;
`;

export const StyledForm = styled.form`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 0;
`;

export const StyledInput = styled.input`
  font-family: "giarek";
  font-weight: 800;
  font-size: 1.2rem;
  height: 2vh;
  width: 76vw;
  max-width: 400px;
  border-radius: 10px;
  border: none;
  padding: 2vh;
  border-color: #bfaaae;
  border-width: 2px;
  border-style: solid;
`;

export const StyledButton = styled.button`
  background: linear-gradient(135deg, #f3b6b6, #fff);
  border-radius: 10px;
  border-color: #591527;
  border-style: solid;
  border-width: 5px;
  font-family: "giarek";
  font-size: 1.3rem;
  font-weight: 800;
  color: #591527;
  height: 9vh;
  width: 80vw;
  max-width: 400px;
  margin-top: 10px;
`;
