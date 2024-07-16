import { useEffect } from "react";
import GlobalStyle from "./GlobalStyle";
import { FifthPart } from "./PageParts/FifthPart/FifthPart";
import { FourthPart } from "./PageParts/FourthPart/FourthPart";
import { PageBegin } from "./PageParts/PageBegin/PageBegin";
import { PageEnd } from "./PageParts/PageEnd/PageEnd";
import { SecondPart } from "./PageParts/SecondPart/SecondPart";
import { ThirdPart } from "./PageParts/ThirdPart/ThirdPart";
import { doc } from "./GoogleAuth";

function App() {
  async function testConnection() {
    try {
      await doc.loadInfo(); // Carregar informações básicas do documento

      console.log(`Título da planilha: ${doc.title}`);
      console.log(`Número de guias: ${doc.sheetCount}`);

      // Exemplo de leitura de dados de uma planilha
      const sheet = doc.sheetsByIndex[0];
      const rows = await sheet.getRows();
      console.log(rows);
    } catch (error) {
      console.error("Erro ao testar a conexão com o Google Sheets:", error);
    }
  }

  useEffect(() => {
    testConnection();
  }, []);
  return (
    <>
      <GlobalStyle />
      <PageBegin />
      <SecondPart />
      <ThirdPart />
      <FourthPart />
      <FifthPart />
      <PageEnd />
    </>
  );
}

export default App;
