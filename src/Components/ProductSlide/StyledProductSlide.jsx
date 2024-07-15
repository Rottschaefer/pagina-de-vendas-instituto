import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

export const StyledCarousel = styled.div`
  position: relative;
  height: 45vh;
  object-fit: cover;
  width: 80vw;
  z-index: 3;
`;

export const StyledImgs = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;

export const StyledCarouselTrackContainer = styled.div`
  height: 100%;
  /* position: relative; */
  overflow: hidden;
  border-radius: 10px;
`;

export const StyledCarouselTrack = styled.ul`
  position: relative;
  height: 100%;
  transform: translateX(${(props) => props.amountToMove});
  transition: all 1s;
  border-radius: 10px;
`;

export const StyledCarouselSlides = styled.li`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  left: ${(props) => props.position};
`;

export const StyledLeftButton = styled(IoIosArrowForward)`
  color: white;
  width: 2.5rem;
  height: auto;
  transform: rotate(180deg);
  border: none;
  position: absolute;
  z-index: 2;
  top: 50%;
  translate: 0 -50%;
  left: -2.5rem;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    scale: 1.2;
  }
`;

export const StyledRightButton = styled(IoIosArrowForward)`
  color: white;

  width: 2.5rem;
  height: auto;
  border: none;
  position: absolute;
  z-index: 2;
  top: 50%;
  translate: 0 -50%;
  right: -2.5rem;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    scale: 1.2;
  }
`;

export const StyledCarouselNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  position: absolute;
  left: 50%;
  top: 90%;
  transform: translateX(-50%);
  opacity: 0.7;
`;

export const StyledCarouselIndicator = styled.button`
  background-color: ${(props) => props.color};
  width: 0.5rem;
  height: 0.5rem;
  border: none;
  border-radius: 50%;
  transition: all 0.2s;

  :hover {
    background-color: black;
  }
`;
