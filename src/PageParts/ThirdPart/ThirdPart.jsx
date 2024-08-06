import {
  StyledBackground,
  StyledDescription,
  StyledDetailsConteiner,
  StyledSubTitle,
  StyledSubTitle2,
  StyledTeamPhoto,
  StyledThirdPart,
} from "./StyledThirdPart";

import teamPhoto from "../../assets/team_photo.jpg";

export const ThirdPart = () => {
  const mentoringDetails = [
    {
      title: "CONSULTORIA INDIVIDUAL",
      description:
        "Assim que entrar na Mentoria, você fará uma reunião on-line individual comigo, para criar um plano individualizado de acordo com seus objetivos",
    },
    {
      title: "ENCONTROS AO VIVO",
      description:
        "Teremos dois encontros em grupo por mês ao vivo pelo Zoom para feedbacks específicos, tira dúvidas, além das discussões de casos",
    },
    {
      title: "MÉTODO",
      description:
        "Acesso a todo meu método com aulas gravadas, para implementar diretamente em sua prática clínica",
    },
    {
      title: "ACOMPANHAMENTO",
      description:
        "Meu acompanhamento pessoal por 6 meses para todos os desafios de sua prática clínica",
    },
    {
      title: "PRÁTICA",
      description:
        "Acesso aos vídeos de exercícios de cirurgias e casos clínicos dos simples aos mais complexos",
    },
    {
      title: "COMUNIDADE",
      description:
        "Terá acesso ao grupo para interação com os alunos, troca de experiências e tirar dúvidas",
    },
  ];

  const Details = mentoringDetails.map((obj, id) => {
    return (
      <StyledDetailsConteiner key={id}>
        <StyledSubTitle2>{obj.title}</StyledSubTitle2>
        <StyledDescription>{obj.description}</StyledDescription>
      </StyledDetailsConteiner>
    );
  });

  return (
    <StyledThirdPart>
      <StyledBackground />

      <StyledSubTitle>Como funciona a Mentoria?</StyledSubTitle>
      <StyledTeamPhoto src={teamPhoto} />
      {Details}
    </StyledThirdPart>
  );
};
