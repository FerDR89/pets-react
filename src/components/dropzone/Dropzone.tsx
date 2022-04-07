import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { MyButton } from "ui/my-button/MyButton";
import { Text } from "ui/text/Text";
import css from "components/dropzone/dropzone.css";

export function Dropzone(props) {
  const [newImg, setNewImg] = useState(null);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxSize: 20000000,
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewImg(event.target.result);
      };
      reader.readAsDataURL(acceptedFiles[0]);
    },
  });

  return (
    <article className={css.root}>
      <div className={css.image__container} {...getRootProps()}>
        {newImg ? (
          <img className={css.img} src={newImg} />
        ) : (
          <Text tag="text-bold" fsize="16px">
            Arrastra la foto de tu mascota aquí
          </Text>
        )}
        <input {...getInputProps()} />
      </div>

      <MyButton onClicked={() => {}} bgc={"var(--btn-bg2)"}>
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
