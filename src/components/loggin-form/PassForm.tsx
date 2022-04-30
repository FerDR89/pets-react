import React from "react";
import css from "components/loggin-form/index.css";
import { useNavigate } from "react-router-dom";
import { useSetUser } from "hooks/hooks";
import { Text } from "ui/text/Text";
import { TextField } from "ui/text-field/TextField";
import { MyButton } from "ui/my-button/MyButton";
import { fetchUserToken } from "lib/api";

function PassForm() {
  const navigate = useNavigate();
  const [user, setUser] = useSetUser();
  const email = user["userEmail"];
  const name = user["userName"];
  const path = user["path"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    if (password) {
      const token = await fetchUserToken(email, password);
      if (token) {
        setUser({ ...user, token });
        const stringify = JSON.stringify({
          userName: name,
          userEmail: email,
          token: token,
        });
        localStorage.setItem("user", `${stringify}`);
        navigate(path);
      } else {
        alert("Contraseña incorrecta");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <TextField
        inputType="password"
        inputName="password"
        labelText="Contraseña"
        holder="Ingresá aquí tu password"
        fieldSetHeight="90px"
      />
      <MyButton bgc={"var(--btn-bg1)"}>
        <Text tag="text-bold" fsize="16px">
          Ingresar
        </Text>
      </MyButton>
      <a className={css.link}>OLVIDÉ MI CONTRASEÑA</a>
    </form>
  );
}

export { PassForm };
