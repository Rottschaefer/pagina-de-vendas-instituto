import styled from "styled-components";

export const StyledPageEnd = styled.div`
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100vw;
  height: auto;
  background: linear-gradient(35deg, #fcdada, #fff);

  gap: 1rem;
`;

export const StyledFrontPhoto = styled.img`
  @media (min-width: 900px) {
    width: 40vw;
    height: 70vh;
  }
  width: 75vw;
  height: 40vh;
  object-fit: cover;
  object-position: 0% 23%;
  border-radius: 10px;
  margin-top: 2.5rem;
  box-shadow: 2px 3px 8px 1px #591527;
`;

export const StyledTitle = styled.h2`
  font-family: "giarek";
  font-size: 1.7rem;
  text-align: center;
  color: #591527;
  width: 85vw;
  margin: 0;
`;

export const StyledDescription = styled.p`
  font-family: "giarek";
  font-size: 1.1rem;
  text-align: center;
  color: #591527;
  width: 85vw;
  margin: 0;
`;

export const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #591527, #732735);
  border-radius: 10px;
  border-color: #ffbdbd;
  border-style: solid;
  border-width: 3px;
  font-family: "giarek";
  font-size: 1.3rem;
  font-weight: 800;
  color: #f3b6b6;
  height: 9vh;
  width: 80vw;
  max-width: 400px;
  margin-top: 10px;
  margin-bottom: 2rem;

  cursor: pointer;
`;

export const RigthsDiv = styled.div`
  width: 100vw;
  height: 5vh;
  background-color: #591527;
  padding: 30px;
  display: flex;
  align-items: center;
`;

export const StyledRigths = styled.h2`
  font-size: 0.8rem;
  text-align: center;
  color: #f3b6b6;
  width: 100%;
  margin: 0px;
  text-align: center;
`;
