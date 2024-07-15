import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

export const StyledCarousel = styled.div`
  @media (max-width: 600px) {
    max-width: 400px;
    max-height: 80vh;
  }
  position: relative;
  min-height: 50vh;
  height: 110vh;
  object-fit: cover;
  width: 100vw;
  max-width: 600px;
  max-height: 1000px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledCarousel2 = styled.div`
  min-height: 50vh;
  height: 80%;
  object-fit: cover;
  width: 100vw;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledImgs = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;

export const StyledCarouselTrackContainer = styled.div`
  width: 80vw;
  height: 100%;
  /* position: relative; */
  overflow: hidden;
  border-radius: 10px;
`;

export const StyledCarouselTrack = styled.ul`
  display: block;
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
  width: 10vw;
  height: auto;
  transform: rotate(180deg);
  border: none;
  /* position: absolute; */
  z-index: 2;
  top: 50%;
  translate: 0 -50%;
  /* left: -2.5rem; */
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    scale: 1.2;
  }
`;

export const StyledRightButton = styled(IoIosArrowForward)`
  color: white;

  width: 10vw;
  height: auto;
  border: none;
  /* position: absolute; */
  z-index: 2;
  top: 50%;
  translate: 0 -50%;
  /* right: -2.5rem; */
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    scale: 1.2;
  }
`;

export const StyledCarouselNav = styled.div`
  height: auto;
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
