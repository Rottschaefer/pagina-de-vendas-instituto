import {
  StyledBoard,
  StyledConteiner,
  StyledDescription,
  StyledDoctor,
  StyledHospital,
  StyledMoney,
  StyledSecondPart,
  StyledSubTitle,
  StyledSvgConteiner,
  StyledTongue,
  StyledTooth,
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
    return (
      <StyledConteiner key={id}>
        <StyledSvgConteiner>{obj.svg}</StyledSvgConteiner>
        <StyledDescription>{obj.text}</StyledDescription>
      </StyledConteiner>
    );
  });
  return (
    <StyledSecondPart>
      <StyledSubTitle>A Mentoria Plena é para quem:</StyledSubTitle>
      {svgs}
    </StyledSecondPart>
  );
};
