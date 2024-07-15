import {
  StyledDescription,
  StyledDescriptionSpecial,
  StyledFourthPart,
  StyledSubTitle,
} from "./StyledFourthPart";

export const FourthPart = () => {
  return (
    <StyledFourthPart>
      <StyledSubTitle>
        Você poderá optar pela prática online + presencial{" "}
      </StyledSubTitle>
      <StyledDescription>
        <StyledDescriptionSpecial>
          Serão 3 dias em Niterói RJ, você terá acesso ao passo a passo dos meus
          atendimentos
        </StyledDescriptionSpecial>
        , gestão das clínicas, prática no centro cirúrgico e na clínica com
        minha supervisão (opção sujeito a disponibilidade)
      </StyledDescription>
    </StyledFourthPart>
  );
};
