import React, { useState, useEffect } from "react";
import { guessCoords, getPetsAround } from "hooks/atom";
import { useRecoilState, useRecoilValue } from "recoil";

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

export { useChangeNavColor, useSetGuessCords, usePetsArounds };
