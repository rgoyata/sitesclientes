import velaMassagem from "../assets/products/vela-massagem.jpg";
import saisDeBanho from "../assets/products/sais-de-banho.jpg";
import homeSpray from "../assets/products/home-spray.jpg";
import velaPoteWhite from "../assets/products/vela-pote-white.jpg";
import velaVidroBambu from "../assets/products/vela-vidro-bambu.jpg";
import perfumeAutomotivo from "../assets/products/perfume-automotivo.jpg";
import velasReligiosas from "../assets/products/velas-religiosas.jpg";
import kitBandeja from "../assets/products/kit-bandeja.jpg";
import lembrancinhas from "../assets/products/lembrancinhas.jpg";

export interface Product {
  name: string;
  description: string;
  priceCash: string;
  priceCredit: string;
  image?: string;
}

export interface Category {
  id: string;
  title: string;
  intro: string;
  items: Product[];
}

export const categories: Category[] = [
  {
    id: "bem-estar",
    title: "Bem-estar",
    intro:
      "Rituais de autocuidado para transformar o banho e a rotina em um momento só seu.",
    items: [
      {
        name: "Vela de massagem",
        description: "120 g · óleos vegetais que derretem e hidratam a pele",
        priceCash: "R$ 38,90",
        priceCredit: "R$ 41,90",
        image: velaMassagem,
      },
      {
        name: "Sachê colonial",
        description: "Perfuma gavetas, armários e closets",
        priceCash: "R$ 19,90",
        priceCredit: "R$ 21,90",
      },
      {
        name: "Sais de banho",
        description: "Aroma, cuidado e renovação para o chuveiro",
        priceCash: "R$ 38,90",
        priceCredit: "R$ 41,90",
        image: saisDeBanho,
      },
      {
        name: "Escalda-pés",
        description: "Um spa completo em casa",
        priceCash: "R$ 44,90",
        priceCredit: "R$ 49,90",
      },
      {
        name: "Refil de escalda-pés",
        description: "Para renovar o ritual",
        priceCash: "R$ 21,90",
        priceCredit: "R$ 25,90",
      },
    ],
  },
  {
    id: "aromatizacao",
    title: "Aromatização de ambientes",
    intro: "Para perfumar a casa de forma contínua e equilibrada.",
    items: [
      {
        name: "Home spray / água perfumada",
        description: "300 ml · Flor de Algodão e outras fragrâncias",
        priceCash: "R$ 59,90",
        priceCredit: "R$ 62,90",
        image: homeSpray,
      },
      {
        name: "Refil para difusor",
        description: "Reabastece seu difusor de varetas",
        priceCash: "R$ 52,90",
        priceCredit: "R$ 59,90",
      },
    ],
  },
  {
    id: "velas",
    title: "Velas aromáticas",
    intro: "Peças autorais para acender presença em qualquer ambiente.",
    items: [
      {
        name: "Vela aromática, pote white",
        description: "Cerâmica artesanal, formato arredondado",
        priceCash: "R$ 35,90",
        priceCredit: "R$ 39,90",
        image: velaPoteWhite,
      },
      {
        name: "Vela aromática em vidro",
        description: "Com tampa de bambu · fragrância Vanilla",
        priceCash: "R$ 48,90",
        priceCredit: "R$ 52,90",
        image: velaVidroBambu,
      },
    ],
  },
  {
    id: "automotiva-religiosa",
    title: "Automotiva & religiosa",
    intro: "Linhas especiais para o carro e para a fé.",
    items: [
      {
        name: "Perfume automotivo",
        description: "Fragrância duradoura para o seu carro",
        priceCash: "R$ 35,90",
        priceCredit: "R$ 39,90",
        image: perfumeAutomotivo,
      },
      {
        name: "Vela religiosa",
        description: "Nossa Senhora Aparecida e ostensório",
        priceCash: "R$ 89,90",
        priceCredit: "R$ 92,90",
        image: velasReligiosas,
      },
    ],
  },
];

export const kits: Product[] = [
  {
    name: "Kit bandeja espelhada",
    description: "Bandeja espelhada, difusor e vela aromática",
    priceCash: "R$ 189,90",
    priceCredit: "R$ 192,90",
    image: kitBandeja,
  },
  {
    name: "Kit Wheti",
    description: "Bandeja branca, difusor e vaso decorativo ou vela",
    priceCash: "R$ 139,90",
    priceCredit: "R$ 142,90",
  },
];

export const lembrancinhasImage = lembrancinhas;
