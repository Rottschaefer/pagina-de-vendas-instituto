import styled from "styled-components";

export const StyledFourthPart = styled.div`
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100vw;
  height: auto;
  gap: 1rem;
  padding-bottom: 3rem;
  background-color: #591527;
`;

export const StyledSubTitle = styled.h2`
  font-family: "giarek";
  font-size: 1.7rem;
  text-align: center;
  color: #591527;
  z-index: 0;
  width: 85vw;
  background: linear-gradient(135deg, #f3b6b6, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  margin-top: 3rem;
  margin-bottom: 0;
`;

export const StyledDescription = styled.h3`
  font-family: "giarek";
  font-size: 1.2rem;
  text-align: center;
  color: #bfaaae;
  z-index: 1;
  width: 85vw;
`;

export const StyledDescriptionSpecial = styled.span`
  position: relative;
  font-family: "giarek";
  font-size: 1.4rem;
  text-align: center;
  color: white;
  margin: 0;
  z-index: 0;
`;
