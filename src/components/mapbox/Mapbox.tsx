import React, { useState } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import css from "components/mapbox/mapbox.css";
import { useSetPet } from "hooks/hooks";
import { MyButton } from "ui/my-button/MyButton";
import { Text } from "ui/text/Text";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZmVyZHI4OWRldiIsImEiOiJja3l1ZXZqOXgxbmY5MnVsdWpqbmVrZXNiIn0.suMetmzHmx4QIFU4i5-xXg",
});

// type MapBoxSearchProps = {
//   onChange?: (any) => any;
// };
// export function Mapbox({onChange} MapBoxSearchProps) {

export function Mapbox() {
  const [pet, setPet] = useSetPet();
  const [query, setQuery] = useState("");
  // lo seteo any porque la prop "center" de Map se queja
  const initialCoords: any = [-0.481747846041145, 51.3233379650232];
  const [coords, setCoords] = useState(initialCoords);

  async function search() {
    // esta API la saqué de por ahi
    const data = await fetch(
      `https://us1.locationiq.com/v1/search.php?key=pk.bf4604bc2b3ea328e732de26a4387fa9&q=${query}&format=json`
    ).then((r) => r.json());
    const lat = parseFloat(data[0].lat);
    const lng = parseFloat(data[0].lon);
    const newCoords = [lng, lat];
    setCoords(newCoords);
    setPet({ ...pet, petCoords: newCoords, place_lost: query });

    // // lo "tiro" hacia arriba para que reciban las coordenadas desde "afuera"
    // if (onChange) {
    //   onChange({
    //     query: query,
    //     coords: newCoords,
    //   });
    // }
  }

  function inputChangeHandler(e) {
    setQuery(e.target.value);
  }

  function keydownInputHandler(e) {
    // si no es con form, tengo que agregar esto
    if (e.key == "Enter") {
      search();
    }
  }

  return (
    <article className={css.root}>
      <Map
        className={css.map}
        style="mapbox://styles/mapbox/streets-v9"
        zoom={[16]}
        center={coords}
        movingMethod="easeTo"
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={coords} />
        </Layer>
      </Map>

      <fieldset className={css.search}>
        <label htmlFor={"busqueda"} className={css.label}>
          Ubicación
        </label>
        <input
          type="search"
          id="busqueda"
          onChange={inputChangeHandler}
          onKeyDown={keydownInputHandler}
          value={query}
          className={css.input}
        />
      </fieldset>
      {/* <MyButton onClicked={search} bgc={"var(--btn-bg2)"} */}
      <MyButton onClicked={search} bgc={"var(--btn-bg2)"} type={"button"}>
        <Text tag="text-bold" fsize="16px">
          Buscar
        </Text>
      </MyButton>

      <div className={css.text__container}>
        <Text tag="text-body">
          Buscá un punto de referencia para reportar a tu mascota. Puede ser una
          dirección, un barrio o una ciudad.
        </Text>
      </div>
    </article>
  );
}
