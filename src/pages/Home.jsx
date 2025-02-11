import React from "react";
import {
  PhoneAndroid as PhoneIcon,
  Apartment as ApartmentIcon,
  Security as SecurityIcon,
  Chat as ChatIcon,
} from "@mui/icons-material";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70">
          <img
            src="https://images.unsplash.com/photo-1554995207-c18c203602cb"
            alt="Student Housing"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Encontre sua nova moradia com a Vagou.app e transforme essa
              experiência em algo simples, seguro e descomplicado!
            </h1>
            <p className="text-xl mb-8">
              Pague seu aluguel diretamente pelo app, converse com proprietários
              e futuros colegas em tempo real, e tenha acesso a contratos
              digitais sem burocracia.
            </p>
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-green-600 transition-colors flex items-center space-x-2">
              <PhoneIcon sx={{ fontSize: 20 }} />
              <span>Baixar App</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que escolher a Vagou.app?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <ApartmentIcon
                sx={{ fontSize: 48, color: "#3b82f6", marginBottom: "1rem" }}
              />
              <h3 className="text-xl font-bold mb-3">Imóveis Verificados</h3>
              <p className="text-gray-600">
                Todos os imóveis são verificados pela nossa equipe para garantir
                sua segurança.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <SecurityIcon
                sx={{ fontSize: 48, color: "#3b82f6", marginBottom: "1rem" }}
              />
              <h3 className="text-xl font-bold mb-3">Pagamento Seguro</h3>
              <p className="text-gray-600">
                Realize pagamentos com segurança diretamente pelo aplicativo.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <ChatIcon
                sx={{ fontSize: 48, color: "#3b82f6", marginBottom: "1rem" }}
              />
              <h3 className="text-xl font-bold mb-3">Chat em Tempo Real</h3>
              <p className="text-gray-600">
                Converse diretamente com proprietários e futuros colegas de
                moradia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
