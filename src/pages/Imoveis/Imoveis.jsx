import React from "react";
import { Container, Typography, Box } from "@mui/material";
import ImovelList from "./ImovelList";
import Divulgacao from "./Divulgacao";

function Imoveis() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Imóveis Disponíveis
        </Typography>
        <ImovelList />
        <Box sx={{ my: 4 }}>
          <Divulgacao />
        </Box>
      </Box>
    </Container>
  );
}

export default Imoveis;
