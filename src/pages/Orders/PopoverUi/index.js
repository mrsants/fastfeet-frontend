import React, { useState } from "react";
import { MdDeleteForever, MdEdit, MdRemoveRedEye } from "react-icons/md";
import ModalUi from "../ModalUi";
import { StyledPopover } from "./styles";
import history from "../../../services/history";
import { useDispatch } from "react-redux";
import { orderUpdate } from "../../../store/modules/orders/actions";

export default function PopoverUi({ id, open, anchorEl, call, data }) {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

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
        <div onClick={() => {}}>
          <MdDeleteForever size="16" color="#DE3B3B" />
          <span>Excluir</span>
        </div>
      </StyledPopover>

      <ModalUi open={openModal} call={handleCloseModal} data={data} />
    </>
  );
}
