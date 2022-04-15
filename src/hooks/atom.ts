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
    if (coords) {
      const arrayPets = await fetchPetsAround(coords);
      return arrayPets;
    }
  },
});

export const user = atom({
  key: "user",
  default: {},
});
