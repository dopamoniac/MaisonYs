export type Collection = {
  key: string;
  name: string;
  tagline: string;
};

export const collections: Collection[] = [
  {
    key: "noire",
    name: "Collection Noire",
    tagline: "Ombres, mystère et présence absolue",
  },
  {
    key: "pierre",
    name: "Collection Pierre",
    tagline: "Clarté, lumière et raffinement minéral",
  },
  {
    key: "doree",
    name: "Collection Dorée",
    tagline: "Chaleur, opulence et sensualité orientale",
  },
];

export type Fragrance = {
  name: string;
  family: string;
  volume: string;
  description: string;
  imageKey: string;
  collectionKey: string;
};

export const fragrances: Fragrance[] = [
  {
    name: "Moula",
    family: "Boisé Aromatique",
    volume: "50 ML",
    description: "L'oud et le cèdre en conversation silencieuse — une présence ancienne rendue moderne.",
    imageKey: "moula",
    collectionKey: "noire",
  },
  {
    name: "Kirke",
    family: "Oriental Épicé",
    volume: "50 ML",
    description: "Safran et encens — mythique, magnétique, impossible à ignorer.",
    imageKey: "kirke",
    collectionKey: "noire",
  },
  {
    name: "Chronic R",
    family: "Boisé Musqué",
    volume: "50 ML",
    description: "Une intensité silencieuse. Bois et musc en équilibre parfait.",
    imageKey: "chronicr",
    collectionKey: "noire",
  },
  {
    name: "Rêve",
    family: "Floral Doux",
    volume: "50 ML",
    description: "Un rêve tissé de jasmin, de musc blanc et de lumière crépusculaire.",
    imageKey: "reve",
    collectionKey: "pierre",
  },
  {
    name: "Aicha",
    family: "Floral Oriental",
    volume: "50 ML",
    description: "Des pétales de rose sur un ambre chaud — la féminité élevée au rang de poésie.",
    imageKey: "aicha",
    collectionKey: "pierre",
  },
  {
    name: "Baccarat",
    family: "Oud Précieux",
    volume: "50 ML",
    description: "Le summum de la collection. Une opulence pure — un extrait digne de la légende.",
    imageKey: "baccarat",
    collectionKey: "pierre",
  },
  {
    name: "Vanilla Powder",
    family: "Oriental Gourmand",
    volume: "50 ML",
    description: "Un voile soyeux de vanille chaude, doux comme le souvenir, léger comme un souffle.",
    imageKey: "vanillapowder",
    collectionKey: "doree",
  },
  {
    name: "Sucre",
    family: "Oriental Sucré",
    volume: "50 ML",
    description: "La douceur d'une canne à sucre rare, distillée en quelque chose d'intemporel.",
    imageKey: "sucre",
    collectionKey: "doree",
  },
  {
    name: "Rose Vanille",
    family: "Floral Gourmand",
    volume: "50 ML",
    description: "La rose embrassée par la vanille — une dualité de force et de tendresse.",
    imageKey: "rosevanille",
    collectionKey: "doree",
  },
];

export const imageMap: Record<string, string> = {
  moula: "83C342F6-47D8-4D5D-9A82-B42FF69E92B8_1776563996030.jpeg",
  chronicr: "E5B68E23-F1D9-4AAD-9585-ACA2E8CB727F_1776563996030.jpeg",
  kirke: "47C2B8BF-6EA7-46A5-BB2B-2A1B17CDA002_1776563996030.jpeg",
  reve: "46172FF5-5916-433E-8AFD-47E52666AFA8_1776563996030.jpeg",
  aicha: "40E70BE2-9FBF-45F0-B7BF-EC633C97CCF9_1776563996030.jpeg",
  baccarat: "E3D6CE86-C2F1-446F-9FFA-72F6598EDA39_1776563996030.jpeg",
  rosevanille: "9F9A9EE0-5040-4EF7-9F98-6095D8A188C7_1776563996030.jpeg",
  vanillapowder: "9BE9A488-755D-4F31-AE25-9DA3E005D6F6_1776563996030.jpeg",
  sucre: "A52526BD-D657-4534-963F-28407B835180_1776563996030.jpeg",
};
