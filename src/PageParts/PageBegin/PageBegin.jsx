import {
  StyledButton,
  StyledErrorMessage,
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
import { useEffect, useState } from "react";
import { doc } from "../../GoogleAuth";
import { Loading } from "../../Components/Loading/Loading";

export const PageBegin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [canRedirect, setCanRedirect] = useState(false);

  async function addToGoogleSheets() {
    try {
      await doc.loadInfo();

      const sheet = doc.sheetsByIndex[0];
      await sheet.addRow({
        Nome: formData.name,
        Email: formData.email,
        Telefone: formData.phone,
      });
    } catch (error) {
      console.error("Erro ao testar a conexão com o Google Sheets:", error);
      console.log(error.message);
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
    const fullNameRegex = /^[a-zA-Zà-úÀ-Ú\s]{2,}(?: [a-zA-Zà-úÀ-Ú\s]+){1,}$/;

    try {
      if (!formData.name || !fullNameRegex.test(formData.name)) {
        throw new Error("Por favor, coloque seu nome completo");
      }

      if (!formData.email || !emailRegex.test(formData.email)) {
        throw new Error("Por favor, coloque um email válido");
      }

      if (!formData.phone || !phoneRegex.test(formData.phone)) {
        throw new Error("Por favor, coloque um telefone válido com DDD");
      }
      setLoading(true);
      setErrorMessage("");
      await addToGoogleSheets();

      window.location.href =
        "https://docs.google.com/forms/d/e/1FAIpQLSeo6KtDJyGmC4i5zE70hnVk6ULklw142QLVa4Wz983DJO-Frw/viewform";
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message);
    }
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
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          <StyledInput
            placeholder="Seu melhor Email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          <StyledInput
            placeholder="WhatsApp com DDD"
            type="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        {errorMessage && (
          <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
        )}
        <StyledButton onClick={(e) => handleSubmit(e)}>
          {!loading && "Preencher aplicação"}
          {loading && <Loading />}
        </StyledButton>
      </StyledForm>
    </StyledPageBegin>
  );
};
