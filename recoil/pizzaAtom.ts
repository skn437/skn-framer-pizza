import { atom } from "recoil";

interface pizza {
  base: String;
  toppings: String[] | String;
}

const pizza = {
  base: "",
  toppings: ""
};

const pizzaAtom = atom({
  key: "pizza-atom",
  default: pizza
});

export default pizzaAtom;