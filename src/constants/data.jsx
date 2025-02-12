import React from "react";
import {
  AccessTime as TimeIcon,
  LocationOn as LocationIcon,
  PhoneAndroid as PhoneIcon,
  Security as SecurityIcon,
  Chat as ChatIcon,
  Payment as PaymentIcon,
} from "@mui/icons-material";

export const benefits = [
  {
    icon: <TimeIcon sx={{ fontSize: 40 }} />,
    title: "Tempo",
    description:
      "Economize tempo e energia, encontre seu lar de aluguel e compare.",
  },
  {
    icon: <LocationIcon sx={{ fontSize: 40 }} />,
    title: "Localização",
    description:
      "Encontre o seu próximo lar ideal para o seu momento na localização perfeita.",
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 40 }} />,
    title: "Na palma da mão",
    description:
      "Tenha tudo que precisa para encontrar sua nova casa e alugar.",
  },
];

export const reviews = [
  {
    rating: 5,
    title: "Apartamento sensacional",
    author: "Maria",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    rating: 5,
    title: "Ótima localização",
    author: "João",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
  },
  {
    rating: 5,
    title: "Pertinho da universidade",
    author: "Ana",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    rating: 5,
    title: "Vizinhança acolhedora",
    author: "Pedro",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
];

export const studentBenefits = [
  {
    icon: <PaymentIcon />,
    text: "Pagamento pelo app: Efetue pagamentos de aluguel de forma simples e segura, sem precisar sair de casa, com opções como Pix e cartão.",
  },
  {
    icon: <ChatIcon />,
    text: "Chat integrado: Comunique-se diretamente com proprietários ou futuros colegas de quarto, facilitando acordos e tirando dúvidas rapidamente.",
  },
  {
    icon: <SecurityIcon />,
    text: "Proteção de jovens: Receba dicas de segurança para evitar fraudes e realizar negócios mais tranquilo.",
  },
  {
    icon: <LocationIcon />,
    text: "Fácil localização: Encontre imóveis próximos à universidade ou em bairros de interesse usando a busca por mapa.",
  },
];
