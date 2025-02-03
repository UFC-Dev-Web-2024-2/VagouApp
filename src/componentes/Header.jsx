import React from "react"; // Importamos o React
import AppBar from "@mui/material/AppBar"; // A barra azul no topo
import Toolbar from "@mui/material/Toolbar"; // A área dentro da barra azul
import IconButton from "@mui/material/IconButton"; // Botão de voltar
import Typography from "@mui/material/Typography"; // Texto
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Ícone de seta para voltar

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        {/* Botão de voltar */}
        <IconButton edge="start" color="inherit" aria-label="voltar">
          <ArrowBackIcon />
        </IconButton>

        {/* Nome do app */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Vagou.App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
