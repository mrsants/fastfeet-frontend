/**
 * Modules
 */
import { useField } from "@rocketseat/unform";
import React, { useEffect, useRef, useState } from "react";
/**
 * Services
 */
import api from "../../../services/api";
/**
 * StyleSheet
 */
import { StyledSelect } from "./styles";

/**
 * @function <FunctionComponentElement> RecipientInput
 * @param {*} rest
 * @returns {ReactDOM} Returns a input to create a delivery schedule
 */
export default function RecipientInput({
  name,
  label,
  options,
  multiple,
  ...rest
}) {
  const [recipient, setRecipient] = useState([]);

  const recipientRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    async function loadData() {
      const response = await api.get("/recipient", {
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
      placeholder="Entregador"
      ref={recipientRef}
      classNamePrefix="react-select"
      {...rest}
    />
  );
}
