/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form } from '@rocketseat/unform';
import { FaCheck, FaChevronLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import history from '../../../services/history';
import {
  orderCreate,
  orderNewUpdate,
} from '../../../store/modules/orders/actions';
import DeliverymanInput from './DeliverymanInput';
import RecipientInput from './RecipientInput';
import { ButtonBack, ButtonSave, Container, StyledInput } from './styles';

/**
 * @function <FunctionComponentElement> OrderFormUi
 * @param {*} rest
 * @returns {ReactDOM} Returns a form to create a delivery schedule
 */

export default function OrderFormUi() {
  const dispatch = useDispatch();
  const { id, edit } = useSelector(state => state.orders.data);

  return (
    <Container>
      <Form
        onSubmit={({ recipient_id, deliveryman_id, product }) => {
          if (edit) {
            dispatch(
              orderNewUpdate(
                recipient_id.value,
                deliveryman_id.value,
                product,
                id
              )
            );
          } else {
            dispatch(
              orderCreate(recipient_id.value, deliveryman_id.value, product)
            );
          }
        }}
      >
        <div className="flex-justify-between">
          {edit ? (
            <h2>Edição de encomendas</h2>
          ) : (
            <h2>Cadastro de encomendas</h2>
          )}
          <div className="flex-justify-between">
            <ButtonBack
              onClick={e => {
                e.preventDefault();
                history.push('/orders');
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
              placeholder="Digite o nome do produto"
            />
          </div>
        </div>
      </Form>
    </Container>
  );
}
