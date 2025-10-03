import { faker } from "@faker-js/faker";
const data = [
  {
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    image: faker.image.avatar(),
    phone: faker.helpers.replaceSymbols("(+##)-###-###-####"),
    balance: 20,
  },
  {
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    image: faker.image.avatar(),
    phone: faker.helpers.replaceSymbols("(+##)-###-###-####"),
    balance: -192,
  },
  {
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    image: faker.image.avatar(),
    balance: 150,
    phone: faker.helpers.replaceSymbols("(+##)-###-###-####"),
  },
];
export default data;
