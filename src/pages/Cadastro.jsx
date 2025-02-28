// Cadastro.jsx
import React from 'react';

const Cadastro = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-3/4 rounded overflow-hidden shadow-lg">
        <div className="w-1/2 h-full">
          <img
            src="/assets/loginimage.png"
            alt="Cadastro Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 p-8 bg-white">
          <h2 className="text-2xl font-bold mb-4">Cadastro</h2>
          <p className="mb-6">Crie sua conta para começar</p>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
