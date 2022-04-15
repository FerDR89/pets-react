import React, { useEffect } from "react";
import css from "components/loggin-form/index.css";
import { Text } from "ui/text/Text";
import { TextField } from "ui/text-field/TextField";
import { MyButton } from "ui/my-button/MyButton";
import { useSetUser } from "hooks/hooks";
import { fetchUserId } from "lib/api";
import { useNavigate } from "react-router-dom";

function EmailForm() {
  const navigate = useNavigate();
  const [user, setUser] = useSetUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      const data = await fetchUserId(email);
      console.log({ data });

      setUser({ ...user, userEmail: email, userName: data.userName });
      data.user_id ? navigate("/auth") : navigate("/my-dates");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <TextField
        inputType="email"
        inputName="email"
        labelText="Email"
        holder="Ingresá aquí tu email"
        fieldSetHeight="90px"
      />
      <MyButton bgc={"var(--btn-bg1)"}>
        <Text tag="text-bold" fsize="16px">
          Ingresar
        </Text>
      </MyButton>
    </form>
  );
}

export { EmailForm };
