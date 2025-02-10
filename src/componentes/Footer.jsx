import React from "react";
import { Link } from "react-router-dom";
import { Home as HomeIcon } from "@mui/icons-material";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <HomeIcon sx={{ fontSize: 24 }} />
              <span className="text-lg font-bold">Vagou.App</span>
            </div>
            <p className="text-blue-200">Conecte-se, divida, viva!</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <Link to="/" className="hover:text-white">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/imoveis" className="hover:text-white">
                  Imóveis
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-white">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link to="/contatos" className="hover:text-white">
                  Contatos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-blue-200">
              <li>contato@vagou.app</li>
              <li>(00) 0000-0000</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">
                Instagram
              </a>
              <a href="#" className="hover:text-blue-300">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-300">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2024 Vagou.App. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
