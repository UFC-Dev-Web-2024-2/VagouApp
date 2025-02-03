import React from "react"; // Importamos o React
import Header from "./componentes/Header"; // Importamos o cabeçalho
import Login from "./pages/login"; // Importamos a tela de login

function App() {
  return (
    <div>
      <Header /> {/* Mostramos o cabeçalho */}
      <Login /> {/* Mostramos a tela de login */}
    </div>
  );
}

export default App;
