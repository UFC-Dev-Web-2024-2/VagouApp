import React from "react";

const backgroundImage = "/assets/pessoaselogo.png";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-3/4 rounded overflow-hidden shadow-lg">
        <div className="w-1/2 h-full">
          <img
            src={backgroundImage}
            alt="Login Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 p-8 bg-white">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <p className="mb-6">Bem-vindo de volta!</p>
          <div className="mb-4">
            <label className="block text-gray-700">E-mail</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Senha</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <a href="#" className="block text-blue-600 mb-4">
            Esqueci a senha
          </a>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded mb-4"
          >
            Entrar
          </button>
          <p className="text-gray-700">
            Ainda não tem uma conta?{" "}
            <a href="#" className="text-blue-600">
              Criar conta
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
