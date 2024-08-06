import styled from "styled-components";
import { LiaToothSolid } from "react-icons/lia";
import { FaUserDoctor } from "react-icons/fa6";
import { BsClipboardHeart } from "react-icons/bs";
import { GiTongue } from "react-icons/gi";
import { RiHospitalLine } from "react-icons/ri";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const svgColor = "#fce5e5";

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
  background: linear-gradient(135deg, #f3b6b6, #fff);
`;

export const StyledSubTitle = styled.h1`
  font-family: "giarek";
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
  color: #591527;
  z-index: 1;
  margin: 3rem 2rem;
`;

export const StyledTooth = styled(LiaToothSolid)`
  color: ${svgColor};
  height: 30vw;
  max-width: 150px;

  width: auto;
`;

export const StyledDoctor = styled(FaUserDoctor)`
  color: ${svgColor};
  height: 23vw;
  max-width: 100px;

  width: auto;
`;

export const StyledBoard = styled(BsClipboardHeart)`
  color: ${svgColor};
  max-width: 100px;

  height: 23vw;
  width: auto;
`;

export const StyledTongue = styled(GiTongue)`
  color: ${svgColor};
  max-width: 100px;

  height: 23vw;
  width: auto;
`;

export const StyledHospital = styled(RiHospitalLine)`
  color: ${svgColor};
  max-width: 100px;

  height: 23vw;
  width: auto;
`;

export const StyledMoney = styled(FaMoneyBillTrendUp)`
  color: ${svgColor};
  max-width: 100px;

  height: 23vw;
  width: auto;
`;

export const StyledDescription = styled.li`
  font-family: "giarek";
  font-size: 1.7rem;
  text-align: left;
  color: #591527;
  z-index: 1;
  width: 85vw;
`;

export const StyledUlConteiner = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  gap: 2rem;
`;
