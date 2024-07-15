import {
  StyledLogo,
  StyledPageBegin,
  StyledSubTitle,
  StyledSubTitleSpecial,
  StyledUnderline,
} from "./StyledPageBegin";
import logo from "../../assets/MP - logo principal - branco.png";

export const PageBegin = () => {
  return (
    <StyledPageBegin>
      <StyledLogo src={logo} />
      <StyledSubTitle>
        Conquiste{" "}
        <StyledSubTitleSpecial>
          {" "}
          <StyledUnderline />
          segurança
        </StyledSubTitleSpecial>{" "}
        no diagnóstico, procedimentos cirúrgicos e tratamento das alterações dos
        freios orais
      </StyledSubTitle>
    </StyledPageBegin>
  );
};
