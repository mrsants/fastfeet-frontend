import PropTypes from 'prop-types';
import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { recipientsDelete, recipientsUpdate } from '../../../store/modules/recipients/actions';

export default function PopoverRecipientUi({ data }) {
  const dispatch = useDispatch();

  function handleUpdate() {
    dispatch(
      recipientsUpdate({
        ...data,
        edit: true,
      })
    );
  }

  function handleDelete(param) {
    dispatch(recipientsDelete(param));
  }

  return (
    <>
      <div onClick={() => handleUpdate()}>
        <MdEdit size="16" color="#4D85EE" />
        <span>Editar</span>
      </div>
      <hr />
      <div onClick={()=> handleDelete(data.id)}>
        <MdDeleteForever size="16" color="#DE3B3B" />
        <span>Excluir</span>
      </div>
    </>
  );
}

PopoverRecipientUi.propTypes = {
  data: PropTypes.shape({}).isRequired,
};
