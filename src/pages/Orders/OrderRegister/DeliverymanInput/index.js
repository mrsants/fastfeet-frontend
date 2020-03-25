/**
 * Modules
 */
import { useField } from "@rocketseat/unform";
import React, { useEffect, useRef, useState } from "react";
/**
 * Services
 */
import api from "../../../../services/api";
/**
 * StyleSheet
 */
import { StyledSelect } from "./styles";

/**
 * @function <FunctionComponentElement> RecipientInput
 * @param {*} rest
 * @returns {ReactDOM} Returns a input to create a delivery schedule
 */
export default function DeliverymanInput({
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

  const [deliverymen, setDeliverymen] = useState([]);

  const deliverymanRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    async function loadData() {
      const response = await api.get("/deliverymans", {
        params: {
          name: ""
        }
      });

      const data = response.data.map(deliveryman => ({
        value: deliveryman.id,
        label: deliveryman.name
      }));

      setDeliverymen(data);
    }
    loadData();
  }, []);

  const filterOptions = inputValue => {
    return deliverymen.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = inputValue =>
    new Promise(resolve => {
      resolve(filterOptions(inputValue));
    });

  useEffect(() => {
    registerField({
      name: "deliveryman_id",
      ref: deliverymanRef.current,
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
      defaultOptions={deliverymen}
      loadOptions={promiseOptions}
      defaultValue={defaultValue}
      placeholder="Digite o nome do entregador"
      ref={deliverymanRef}
      styles={style}
      classNamePrefix="react-select"
      {...rest}
    />
  );
}
