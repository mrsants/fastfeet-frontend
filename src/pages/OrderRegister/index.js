/**
 * Modules
 */
import { Form } from "@rocketseat/unform";
import React from "react";
import { FaCheck, FaChevronLeft } from "react-icons/fa";
import { toast } from "react-toastify";

/**
 * Services
 */
import api from "../../services/api";
import history from "../../services/history";

/**
 * Components
 */
import DeliverymanInput from "./DeliverymanInput";
import RecipientInput from "./RecipientInput";

/**
 * StyleSheet
 */
import { ButtonBack, ButtonSave, Container, StyledInput } from "./styles";

/**
 * @function <FunctionComponentElement> OrderRegister
 * @param {*} rest
 * @returns {ReactDOM} Returns a form to create a delivery schedule
 */
async function handleSubmit({ recipient_id, deliveryman_id, product }) {
  try {
    await api.post("/order-management", {
      recipient_id: recipient_id.value,
      deliveryman_id: deliveryman_id.value,
      product
    });
    toast.success("Order created successful");
    history.push("/orders");
  } catch ({ response }) {
    toast.error(response.data.error);
  }
}

export default function OrderRegister() {

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div className="flex-justify-between">
          <h2>Cadastro de encomendas</h2>
          <div className="flex-justify-between">
            <ButtonBack
              onClick={e => {
                e.preventDefault();
                history.push("/orders");
              }}
            >
              <FaChevronLeft color="#fff" />
              <span>VOLTAR</span>
            </ButtonBack>
            <ButtonSave className="mbl-16" type="submit">
              <FaCheck color="#fff" />
              <span>SALVAR</span>
            </ButtonSave>
          </div>
        </div>

        <div className="group">
          <div className="primary-group">
            <div className="form-group">
              <label>Destinatário</label> <br />
              <RecipientInput name="recipient_id" />
            </div>
            <div className="form-group mbl-30">
              <label>Entregador</label>
              <br />
              <DeliverymanInput name="deliveryman_id" />
            </div>
          </div>
          <div className="form-group mbt-16">
            <label>Nome do produto</label>
            <br />
            <StyledInput
              name="product"
              placeholder="Digite o produto"
            ></StyledInput>
          </div>
        </div>
      </Form>
    </Container>
  );
}
