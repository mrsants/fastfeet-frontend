/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { MdCancel, MdEdit, MdRemoveRedEye } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  orderDelete,
  orderUpdate,
} from '../../../store/modules/orders/actions';
import Modal from '../../../components/Modal';
import ContentModalUi from '../ContentModalUi';

export default function PopoveOrdersUi({ data }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  function handleOpenModal() {
    setOpen(true);
  }

  function handleCloseModal() {
    setOpen(false);
  }

  function handleDelete(param) {
    dispatch(orderDelete(param));
  }

  function handleUpdate(data) {
    dispatch(
      orderUpdate({
        ...data,
        edit: true,
      })
    );
  }

  return (
    <>
      <div
        onClick={() => {
          handleOpenModal(true);
        }}
      >
        <MdRemoveRedEye size="16" color="#8E5BE8" />
        <span>Visualizar</span>
      </div>
      <hr />
      <div onClick={() => handleUpdate(data)}>
        <MdEdit size="16" color="#4D85EE" />
        <span>Editar</span>
      </div>
      <hr />
      <div onClick={() => handleDelete(data)}>
        <MdCancel size="16" color="#DE3B3B" />
        <span>Cancelar</span>
      </div>

      <Modal open={open} call={handleCloseModal}>
        <ContentModalUi data={data} />
      </Modal>
    </>
  );
}

PopoveOrdersUi.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
