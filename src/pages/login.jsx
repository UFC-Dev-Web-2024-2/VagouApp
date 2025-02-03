import React from "react"; // Importamos o React para criar o componente
import { Box, Card, TextField, Button, Typography, Link } from "@mui/material"; // Importamos os componentes do Material UI

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex", // Organiza os elementos em linha ou coluna
        justifyContent: "center", // Centraliza os elementos horizontalmente
        alignItems: "center", // Centraliza os elementos verticalmente
        height: "100vh", // Faz o fundo ocupar toda a tela
        backgroundColor: "#f4f6f8", // Define a cor do fundo
      }}
    >
      {/* Criamos um cartão branco no centro */}
      <Card sx={{ display: "flex", width: 900, height: 500 }}>
        {/* Parte da esquerda com imagem */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage:
              "url('https://source.unsplash.com/600x600/?technology')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Logo no meio da imagem */}
          <Typography variant="h1" sx={{ color: "white", fontWeight: "bold" }}>
            VA
          </Typography>
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
          <TextField fullWidth label="Senha" type="password" margin="normal" />

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
