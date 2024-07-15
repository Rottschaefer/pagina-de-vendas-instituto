import { ProductSlide } from "../../Components/ProductSlide/ProductSlide";
import {
  StyledFifthPart,
  StyledSubTitle,
  StyledSubTitleConteiner,
} from "./StyledFifthPart";

import first from "../../assets/1_roll.png";
import second from "../../assets/2_roll.png";
import third from "../../assets/3_roll.png";
import fourth from "../../assets/4_roll.png";

export const FifthPart = () => {
  const slides = [
    {
      img: first,
    },
    {
      img: second,
    },
    {
      img: third,
    },
    {
      img: fourth,
    },
  ];
  return (
    <StyledFifthPart>
      <StyledSubTitleConteiner />
      <StyledSubTitle>
        Bônus Restritos para novos membros aceitos no Programa de Mentoria:
      </StyledSubTitle>
      <ProductSlide slides={slides} />
    </StyledFifthPart>
  );
};
