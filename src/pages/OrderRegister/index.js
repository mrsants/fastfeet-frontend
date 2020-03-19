import { Form, Input } from "@rocketseat/unform";
import React from "react";
import { Container } from "./styles";

export default function OrderRegister() {
  return (
    <Container>
      <h2>Cadastro de encomendas</h2>
      <Form>
        <div className="group">
          <div className="primary-group">
            <div className="form-group">
              <label for="recipient">Destinatário</label> <br />
              <Input
                name="recipient"
                placeholder="Ludwig van Beethoven"
              ></Input>
            </div>
            <div className="form-group mbl-30">
              <label for="deliver">Entregador</label>
              <br />
              <Input name="deliver" placeholder="John Doe"></Input>
            </div>
          </div>

          <div className="form-group mbt-16">
            <label for="deliver">Nome do produto</label>
            <br />
            <Input name="deliver" placeholder="Yamaha SX7"></Input>
          </div>
        </div>
      </Form>
    </Container>
  );
}
