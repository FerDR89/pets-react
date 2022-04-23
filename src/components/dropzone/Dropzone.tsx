import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useSetPet } from "hooks/hooks";
import { MyButton } from "ui/my-button/MyButton";
import { Text } from "ui/text/Text";
import css from "components/dropzone/dropzone.css";

export function Dropzone() {
  const [pet, setPet] = useSetPet();
  const petImg = pet["petImgURL"];
  const [newImg, setNewImg] = useState(null);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxSize: 20000000,
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewImg(event.target.result);
        setPet({ ...pet, petImg64: event.target.result });
      };
      reader.readAsDataURL(acceptedFiles[0]);
    },
  });

  return (
    <article className={css.root}>
      <div className={css.image__container} {...getRootProps()}>
        {newImg ? (
          <img className={css.img} src={newImg} />
        ) : petImg ? (
          <img className={css.img} src={petImg} />
        ) : (
          <Text tag="text-bold" fsize="16px">
            Arrastra la foto de tu mascota aquí
          </Text>
        )}
        <input {...getInputProps()} onChange={() => {}} />
      </div>

      {/* <MyButton bgc={"var(--btn-bg2)"} > */}
      <MyButton bgc={"var(--btn-bg2)"} type={"button"}>
        <div {...getRootProps()}>
          <Text tag="text-bold" fsize="16px">
            agregar/modificar foto
          </Text>
          <input {...getInputProps()} />
        </div>
      </MyButton>
    </article>
  );
}
