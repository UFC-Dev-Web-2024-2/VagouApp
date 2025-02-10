import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box, Button, CssBaseline, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";


// Importando imagens
import logo from "../assets/logo.png";
import profileImg from "../assets/profile.png"; // Foto do perfil

function Header() {
  return (
    <>
      {/* Resetando o estilo global para evitar margens do body */}
      <CssBaseline />  

      <AppBar position="static" sx={{ backgroundColor: "#003366", padding: "4px 0", boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
          
          {/* Logo + Nome do App */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <img src={logo} alt="Vagou.App Logo" style={{ height: 35 }} />
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
              Vagou.App
            </Typography>
          </Box>

          {/* Barra de pesquisa + Navbars */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
.
            {/* Barra de pesquisa */}
            <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#fff", borderRadius: 8, padding: "5px 10px" }}>
              <SearchIcon sx={{ color: "#003366" }} />
              <InputBase placeholder="Pesquisar" sx={{ ml: 1, width: 250 }} />
            </Box>

            {/* Botões de Navegação */}
            <Button startIcon={<HomeIcon />} sx={{ color: "#fff", textTransform: "none" }}>
              Imóveis
            </Button>
            <Button startIcon={<FavoriteBorderIcon />} sx={{ color: "#fff", textTransform: "none" }}>
              Favoritos
            </Button>
          </Box>

          {/* Botão de perfil com imagem */}
          <IconButton sx={{ p: 0, borderRadius: "50%", overflow: "hidden", width: 40, height: 40 }}>
            <img src={profileImg} alt="Perfil" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </IconButton>

        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
