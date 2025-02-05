import React from "react"; // Importa a biblioteca React
import AppBar from "@mui/material/AppBar"; // Importa a AppBar (barra superior) do Material UI
import Toolbar from "@mui/material/Toolbar"; // Importa a Toolbar (área interna da AppBar)
import Typography from "@mui/material/Typography"; // Importa o componente Typography para exibir texto

// Componente do cabeçalho
const Header = () => {
  return (
    // Barra superior (AppBar) com cor de fundo azul
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      
      {/* Toolbar é usada para alinhar os elementos dentro da AppBar */}
      <Toolbar>
        
        {/* Texto centralizado com estilo personalizado */}
        <Typography
          variant="h6" // Define o tamanho padrão do texto
          sx={{
            flexGrow: 1, // Faz o texto ocupar todo o espaço disponível, permitindo centralização
            textAlign: "center", // Centraliza o texto horizontalmente
            fontSize: "1.5rem", // Define o tamanho da fonte
            fontWeight: "bold", // Deixa o texto em negrito
            color: "white", // Define a cor do texto como branco
            fontFamily: "Arial, sans-serif", // Define a fonte do texto
          }}
        >
          Vagou.App {/* Nome do aplicativo exibido no cabeçalho */}
        </Typography>

      </Toolbar>
    </AppBar>
  );
};

export default Header; // Exporta o componente Header para ser utilizado em outras partes do app
