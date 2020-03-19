import { Form, Input } from "@rocketseat/unform";
import React from "react";
import { FaCheck, FaChevronLeft } from "react-icons/fa";
import * as Yup from "yup";
import history from "../../services/history";
import { ButtonGeneric, Container } from "./styles";
const colorBack = `#cccccc 0% 0% no-repeat padding-box;`;
const colorDefault = `#7d40e7 0% 0% no-repeat padding-box;`;

const schema = Yup.object().shape({
  recipient: Yup.string().required("O destinário é obrigatóorio"),
  deliver: Yup.string().required("O entregador é obrigatóorio"),
  product: Yup.string().required("O produto é obrigatóorio")
});

export default function OrderRegister() {
  function handleSubmit({ recipient, deliver, product }) {
    console.log(recipient, deliver, product);
  }
  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <div className="flex-justify-between">
          <h2>Cadastro de encomendas</h2>
          <div className="flex-justify-between">
            <ButtonGeneric
              color={colorBack}
              onClick={e => {
                e.preventDefault();
                history.push("/order-list");
              }}
            >
              <FaChevronLeft color="#fff" />
              <span>VOLTAR</span>
            </ButtonGeneric>
            <ButtonGeneric color={colorDefault} className="mbl-16">
              <FaCheck color="#fff" />
              <span>SALVAR</span>
            </ButtonGeneric>
          </div>
        </div>
        <div className="group">
          <div className="primary-group">
            <div className="form-group">
              <label>Destinatário</label> <br />
              <Input name="recipient" placeholder="Digite o destinário"></Input>
            </div>
            <div className="form-group mbl-30">
              <label>Entregador</label>
              <br />
              <Input name="deliver" placeholder="Digite o entregador"></Input>
            </div>
          </div>

          <div className="form-group mbt-16">
            <label>Nome do produto</label>
            <br />
            <Input name="product" placeholder="Digite o produto"></Input>
          </div>
        </div>
      </Form>
    </Container>
  );
}
