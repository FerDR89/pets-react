import { atom, selector } from "recoil";
import { fetchPetsAround } from "lib/api";

export const guessCoords = atom({
  key: "guessCords",
  default: null,
});

export const getPetsAround = selector({
  key: "getPetsAround",
  get: async ({ get }) => {
    const coords = await get(guessCoords);
    console.log("fuera del if", coords);

    if (coords) {
      console.log("dentro del if", coords);
      const arrayPets = await fetchPetsAround(coords);
      return arrayPets;
    }
  },
});
