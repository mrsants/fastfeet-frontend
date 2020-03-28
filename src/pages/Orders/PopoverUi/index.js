import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { MdDeleteForever, MdEdit, MdRemoveRedEye } from "react-icons/md";
import history from "../../../services/history";
import { orderDelete, orderUpdate } from "../../../store/modules/orders/actions";
import ModalUi from "../ModalUi";
import { StyledPopover } from "./styles";

export default function PopoverUi({ id, open, anchorEl, call, data }) {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

   function handleDelete(id) {
    dispatch(orderDelete(id));  
  }

  return (
    <>
      <StyledPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={call}
        className="popover"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <div
          onClick={() => {
            handleOpenModal(true);
          }}
        >
          <MdRemoveRedEye size="16" color="#8E5BE8" />
          <span>Visualizar</span>
        </div>
        <hr />
        <div
          onClick={() => {
            history.push("/order-form-ui");
            dispatch(
              orderUpdate({
                ...data,
                edit: true
              })
            );
          }}
        >
          <MdEdit size="16" color="#4D85EE" />
          <span>Editar</span>
        </div>
        <hr />
        <div onClick={() => handleDelete(data.id)}>
          <MdDeleteForever size="16" color="#DE3B3B" />
          <span>Excluir</span>
        </div>
      </StyledPopover>

      <ModalUi open={openModal} call={handleCloseModal} data={data} />
    </>
  );
}
