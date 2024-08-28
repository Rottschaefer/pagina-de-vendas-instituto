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
import { useState } from "react";
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

  async function addToGoogleSheets() {
    try {
      await doc.loadInfo(); // Carregar informações básicas do documento

      const date = new Date();

      const sheet = doc.sheetsByIndex[0];
      await sheet.addRow({
        Nome: formData.name,
        Email: formData.email,
        Telefone: formData.phone,
        data: `${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
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

    try {
      if (!formData.name) {
        throw new Error("Por favor, coloque seu nome completo");
      }

      if (!formData.email || !emailRegex.test(formData.email)) {
        throw new Error("Por favor, coloque um email válido");
      }

      if (!formData.phone) {
        throw new Error("Por favor, coloque um telefone válido com DDD");
      }
      setLoading(true);
      setErrorMessage("");
      localStorage.setItem(
        "irma-mentoria",
        JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        })
      );
      await addToGoogleSheets();
      window.location.href = "https://drairmarottschaefer.com.br/aplicacao/";
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message);
    }
  };
  return (
    <StyledPageBegin id="top">
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
            placeholder="Seu melhor e-mail"
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
