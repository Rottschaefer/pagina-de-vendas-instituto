import GlobalStyle from "./GlobalStyle";
import { PageBegin } from "./PageParts/PageBegin/PageBegin";
import { SecondPart } from "./PageParts/SecondPart/SecondPart";
import { ThirdPart } from "./PageParts/ThirdPart/ThirdPart";

function App() {
  return (
    <>
      <GlobalStyle />
      <PageBegin />
      <SecondPart />
      <ThirdPart />
    </>
  );
}

export default App;
