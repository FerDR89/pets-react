import React from "react";
import css from "ui/text-field/textField.css";
type Props = {
  inputType: string;
  labelText: string;
  inputName: string;
  fieldSetHeight?: string;
  holder?: string;
};

export function TextField(props: Props) {
  const { inputType, labelText, inputName, fieldSetHeight, holder } = props;
  return (
    <fieldset
      className={css["text-field__container"]}
      style={{ height: fieldSetHeight }}
    >
      <label htmlFor={inputName} className={css["text-field__label"]}>
        {labelText}
      </label>
      <input
        type={inputType}
        name={inputName}
        id={inputName}
        className={css["text-field__input"]}
        placeholder={holder}
      />
    </fieldset>
  );
}
