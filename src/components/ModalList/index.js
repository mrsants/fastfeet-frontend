import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ImageAss from "../../assets/assinatura-teste.png";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "4px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1.5),
    width: "450px",
    height: "350px",
    fontSize: "14px",
    lineHeight: "24px"
  }
}));

export default function ModalList({ open, call }) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={call}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div>
              <strong id="transition-modal-title">
                Informações da encomenda
              </strong>
              <p>Rua Beethoven, 1729</p>
              <p>Diadema - SP</p>
              <p>09960-580</p>
            </div>

            <div className="mbt-20">
              <strong>Datas</strong> <br />
              <span>
                <strong>Retirada:</strong> 25/01/2020 <br />
              </span>
              <span>
                <strong>Entrega:</strong> 25/01/2020
              </span>
            </div>

            <div className="mbt-20">
              <strong>Assinatura do destinatário</strong>
            </div>

            <div className="mbt-20 flex-justify-center">
              <img src={ImageAss} />
            </div>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
