import { Form } from '@rocketseat/unform';
import React from 'react';
import { FaCheck, FaChevronLeft } from 'react-icons/fa';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import history from '../../../services/history';
import { ButtonBack, ButtonSave, Container, StyledInput } from './styles';
import {
  recipientsCreate,
  recipientsNewUpdate,
} from '../../../store/modules/recipients/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  street: Yup.string().required('A rua é obrigatória'),
  number: Yup.string().required('O número é obrigatório'),
  complement: Yup.string(),
  state: Yup.string().required('O estado é obrigatório'),
  city: Yup.string().required('A cidade é obrigatório'),
  zip_code: Yup.string().required('O cep é obrigatório'),
});

/**
 * @function <FunctionComponentElement> DeliverymansRegister
 * @param {*} rest
 * @returns {ReactDOM} Returns a form to register a deliverymans
 */
export default function RecipientsFormUi() {
  const { id, edit } = useSelector(state => state.recipients.data);
  const dispatch = useDispatch();

  function handleRedirectTo() {
    return e => {
      e.preventDefault();
      history.push('/recipients');
    };
  }

  function handleSubmit(data) {
    if (edit) {
      dispatch(recipientsNewUpdate(id, data));
    } else {
      dispatch(recipientsCreate(data));
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <div className="flex-justify-between">
          {edit ? (
            <h2>Edição de destinatário</h2>
          ) : (
            <h2>Cadastro de destinatário</h2>
          )}
          <div className="flex-justify-between">
            <ButtonBack onClick={handleRedirectTo()}>
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
            <label htmlFor="name">Nome</label> <br />
            <StyledInput name="name" placeholder="Digite seu nome" />
          </div>
          <div className="flex mbt-16">
            <div className="grow2">
              <label htmlFor="street">Rua</label> <br />
              <StyledInput name="street" placeholder="Digite sua rua" />
            </div>
            <div className="grow0 mbl-16 mbr-16">
              <label htmlFor="number">Número</label> <br />
              <StyledInput name="number" placeholder="Digite seu nome" />
            </div>
            <div className="grow0">
              <label htmlFor="complement">Complemento</label> <br />
              <StyledInput name="complement" />
            </div>
          </div>

          <div className="flex-justify-between mbt-16">
            <div className="form-group">
              <label htmlFor="city">Cidade</label> <br />
              <StyledInput name="city" placeholder="Digite sua cidade" />
            </div>
            <div className="form-group mbl-16 mbr-16">
              <label htmlFor="state">Estado</label> <br />
              <StyledInput name="state" placeholder="Digite seu estado" />
            </div>
            <div className="form-group">
              <label htmlFor="zip_code">CEP</label> <br />
              <StyledInput name="zip_code" placeholder="Digite seu cep" />
            </div>
          </div>
        </>
      </Form>
    </Container>
  );
}
