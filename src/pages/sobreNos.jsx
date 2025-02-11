import React from "react";
import { Container, Typography, Box } from "@mui/material";

const SobreNos = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Sobre nós
        </Typography>
        <Typography variant="body1" paragraph>
          A Vagou.app é uma plataforma criada especialmente para ajudar
          universitários a encontrar a moradia ideal de forma prática, segura e
          descomplicada. Voltada tanto para estudantes quanto para
          proprietários, o Vagou oferece uma experiência completa: desde a busca
          por apartamentos ou quartos até o fechamento do contrato digital. Com
          funcionalidades como pagamentos pelo app, chat integrado, avaliações
          de imóveis e prevenção contra golpes, o Vagou facilita o dia a dia de
          quem está em busca de um novo lar. Além disso, proporciona informações
          úteis e ferramentas que ajudam a tomar a melhor decisão na hora de
          alugar um imóvel.
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          História
        </Typography>
        <Typography variant="body1" paragraph>
          A ideia de criar a Vagou surgiu em 2020, quando os fundadores
          perceberam a necessidade de uma plataforma que facilitasse a vida dos
          universitários na busca por moradia. Desde então, a empresa tem
          crescido e se destacado no mercado, sempre com o objetivo de oferecer
          a melhor experiência possível para seus usuários. Em 2022, a Vagou foi
          reconhecida como uma das startups mais inovadoras do Brasil, recebendo
          diversos prêmios e menções honrosas.
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          Prêmios
        </Typography>
        <Typography variant="body1" paragraph>
          Em 2023 fomos selecionados na trilha de inovação, bora criar, dos
          corretores digitais onde ficamos entre os 10 melhores startups de
          inovação do Brasil ganhando nosso primeiro prêmio de destaque. Em
          2024, criamos o nosso primeiro evento de inovação onde reunimos as
          melhores startups de todos os estados do Brasil e ficamos entre as 10
          melhores startups de inovação do Brasil ganhando nosso segundo prêmio
          de destaque entre os corretores digitais.
        </Typography>
      </Box>
    </Container>
  );
};

export default SobreNos;
