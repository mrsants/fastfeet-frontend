import { useField } from "@rocketseat/unform";
import React, { useEffect, useRef, useState } from "react";
import api from "../../../../services/api";
import { StyledSelect } from "./styles";

export default function RecipientInput({
  name,
  label,
  options,
  multiple,
  ...rest
}) {

  const style = {
    control: (base, state) => ({
      ...base,
      border: "1px solid #dddddd",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid #dddddd"
      }
    })
  };

  const [recipient, setRecipient] = useState([]);

  const recipientRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    async function loadData() {
      const response = await api.get("/recipients", {
        params: {
          name: ""
        }
      });

      const data = response.data.map(recipient => ({
        value: recipient.id,
        label: recipient.name
      }));

      setRecipient(data);
    }
    loadData();
  }, []);

  const filterOptions = inputValue => {
    return recipient.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = inputValue =>
    new Promise(resolve => {
      resolve(filterOptions(inputValue));
    });

  useEffect(() => {
    registerField({
      name: "recipient_id",
      ref: recipientRef.current,
      path: "select.state.value",
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.select.state.value) {
            return [];
          }
          return ref.select.state.value.map(option => option.value);
        } else {
          if (!ref.select.state.value) {
            return "";
          }
          return ref.select.state.value.value;
        }
      }
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <StyledSelect
      cacheOptions
      defaultOptions={recipient}
      loadOptions={promiseOptions}
      defaultValue={defaultValue}
      placeholder="Digite o nome do destinário"
      ref={recipientRef}
      styles={style}
      classNamePrefix="react-select"
      {...rest}
    />
  );
}
