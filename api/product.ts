import faker from "faker";
import { sample } from "../support/collections";

const images = [
  // A Cup of Coffee
  "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/b64b77123820739.60f6ba873a8dc.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400/568093123820739.60f6ba873bdec.jpg",

  // Martius
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/83326b122384977.60d8e0b453ce7.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/641a18122384977.60d8e0b49bfc0.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/18e228122384977.60d8e0b40c7f3.jpg",

  // LeafCoffee
  "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/10f5ea123820739.60fabfa5a8fc3.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/c217f491332327.5f78582b5a503.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/96b60391332327.5f78582b57d5b.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/0ceeb791332327.5f78582b59ef2.png",

  // Vero Cafe & Coffee House
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/c69d31113847375.602fccb892d4a.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/7ed68c113847375.602fccb8927dd.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/4a30ac125926407.612388e988869.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/e42758125926407.612388e98968a.jpg",

  // Starbucks
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c01f0a109906229.6103818db02bc.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b1ed5d109906229.6102491427174.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/cddb0a109906229.613fdef97fb52.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7cbe7d109906229.613fdefd1053e.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/04f36f109906229.60eb33b3c08ad.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5824d9109906229.600f81dabe6cb.png",
];

const fakeCoffeeName = () => {
  const types = ["Arábica", "Conilon", "Robusta"];
  const buzzwords = ["Microlote", "Orgânico", "Familiar"];
  const regions = ["Extrema", "Mantiqueira", "Caparaó"];

  return `${sample(types)} ${sample(buzzwords)} – ${sample(regions)}`;
};

export const getFakeProduct = () => ({
  id: faker.datatype.uuid(),
  price: faker.datatype.float({ min: 10, max: 200 }),
  name: fakeCoffeeName(),
  description: faker.lorem.paragraphs(3),
  images: [sample(images)],
});
