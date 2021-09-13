import faker from "faker";
import { sample } from "./support/collections";
import { Product } from "./types";

interface ApiParams {
  limit: number;
}

const fakeCoffeeName = () => {
  const types = ["Arábica", "Conilon", "Robusta"];
  const buzzwords = ["Microlote", "Orgânico", "Familiar"];
  const regions = ["Extrema", "Mantiqueira", "Caparaó"];

  return `${sample(types)} ${sample(buzzwords)} – ${sample(regions)}`;
};

export const fetchProducts = ({ limit }: ApiParams): Product[] => {
  return Array(limit)
    .fill("")
    .map(() => ({
      id: faker.datatype.uuid(),
      price: faker.datatype.float({ min: 10, max: 200 }),
      name: fakeCoffeeName(),
      description: faker.lorem.paragraph(),
      images: [faker.image.food(), faker.image.food()],
    }));
};
