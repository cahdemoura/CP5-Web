import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Contato from "./pages/contato";
import Tema from "./pages/Tema";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/contato" element={<Contato/>} />
            <Route path="/tema" element={<Tema/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
