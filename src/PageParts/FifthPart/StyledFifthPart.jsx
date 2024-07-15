import styled from "styled-components";
import backgroundImage from "../../assets/mockup-MP3.jpg";

export const StyledFifthPart = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100vw;
  height: auto;
  background-color: #732735;

  gap: 1rem;
`;

export const StyledSubTitleConteiner = styled.div`
  @media (min-width: 600px) {
    height: 40vh;
  }
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100vw;
  height: 20vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: left;
  gap: 1rem;
`;

export const StyledSubTitle = styled.h2`
  font-family: "giarek";
  font-size: 1.7rem;
  text-align: center;
  color: #ffc9d3;
  z-index: 0;
  width: 85vw;
  margin-top: 2rem;
  margin-bottom: -1rem;
`;
