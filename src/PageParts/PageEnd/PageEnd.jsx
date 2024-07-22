import {
  RigthsDiv,
  StyledButton,
  StyledDescription,
  StyledFrontPhoto,
  StyledPageEnd,
  StyledRigths,
  StyledTitle,
} from "./StyledPageEnd";
import frontPhoto from "../../assets/front_photo.jpg";

export const PageEnd = () => {
  return (
    <StyledPageEnd>
      <StyledFrontPhoto src={frontPhoto} />
      <StyledTitle>Sua Mentora</StyledTitle>
      <StyledDescription>
        Meu nome é Irma Rottschaefer, sou odontopediatra há mais de 30 anos,
        empresária, mentora de odontopediatras e professora de freios orais,
        temos mais de 1000 alunas no Brasil e em mais de 13 países. Sou mãe da
        Clara, Eduardo e esposa do Cássio Tadeu. Especialista em cirurgia em
        odontopediatria, habilitada em laserterapia e mestranda em
        odontopediatria. Meu propósito é conduzir cada dia mais profissionais a
        se tornarem capacitados para potencializar seus atendimentos e negócios,
        além de proporcionar uma melhor qualidade de vida aos seus pacientes.
      </StyledDescription>
      <StyledButton>Quero preencher minha aplicação</StyledButton>
      <RigthsDiv>
        <StyledRigths>
          © Todos os direitos reservados | Irma Rottschaefer - 2024{" "}
        </StyledRigths>
      </RigthsDiv>
    </StyledPageEnd>
  );
};
