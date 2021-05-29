import adidasShoe from "./adidasShoe";
import adidasMenCloth from "./adidasMenCloth";
import adidasWomenCloth from "./adidasWomenCloth";

const fakeData = [...adidasShoe, ...adidasMenCloth, ...adidasWomenCloth];

const shuffle = (a) => {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
};

shuffle(fakeData);

export default fakeData;
