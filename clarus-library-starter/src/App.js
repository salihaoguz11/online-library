import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/Global.styles";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
