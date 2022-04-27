import React, { useState } from "react";
import {
  guessCoords,
  getPetsAround,
  userState,
  getMyPets,
  petState,
} from "hooks/atom";
import {
  useRecoilState,
  useRecoilValue,
  useRecoilRefresher_UNSTABLE,
} from "recoil";

function useChangeNavColor() {
  const [navOption, setNavOption] = useState(false);
  function changeNavColor() {
    if (window.scrollY > 60) {
      setNavOption(true);
    } else {
      setNavOption(false);
    }
  }
  window.addEventListener("scroll", changeNavColor);
  return navOption;
}

function useSetGuessCords() {
  return useRecoilState(guessCoords);
}

function usePetsArounds() {
  return useRecoilValue(getPetsAround);
}

function useSetUser() {
  return useRecoilState(userState);
}

function useUser() {
  return useRecoilValue(userState);
}

function useMyPets() {
  return useRecoilValue(getMyPets);
}

function useRefreshMyPets() {
  return useRecoilRefresher_UNSTABLE(getMyPets);
}

function useSetPet() {
  return useRecoilState(petState);
}

function usePet() {
  return useRecoilValue(petState);
}

export {
  useChangeNavColor,
  useSetGuessCords,
  usePetsArounds,
  useSetUser,
  useUser,
  useMyPets,
  useSetPet,
  usePet,
  useRefreshMyPets,
};
