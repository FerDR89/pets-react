import React, { useState, useEffect } from "react";

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

function useGeoPosition() {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const error = (error) => {
    console.error("Error en obtener la geolocalización del usuario");
  };

  function success(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    console.log(lng, lat);
  }

  function getCurrentPosition(): any {
    return navigator.geolocation.getCurrentPosition(success, error, options);
  }

  getCurrentPosition();
}

export { useChangeNavColor, useGeoPosition };
