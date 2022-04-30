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

  function redirectAndResetState() {
    localStorage.clear();
    setUser({ path: "/my-dates" });
    navigate("/login");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const userName = e.target.name.value;
    const password = e.target.password.value;
    const repeatPassword = e.target.repeatPassword.value;
    const userData = { fullname: userName };

    if (password && repeatPassword) {
      const validPass = checkPassword(password, repeatPassword);
      userData["password"] = validPass.toString();
      if (!token && validPass) {
        fetchSetUserData(validPass, userName, userEmail).then((res) => {
          if (res["newUserId"]) {
            redirectAndResetState();
            alert("Su usuario ha sido creado con éxito");
          } else {
            alert(res["message"]);
          }
        });
      }
      if (token && validPass) {
        fetchUpdateUserData(token, userData).then((res) => {
          if (res["updateUser"] == true && res["updateAuth"] == true) {
            redirectAndResetState();
            alert(
              "Su nombre de usuario y contraseña fueron actualizados con éxito"
            );
          } else if (res["updateAuth"] == true) {
            redirectAndResetState();
            alert("Su contraseña ha sido actualizada con éxito ");
          } else {
            alert("Error, intentelo nuevamente más tarde");
          }
        });
      }
    } else {
      console.log("Tercer IF", token);
      fetchUpdateUserData(token, userData).then((res) => {
        if (res["updateUser"] == true) {
          redirectAndResetState();
          alert("Su nombre de usuario fue actualizado con éxito");
        } else {
          alert("Error, intentelo nuevamente más tarde");
        }
      });
    }
  }

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
