import React from "react";
import { Link } from "react-router-dom";
import {
  Search as SearchIcon,
  Home as HomeIcon,
  Login as LoginIcon,
} from "@mui/icons-material";

function Header() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <HomeIcon sx={{ fontSize: 32 }} />
          <span className="text-xl font-bold">Vagou.App</span>
        </Link>
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar"
              className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
            />
            <SearchIcon className="absolute right-3 top-2.5 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/imoveis" className="hover:text-gray-200">
            Imoveis
          </Link>
          <Link to="/" className="hover:text-gray-200">
            Início
          </Link>
          <Link to="/sobre" className="hover:text-gray-200">
            Sobre nós
          </Link>
          <Link to="/contatos" className="hover:text-gray-200">
            Contatos
          </Link>
          <Link
            to="/login"
            className="bg-white text-blue-500 px-4 py-2 rounded-lg font-medium flex items-center space-x-2"
          >
            <LoginIcon sx={{ fontSize: 20 }} />
            <span>Entrar</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
