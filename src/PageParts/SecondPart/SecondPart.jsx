import {
  StyledBoard,
  StyledDescription,
  StyledDoctor,
  StyledHospital,
  StyledMoney,
  StyledSecondPart,
  StyledSubTitle,
  StyledTongue,
  StyledTooth,
  StyledUlConteiner,
} from "./StyledSecondPart";

export const SecondPart = () => {
  const svgObjects = [
    { svg: <StyledTooth />, text: "É odontopediatra" },
    {
      svg: <StyledHospital />,
      text: "Quer desenvolver prática cirúrgica (frenectomia e frenotomia)",
    },
    {
      svg: <StyledBoard />,
      text: "Quer dominar o tratamento dos freios alterados",
    },
    {
      svg: <StyledTongue />,
      text: "Quer ter segurança no diagnóstico dos freios orais",
    },
    { svg: <StyledDoctor />, text: "Quer ser referência em sua região" },
    { svg: <StyledMoney />, text: "Quer aumentar seu faturamento" },
  ];

  const svgs = svgObjects.map((obj, id) => {
    return <StyledDescription key={id}>{obj.text}</StyledDescription>;
  });

  return (
    <StyledSecondPart>
      <StyledSubTitle>A Mentoria Plena é para quem:</StyledSubTitle>
      <StyledUlConteiner>{svgs}</StyledUlConteiner>
    </StyledSecondPart>
  );
};
