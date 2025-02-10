import React from "react";
import { Grid } from "@mui/material";
import ImovelItem from "./ImovelItem";

// Importando as imagens manualmente
import casa1 from "../assets/image1.png";
import chale from "../assets/image2.png";
import kitnet from "../assets/image3.png";
import casa2 from "../assets/image4.png";
import casa3 from "../assets/image5.png";
import casa4 from "../assets/image6.png";
import casa5 from "../assets/image7.png";
import casa6 from "../assets/image8.png";

const imoveis = [
  { tipo: "Casa universitária", preco: "R$ 800,00", localizacao: "Centro", imagem: casa1, estrelas: 4 },
  { tipo: "Chalé", preco: "R$ 1000,00", localizacao: "Cedro", imagem: chale, estrelas: 5 },
  { tipo: "Kitnet", preco: "R$ 900,00", localizacao: "UECE", imagem: kitnet, estrelas: 4 },
  { tipo: "Casa", preco: "R$ 1200,00", localizacao: "Igreja", imagem: casa2, estrelas: 5 },
  { tipo: "Casa universitaria (Quarto)", preco: "R$ 1000,00", localizacao: "Cedro", imagem: casa3, estrelas: 3 },
  { tipo: "Casa", preco: "R$ 900,00", localizacao: "UECE", imagem: casa4, estrelas: 4 },
  { tipo: "Casa universitaria (Feminina)", preco: "R$ 1200,00", localizacao: "Cedro", imagem: casa5, estrelas: 5 },
  { tipo: "Condominio", preco: "R$ 1200,00", localizacao: "Igreja", imagem: casa6, estrelas: 5 },
];

function ImovelList() {
  return (
    <Grid container spacing={3}>
      {imoveis.map((imovel, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ImovelItem {...imovel} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ImovelList;
