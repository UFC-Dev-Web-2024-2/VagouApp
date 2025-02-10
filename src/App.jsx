import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Home from "./pages/Home";
import Login from "./pages/login";
import "./index.css"; // Importar o Tailwind CSS

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Adicione outras rotas conforme necessário */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
