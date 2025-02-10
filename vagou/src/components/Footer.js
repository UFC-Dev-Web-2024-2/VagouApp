import React from "react";
import { Box, Typography, Grid2 } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#0073e6", color: "#fff", mt: 5, p: 3 }}>
      <Grid2 container spacing={3}>
        <Grid2 item xs={12} sm={3}>
          <Typography variant="h6">Redes sociais</Typography>
          <Typography>@vagou.app</Typography>
          <Typography>youtube.com/vagou</Typography>
          <Typography>linkedin.com/vagouapp</Typography>
        </Grid2>
        <Grid2 item xs={12} sm={3}>
          <Typography variant="h6">Conheça</Typography>
          <Typography>História do Vagou</Typography>
          <Typography>Missão</Typography>
          <Typography>Princípios</Typography>
        </Grid2>
        <Grid2 item xs={12} sm={3}>
          <Typography variant="h6">Dúvidas</Typography>
          <Typography>Consórcios</Typography>
          <Typography>Relações</Typography>
        </Grid2>
        <Grid2 item xs={12} sm={3}>
          <Typography variant="h6">FAQ</Typography>
          <Typography>Fale com um representante</Typography>
          <Typography>Sugestões</Typography>
        </Grid2>
      </Grid2>
      <Typography align="center" sx={{ mt: 3 }}>
        @vagou.app
      </Typography>
    </Box>
  );
}

export default Footer;
