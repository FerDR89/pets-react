import React from "react";
import css from "components/data-form/dataForm.css";
import { Text } from "ui/text/Text";
import { TextField } from "ui/text-field/TextField";
import { MyButton } from "ui/my-button/MyButton";
import { useSetUser } from "hooks/hooks";
import { fetchSetUserData, fetchUpdateUserData } from "lib/api";
import { useNavigate } from "react-router-dom";

function DataForm() {
  const [user, setUser] = useSetUser();
  const userEmail = user["userEmail"];
  const userName = user["userName"];
  const token = user["token"];
  const navigate = useNavigate();

  function checkPassword(password, repeatPassword) {
    if (password.length < 8 && repeatPassword.length < 8) {
      alert(
        "Por favor revise la contraseña ingresada, la misma debe contener al menos 8 carácteres"
      );
    } else if (password === repeatPassword) {
      return password;
    } else {
      alert("Por favor ingrese la misma contraseña en ambos campos");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const userName = e.target.name.value;
    const password = e.target.password.value;
    const repeatPassword = e.target.repeatPassword.value;

    //CHEQUEAR CUANDO CAMBIO EL NOMBRE LOS ARGUMENTOS OPCIONALES PORQUE ME TOMA SIEMPRE COMO PRIMER ARGUMENTO LA PASSWORD

    if (password && repeatPassword) {
      const validPass = checkPassword(password, repeatPassword);

      if (!token) {
        if (validPass) {
          fetchSetUserData(validPass, userName, userEmail);
          navigate("/login");
        }
      } else {
        if (validPass) {
          fetchUpdateUserData(token, validPass).then((res) => {
            console.log(res);
          });
        }
      }
    } else {
      fetchUpdateUserData(token, userName).then((res) => {
        console.log(res);
      });
    }
  }

  //     // } else {
  //     //   });

  //     // if (result["updateUser"] == true || result["updateAuth"] == true) {
  //     //   alert("Sus datos han sido actualizados correctamente");
  //     // } else {
  //     //   alert(
  //     //     "Hubo un problema con la carga de sus datos, por favor intente luego"
  //     //   );
  //     // }
  //   }
  // }
  // }

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <TextField
        inputType="text"
        inputName="name"
        labelText="Nombre"
        holder={userName || ""}
        fieldSetHeight="90px"
      />

      <TextField
        inputType="password"
        inputName="password"
        labelText="Contraseña"
        holder="Tu contraseña"
        fieldSetHeight="90px"
      />

      <TextField
        inputType="password"
        inputName="repeatPassword"
        labelText="Repetir contraseña"
        fieldSetHeight="90px"
      />

      <MyButton bgc={"var(--btn-bg1)"}>
        <Text tag="text-bold" fsize="16px">
          Guardar
        </Text>
      </MyButton>
    </form>
  );
}

export { DataForm };
