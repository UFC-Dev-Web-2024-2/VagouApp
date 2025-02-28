import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/login";
import Cadastro from "./pages/Cadastro"; // Certifique-se de que o caminho esteja correto
import SobreNos from "./pages/sobreNos";
import Imoveis from "./pages/Imoveis";
import Contatos from "./pages/Contato";
import "./index.css"; // Importar o Tailwind CSS

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/imoveis" element={<Imoveis />} />
          <Route path="/contatos" element={<Contatos />} />
          {/* Adicione outras rotas conforme necessário */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
