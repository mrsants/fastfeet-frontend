import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { format } from "date-fns";
import React from "react";
import { isNullOrUndefined } from "util";

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

export default function ModalUi({ open, call, data }) {
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
                <strong id="transition-modal-title">
                  Informações da encomenda
                </strong>
                <p>{data.recipients.street}</p>
                <p>{data.recipients.city}</p>
                <p>{data.recipients.zip_code}</p>
              </div>

              {!isNullOrUndefined(data.recipients.start_date) ? (
                <div className="mbt-20">
                  <strong>Datas</strong> <br />
                  <span>
                    <strong>Retirada:</strong>{" "}
                    {data.recipients &&
                      data.recipients.start_date &&
                      format(data.recipients.start_date, "DD-MM-YYYY")}
                    <br />
                  </span>
                  {
                    <span>
                      <strong>Entrega:</strong>{" "}
                      {data.recipients && data.recipients.end_date ? (
                        format(data.recipients.end_date, "DD-MM-YYYY")
                      ) : (
                        <strong>Produto não foi retirado para entrega!</strong>
                      )}
                    </span>
                  }
                </div>
              ) : (
                <div className="mbt-20">
                  <strong className="label-color-red">
                    Produto não foi retirado para entrega!
                  </strong>
                </div>
              )}

              {data && !isNullOrUndefined(data.signatures) ? (
                <>
                  <div className="mbt-20">
                    <strong>Assinatura do destinatário</strong>
                  </div>
                  <div className="mbt-20 flex-justify-center">
                    <img src={data.signatures} />
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </Fade>
        </Modal>
      )}
    </div>
  );
}
