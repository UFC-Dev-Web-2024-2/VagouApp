// Cadastro.jsx
import React from 'react';

const Cadastro = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-3/4 rounded-lg overflow-hidden shadow-lg">
        <div className="w-1/2 h-full">
          <img
            src="/assets/loginimage.png"
            alt="Cadastro Background"
            className="w-full h-full object-cover"
          />
        </div>


        <div className="w-1/2 p-8 bg-white">
          <h2 className="text-2xl font-bold mb-4">Cadastro Vagou</h2>
          <p className="mb-6">Crie sua conta para começar</p>

          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Nome</label>
              <input 
              type="text"
              className="w-full p-2 border border-gray-300 rounded-full mt-1"
              required></input>
            </div>

            <div className="mb-4">
              <lavel className="block text-gray-700">E-mail</lavel>
              <input type="email"
              className="w-full p-2 border border-gray-300 rounded-full mt-1"
              required>
              </input>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Senha</label>
              <input type="password" className="w-full p-2 border border-gray-300 rounded-full mt-1"
              required/>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700">Confirmação de senha</label>
              <input type="confirm_password" className="w-full p-2 border border-gray-300 rounded-full mt-1"
              required/>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Pais em que mora</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-full mt-1"
              required/>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Cidade em que mora</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-full mt-1"
              required/>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-full mb-4">
              Criar conta
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
