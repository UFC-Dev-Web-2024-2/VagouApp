import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function ImovelItem({ tipo, preco, localizacao, imagem, estrelas }) {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
      <CardMedia component="img" height="140" image={imagem} alt={tipo} />
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          {[...Array(5)].map((_, i) =>
            i < estrelas ? <StarIcon key={i} sx={{ color: "#ffcc00" }} /> : <StarBorderIcon key={i} sx={{ color: "#ffcc00" }} />
          )}
        </Box>
        <Typography variant="h6">{tipo}</Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 1 }}>
          {preco}
        </Typography>
        <Typography color="text.secondary">{localizacao}</Typography>
      </CardContent>
    </Card>
  );
}

export default ImovelItem;
