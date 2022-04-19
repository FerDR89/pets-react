import { atom, selector } from "recoil";
import { fetchPetsAround, fetchMyPets } from "lib/api";

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

export const userState = atom({
  key: "user",
  default: {},
});

export const getMyPets = selector({
  key: "getMyPets",
  get: async ({ get }) => {
    const user = await get(userState);
    const token = user["token"];
    if (token) {
      const arrayPets = await fetchMyPets(token);
      return arrayPets;
    }
  },
});

export const petState = atom({
  key: "pet",
  default: {},
});
