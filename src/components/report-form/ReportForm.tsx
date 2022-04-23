import React from "react";
import css from "components/report-form/reportForm.css";
import { usePet, useUser } from "hooks/hooks";
import { fetchCreatePet, fetchUpdatePet } from "lib/api";
import { checkPetData } from "lib/auxFunction";
import { Text } from "ui/text/Text";
import { TextField } from "ui/text-field/TextField";
import { Dropzone } from "components/dropzone/Dropzone";
import { Mapbox } from "components/mapbox/Mapbox";
import { MyButton } from "ui/my-button/MyButton";
import { useNavigate } from "react-router-dom";

type ReportFormProps = {
  petName?: string;
};

export function ReportForm({ petName }: ReportFormProps) {
  const navigate = useNavigate();
  const user = useUser();
  const token = user["token"];
  const pet = usePet();
  const imgURL = pet["petImg64"];
  const petCoords = pet["petCoords"];
  const place_lost = pet["place_lost"];
  const petId = pet["petId"];

  function handleSubmit(e) {
    e.preventDefault();
    const fullname = e.target.name.value;
    if (!petId) {
      const petData = {
        fullname,
        imgURL,
        lost_geo_lat: petCoords[1],
        lost_geo_lng: petCoords[0],
        place_lost,
      };
      fetchCreatePet(token, petData).then((res) => {
        if (res.newPet == true && res.updateUser == true) {
          alert("Su mascota fue reportada con éxito");
        } else {
          alert(
            "Hubo un problema con la carga de su mascota, por favor intente más tarde"
          );
        }
      });
    } else {
      //SEGUIR DESDE ACÁ
      console.log("Update IF");

      const data = {
        fullname,
        imgURL,
        petCoords,
        place_lost,
        petId,
      };
      const petData = checkPetData(data);
      fetchUpdatePet(token, petData).then((res) => {
        if (res.updatePet == true) {
          alert("Su mascota fue reportada con éxito");
          navigate("/my-pets");
        } else {
          alert(
            "Hubo un problema con la carga de su mascota, por favor intente más tarde"
          );
        }
      });
    }
  }

  function ReportText() {
    return (
      <Text tag="text-bold" fsize="16px">
        Reportar como perdido
      </Text>
    );
  }

  function SaveText() {
    return (
      <Text tag="text-bold" fsize="16px">
        Guardar
      </Text>
    );
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField
        inputType="text"
        inputName="name"
        labelText="Nombre"
        holder={petName || "Ingresá el nombre de tu mascota aquí"}
      />
      <Dropzone />
      <Mapbox />
      <MyButton bgc={"var(--btn-bg1)"}>
        {petId ? <SaveText /> : <ReportText />}
      </MyButton>
    </form>
  );
}
