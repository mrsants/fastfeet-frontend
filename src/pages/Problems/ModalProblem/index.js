import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

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

export default function ModalProblem({ open, call, data }) {
  const classes = useStyles();

  return (
    <div>
      {data && (
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
                <strong id="transition-modal-title">VISUALIZAR PROBLEMA</strong>
                <p>{data.description}</p>
              </div>
            </div>
          </Fade>
        </Modal>
      )}
    </div>
  );
}
