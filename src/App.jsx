import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/sobre";
import Contato from "./pages/contato";
import Tema from "./pages/Tema";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Button, PageColor, darkTheme, lightTheme } from "./Estilos/estilo";
import { GlobalStyle } from './Estilos/estilo.jsx'
import Menu from "./components/Menu";


function App() {
  const [theme, setTheme] = useState('light')
  const mudarTheme = () => {
    setTheme(mudar => mudar === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <PageColor>
          <Menu theme={mudarTheme}></Menu>
          <BrowserRouter>
            <Routes>
              <Route>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/tema" element={<Tema />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PageColor>
      </ThemeProvider>
    </>
  );
}

export default App;
