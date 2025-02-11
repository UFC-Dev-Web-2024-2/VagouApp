import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Home from "./pages/Home";
import Login from "./pages/login";
import SobreNos from "./pages/sobreNos";
import Imoveis from "./pages/imoveis/Imoveis";
import "./index.css"; // Importar o Tailwind CSS

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/imoveis" element={<Imoveis />} />
          {/* Adicione outras rotas conforme necessário */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
