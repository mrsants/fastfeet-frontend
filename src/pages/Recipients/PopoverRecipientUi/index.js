import PropTypes from 'prop-types';
import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { recipientsUpdate } from '../../../store/modules/recipients/actions';

export default function PopoverRecipientUi({ data }) {
  const dispatch = useDispatch();

  function handleRedirectTo() {
    dispatch(
      recipientsUpdate({
        ...data,
        edit: true,
      })
    );
  }

  return (
    <>
      <div onClick={() => handleRedirectTo()}>
        <MdEdit size="16" color="#4D85EE" />
        <span>Editar</span>
      </div>
      <hr />
      <div>
        <MdDeleteForever size="16" color="#DE3B3B" />
        <span>Excluir</span>
      </div>
    </>
  );
}

PopoverRecipientUi.propTypes = {
  data: PropTypes.shape({}).isRequired,
};
