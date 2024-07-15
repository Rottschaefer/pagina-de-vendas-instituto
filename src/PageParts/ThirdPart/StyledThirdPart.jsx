import styled from "styled-components";

import backgroundImage from "../../assets/backgroundMentoria.png";

export const StyledThirdPart = styled.div`
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100vw;
  /* min-height: auto; */
  height: auto;
  background-image: url(${backgroundImage});
  z-index: -1;
  gap: 1rem;
  padding-bottom: 3rem;
`;
export const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #591527;
  opacity: 0.8;
  z-index: 0;
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
`;

export const StyledTeamPhoto = styled.img`
  width: 100vw;
  max-height: 350px;
  height: auto;
  object-fit: cover; /* Corta a imagem para preencher a área */
  z-index: 1;
`;

export const StyledDetailsConteiner = styled.div`
  background: linear-gradient(135deg, #f3b6b6, #fff);
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: 1rem 0rem;
`;

export const StyledSubTitle2 = styled.h2`
  font-family: "giarek";
  font-size: 1.7rem;
  text-align: center;
  color: #591527;
  z-index: 0;
  width: 85vw;
  margin: 0;
`;

export const StyledDescription = styled.p`
  font-family: "giarek";
  font-size: 1rem;
  text-align: center;
  color: #591527;
  z-index: 1;
  width: 85vw;
  margin: 0;
  margin-top: 1rem;
`;
