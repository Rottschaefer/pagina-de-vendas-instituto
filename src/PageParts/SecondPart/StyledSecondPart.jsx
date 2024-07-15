import styled from "styled-components";
import { LiaToothSolid } from "react-icons/lia";
import { FaUserDoctor } from "react-icons/fa6";
import { BsClipboardHeart } from "react-icons/bs";
import { GiTongue } from "react-icons/gi";
import { RiHospitalLine } from "react-icons/ri";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

export const StyledSecondPart = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: auto;
  padding-bottom: 3rem;
  background-color: #bfaaae;
`;

export const StyledSubTitle = styled.h1`
  font-family: "giarek";
  font-size: 1.7rem;
  text-align: center;
  color: #591527;
  z-index: 1;
  /* width: 85vw; */
`;

export const StyledConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledSvgConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
  max-width: 200px;
  max-height: 200px;
  height: 40vw;
  background-color: #591527;
  border-radius: 100%;
`;

export const StyledTooth = styled(LiaToothSolid)`
  color: #bfaaae;
  height: 30vw;
  max-width: 150px;

  width: auto;
`;

export const StyledDoctor = styled(FaUserDoctor)`
  color: #bfaaae;
  height: 23vw;
  max-width: 100px;

  width: auto;
`;

export const StyledBoard = styled(BsClipboardHeart)`
  color: #bfaaae;
  max-width: 100px;

  height: 23vw;
  width: auto;
`;

export const StyledTongue = styled(GiTongue)`
  color: #bfaaae;
  max-width: 100px;

  height: 23vw;
  width: auto;
`;

export const StyledHospital = styled(RiHospitalLine)`
  color: #bfaaae;
  max-width: 100px;

  height: 23vw;
  width: auto;
`;

export const StyledMoney = styled(FaMoneyBillTrendUp)`
  color: #bfaaae;
  max-width: 100px;

  height: 23vw;
  width: auto;
`;

export const StyledDescription = styled.h2`
  font-family: "giarek";
  font-size: 1.7rem;
  text-align: center;
  color: #591527;
  z-index: 1;
  width: 85vw;
`;
