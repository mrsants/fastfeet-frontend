import React from "react";
import { MdDeleteForever, MdRemoveRedEye } from "react-icons/md";
import { StyledPopover } from "./styles";
import ModalProblem from "../ModalProblem";

export default function PopoverOrderList({ id, open, anchorEl, call, data }) {
  const [openModal, setOpenModal] = React.useState(false);

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
        <div onClick={() => {}}>
          <MdDeleteForever size="16" color="#DE3B3B" />
          <span>Cancelar encomenda</span>
        </div>
      </StyledPopover>

      <ModalProblem open={openModal} call={handleCloseModal} data={data} />
    </>
  );
}
