import { useEffect } from "react";
import GlobalStyle from "./GlobalStyle";
import { FifthPart } from "./PageParts/FifthPart/FifthPart";
import { FourthPart } from "./PageParts/FourthPart/FourthPart";
import { PageBegin } from "./PageParts/PageBegin/PageBegin";
import { PageEnd } from "./PageParts/PageEnd/PageEnd";
import { SecondPart } from "./PageParts/SecondPart/SecondPart";
import { ThirdPart } from "./PageParts/ThirdPart/ThirdPart";

function App() {
  return (
    <>
      <GlobalStyle />
      <PageBegin />
      <SecondPart />
      <ThirdPart />
      <FourthPart />
      {/* <FifthPart /> */}
      <PageEnd />
    </>
  );
}

export default App;
