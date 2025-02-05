import React from "react";
import { Box, Card, TextField, Button, Typography, Link } from "@mui/material";
const backgroundImage = "/pessoaselogo.png";
 // Importe a imagem corretamente

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f6f8",
      }}
    >
      {/* Card centralizado */}
      <Card sx={{ display: "flex", width: 900, height: 500, borderRadius: 3, overflow: "hidden" }}>
        
        {/* Parte da esquerda com imagem e sobreposição */}

        <Box sx={{ width: "50%", height: "100%" }}>
  <img src={backgroundImage} alt="Login Background" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
</Box>

        <Box
          sx={{
            width: "50%",
            position: "relative",
            backgroundImage: `url(${backgroundImage})`, // Agora a imagem é carregada corretamente
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Sobreposição escura */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Efeito escuro sobre a imagem
            }}
          />
        </Box>

        {/* Parte da direita com formulário de login */}
        <Box sx={{ width: "50%", padding: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Login
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            Bem-vindo de volta!
          </Typography>

          {/* Campo de E-mail */}
          <TextField fullWidth label="E-mail" margin="normal" />

          {/* Campo de Senha */}
          <TextField
            fullWidth
            label="Senha"
            type="password"
            margin="normal"
            sx={{ borderRadius: 4 }}
          />

          {/* Link para recuperar senha */}
          <Link
            href="#"
            variant="body2"
            sx={{ display: "block", marginBottom: 2 }}
          >
            Esqueci a senha
          </Link>

          {/* Botão de Entrar */}
          <Button
            fullWidth
            variant="contained"
            sx={{ marginBottom: 2, borderRadius: 4 }}
          >
            Entrar
          </Button>

          {/* Link para criar conta */}
          <Typography variant="body2">
            Ainda não tem uma conta? <Link href="#">Criar conta</Link>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Login;
