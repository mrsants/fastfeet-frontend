/**
 * Modules
 */
import { Form } from "@rocketseat/unform";
import React from "react";
import { FaCheck, FaChevronLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import * as Yup from "yup";
import api from "../../../services/api";
/**
 * Services
 */
import history from "../../../services/history";
/**
 * StyleSheet
 */
import { ButtonBack, ButtonSave, Container, StyledInput } from "./styles";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  street: Yup.string().required("A rua é obrigatória"),
  number: Yup.string().required("O número é obrigatório"),
  complement: Yup.string(),
  state: Yup.string().required("O estado é obrigatório"),
  city: Yup.string().required("A cidade é obrigatório"),
  zip_code: Yup.string().required("O cep é obrigatório")
});

/**
 * @function <FunctionComponentElement> DeliverymansRegister
 * @param {*} rest
 * @returns {ReactDOM} Returns a form to register a deliverymans
 */
export default function RecipientRegister() {
  const handleSubmit = async data => {
    {
      try {
        await api.post("/recipient", {
          ...data
        });

        toast.success("Destinário cadastro com sucesso!");

        setTimeout(() => {
          history.push("/recipient");
        }, 3000);
      } catch (error) {
        toast.error("Ocorreu um erro ao criar um destinário!");
      }
    }
  };

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <div className="flex-justify-between">
          <h2>Cadastro de encomendas</h2>
          <div className="flex-justify-between">
            <ButtonBack
              onClick={e => {
                e.preventDefault();
                history.push("/deliverymans");
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
        <>
          <div className="form-group">
            <label>Nome</label> <br />
            <StyledInput name="name" placeholder="Digite seu nome" />
          </div>
          <div className="flex mbt-16">
            <div className="grow2">
              <label>Rua</label> <br />
              <StyledInput name="street" placeholder="Digite sua rua" />
            </div>
            <div className="grow0 mbl-16 mbr-16">
              <label>Número</label> <br />
              <StyledInput name="number" placeholder="Digite seu nome" />
            </div>
            <div className="grow0">
              <label>Complemento</label> <br />
              <StyledInput name="complement" />
            </div>
          </div>

          <div className="flex-justify-between mbt-16">
            <div className="form-group">
              <label>Cidade</label> <br />
              <StyledInput name="city" placeholder="Digite sua cidade" />
            </div>
            <div className="form-group mbl-16 mbr-16">
              <label>Estado</label> <br />
              <StyledInput name="state" placeholder="Digite seu estado" />
            </div>
            <div className="form-group">
              <label>CEP</label> <br />
              <StyledInput name="zip_code" placeholder="Digite seu cep" />
            </div>
          </div>
        </>
      </Form>
    </Container>
  );
}
