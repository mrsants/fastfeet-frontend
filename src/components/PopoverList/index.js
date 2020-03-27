import Popover from "@material-ui/core/Popover";
import React from "react";
import { MdDeleteForever, MdEdit, MdRemoveRedEye } from "react-icons/md";
import ModalList from "../ModalList";
 
export default function PopoverList({ id, open, anchorEl, call,  data }) {
  const [openModal, setOpenModal] = React.useState(false);


  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Popover
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
          <MdEdit size="16" color="#4D85EE" />
          <span>Editar</span>
        </div>
        <hr />
        <div onClick={() => {}}>
          <MdDeleteForever size="16" color="#DE3B3B" />
          <span>Excluir</span>
        </div>
      </Popover>

      <ModalList open={openModal} call={handleCloseModal} data={data} />
    </>
  );
}
