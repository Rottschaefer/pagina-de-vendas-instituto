import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLogo,
  StyledPageBegin,
  StyledPerfil,
  StyledSubTitle,
  StyledSubTitleSpecial,
  StyledUnderline,
} from "./StyledPageBegin";
import logo from "../../assets/MP - logo principal - branco.png";
import perfil from "../../assets/perfil.png";
import { useState } from "react";

export const PageBegin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <StyledPageBegin>
      <StyledPerfil src={perfil} />
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
      <StyledForm>
        <label>
          <StyledInput
            placeholder="Nome Completo"
            type="text"
            name="name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          <StyledInput
            placeholder="Seu melhor Email"
            type="email"
            name="email"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          <StyledInput
            placeholder="WhatsApp com DDD"
            type="text"
            name="phone"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <StyledButton type="submit">Preencher Aplicação</StyledButton>
      </StyledForm>
    </StyledPageBegin>
  );
};
