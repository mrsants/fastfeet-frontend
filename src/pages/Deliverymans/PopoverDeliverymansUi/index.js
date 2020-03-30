/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import {
  deliverymansUpdate,
  deliverymansDelete,
} from '../../../store/modules/deliverymans/actions';

export default function PopoverDeliverymansUi({ data }) {
  const dispatch = useDispatch();

  function handleUpdate() {
    dispatch(
      deliverymansUpdate({
        ...data,
        edit: true,
      })
    );
  }

  function handleDelete(id) {
    dispatch(deliverymansDelete(id));
  }

  return (
    <>
      <div onClick={() => handleUpdate()}>
        <MdEdit size="16" color="#4D85EE" />
        <span>Editar</span>
      </div>
      <hr />
      <div onClick={() => handleDelete(data.id)}>
        <MdDeleteForever size="16" color="#DE3B3B" />
        <span>Excluir</span>
      </div>
    </>
  );
}

PopoverDeliverymansUi.propTypes = {
  data: PropTypes.shape({}).isRequired,
};
