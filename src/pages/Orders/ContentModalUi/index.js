import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { isNullOrUndefined } from 'util';

export default function ContentModalUi({ data }) {
  return (
    <>
      {data.status !== 'CANCELADA' ? (
        <>
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
                <strong>Retirada:</strong>{' '}
                {data.recipients &&
                  data.recipients.start_date &&
                  format(data.recipients.start_date, 'DD-MM-YYYY')}
                <br />
              </span>
              <span>
                <strong>Entrega:</strong>{' '}
                {data.recipients && data.recipients.end_date ? (
                  format(data.recipients.end_date, 'DD-MM-YYYY')
                ) : (
                  <strong>Produto não foi retirado para entrega!</strong>
                )}
              </span>
            </div>
          ) : (
            <div className="mbt-20">
              <strong className="label-color-red">
                Produto não foi retirado para entrega!
              </strong>
            </div>
          )}

          {data && !isNullOrUndefined(data.signatures) && (
            <>
              <div className="mbt-20">
                <strong>Assinatura do destinatário</strong>
              </div>
              <div className="mbt-20 flex-justify-center">
                <img src={data.signatures} alt="Imagem de assinatura" />
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <strong id="transition-modal-title">Informações da encomenda</strong>
          <div className="mbt-20">
            <strong className="label-color-red">
              Encomenda está cancelada!
            </strong>
          </div>{' '}
        </>
      )}
    </>
  );
}

ContentModalUi.propTypes = {
  data: PropTypes.shape({
    status: PropTypes.string.isRequired,
    recipients: PropTypes.shape({
      name: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      complement: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zip_code: PropTypes.string.isRequired,
      start_date: PropTypes.string,
      end_date: PropTypes.string,
    }),
    signatures: PropTypes.string,
  }),
};

ContentModalUi.defaultProps = {
  data: {
    recipients: {
      start_date: undefined,
      end_date: undefined,
      signatures: null,
    },
  },
};
