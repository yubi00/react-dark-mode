import { GlobalStyle, Title, Wrapper } from "./theme/globalStyle";
import { ThemeProvider } from "styled-components";
import { Themes } from "./theme/themes";
import { useState } from "react";
import Toggle from "./components/Toggle";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? Themes.light : Themes.dark}>
      <GlobalStyle />
      <Wrapper>
        <Title>I am Awesome</Title>
        <Toggle theme={theme} setTheme={setTheme} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
