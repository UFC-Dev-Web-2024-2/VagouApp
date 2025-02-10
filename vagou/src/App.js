import React from "react";
import { Container, Typography } from "@mui/material";
import Header from "./components/Header";
import ImovelList from "./components/ImovelList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ padding: "20px 0" }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 3 }}>
          Imóveis
        </Typography>
        <ImovelList />
      </Container>
      <Footer />
    </>
  );
}

export default App;
