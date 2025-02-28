import React, { useState } from "react";
import { Link } from "react-router-dom";

// Caminho da imagem de fundo
const backgroundImage = "/assets/loginimage.png";

// Componente de Login
const Login = () => {
  // Estados para armazenar email, senha e erro
  const [email, setEmail] = useState(""); // Armazena o email inserido
  const [password, setPassword] = useState(""); // Armazena a senha inserida
  const [error, setError] = useState(""); // Armazena mensagens de erro

  // Função chamada ao enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o recarregamento da página

    try {
      // Fazendo requisição para a API de login
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST", // Método da requisição
        headers: {
          "Content-Type": "application/json", // Especifica o tipo de conteúdo
        },
        body: JSON.stringify({
          email: email, // Passando os valores inseridos pelo usuário
          password: password,
        }),
      });

      const data = await response.json(); // Convertendo resposta para JSON

      // Se a API retornar um token, o login foi bem-sucedido
      if (data.token) {
        alert("Login bem-sucedido!");
      } else {
        setError("Credenciais inválidas"); // Se não, exibe mensagem de erro
      }
    } catch (error) {
      setError("Erro ao fazer login. Tente novamente."); // Captura erro na requisição
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-3/4 rounded overflow-hidden shadow-lg">
        {/* Imagem do lado esquerdo */}
        <div className="w-1/2 h-full">
          <img
            src={backgroundImage}
            alt="Login Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Formulário de login */}
        <div className="w-1/2 p-8 bg-white">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <p className="mb-6">Bem-vindo de volta!</p>

          <form onSubmit={handleSubmit}>
            {/* Campo de email */}
            <div className="mb-4">
              <label className="block text-gray-700">E-mail</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Campo de senha */}
            <div className="mb-4">
              <label className="block text-gray-700">Senha</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Link para recuperação de senha */}
            <a href="#" className="block text-blue-600 mb-4">
              Esqueci a senha
            </a>

            {/* Botão de login */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded mb-4"
            >
              Entrar
            </button>
          </form>

          {/* Exibição de erro caso ocorra */}
          {error && <p className="text-red-600">{error}</p>}

          {/* Link para criar conta */}
          <p className="text-gray-700">
            Ainda não tem uma conta?{" "}
            <Link to="/cadastro" className="text-blue-600">
              Criar conta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
