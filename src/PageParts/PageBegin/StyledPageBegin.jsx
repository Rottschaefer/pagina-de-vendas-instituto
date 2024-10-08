import styled, { keyframes } from "styled-components";

export const StyledPageBegin = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100vw;
  min-height: auto;
  max-height: 140vh;
  padding-bottom: 3rem;
  background-color: #591527;
  z-index: 0;
`;

export const StyledLogo = styled.img`
  width: 55vw;
  margin-bottom: -15vw;
  margin-top: -10vw;
`;

const photoAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.4;
  }
`;

export const StyledPerfil = styled.img`
  @media (min-width: 1000px) {
    height: 100vw;
    top: 400px;
  }
  position: absolute;

  top: 152px;
  left: -60px;
  transform: translate(-50%, -50%);
  height: 100vh;
  margin-bottom: -60px;
  margin-top: -15px;
  z-index: 0;
  opacity: 0;

  animation: ${photoAnimation} 2s ease-in-out 1s forwards;
`;

export const StyledSubTitle = styled.h1`
  font-family: "giarek";
  font-size: 1.7rem;
  text-align: center;
  color: #bfaaae;
  z-index: 1;
  width: 85vw;
`;

export const StyledSubTitleSpecial = styled.span`
  position: relative;
  font-family: "giarek";
  font-size: 1.8rem;
  text-align: center;
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
  gap: 8px;
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

  cursor: pointer;
`;

const errorAnimation = keyframes`
 from {
    height: 0;
    opacity: 0;
  }
  to {
    height: 20px;
    opacity: 1;
  }
`;

export const StyledErrorMessage = styled.h3`
  font-family: "giarek";
  font-size: 1rem;
  text-align: center;
  color: #bfaaae;
  width: 85vw;
  height: auto;
  margin: 0;
  animation: ${errorAnimation} 1s ease-in-out forwards;

  /* width: auto; */

  /* transition: all 1s; */
`;
