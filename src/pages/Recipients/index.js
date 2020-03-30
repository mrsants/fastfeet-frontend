/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { FaEllipsisH, FaPlus } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight, MdSearch } from 'react-icons/md';
import { useSelector } from 'react-redux';
import api from '../../services/api';
import history from '../../services/history';
import { Container, Pagination, Table, ButtonRegister } from './styles';

export default function Recipients() {
  const [listRecipient, setListRecipient] = useState([]);
  const [name, setName] = useState('');
  const [sizeList, setSizeList] = useState(0);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const recipientsState = useSelector(state => state.recipients);

  async function loadListRecipient(pageNumber) {
    try {
      const response = await api.get(`/recipient?name=${name}`, {
        params: {
          page: pageNumber,
        },
      });

      const data = response.data.map(order => ({
        ...order,
      }));

      setSizeList(response.data.length);
      setListRecipient(data);
    } catch (err) {
      setError(true);
    }
  }

  function prevPage() {
    if (page === 1) {
      return;
    }

    const pageNumber = page - 1;
    setPage(pageNumber);
  }

  function nextPage() {
    if (sizeList < 20) {
      return;
    }

    const pageNumber = page + 1;

    setPage(pageNumber);
  }

  useEffect(() => {
    loadListRecipient(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipientsState, name, page]);

  function handleUpdate() {
    history.push('/recipient-register');
  }

  return (
    <Container>
      <h2>Gerenciando destinatários</h2>
      <div className="content-header">
        <div className="search">
          <MdSearch size={20} color="#999" />
          <input
            onChange={e => {
              e.preventDefault();
              setName(e.target.value);
            }}
            type="text"
            placeholder="Buscar por destinatários"
            disabled={error}
          />
        </div>

        <ButtonRegister onClick={() => handleUpdate()}>
          <FaPlus color="#ffffff" opacity="1" />
          <span>CADASTRAR</span>
        </ButtonRegister>
      </div>

      {sizeList > 0 && (
        <Table>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {listRecipient.map((recipient, _) => {
                return (
                  <tr key={recipient.id}>
                    <td>#{recipient.id}</td>
                    <td>{recipient.name}</td>
                    <td>{`${recipient.street}, ${recipient.number}, ${recipient.city}, ${recipient.state}`}</td>
                    <td>
                      <FaEllipsisH color="#C6C6C6" size="10" opacity="1" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Table>
      )}

      {!sizeList && !error && (
        <div className="message">
          <strong>Não foi encontrado nenhum destino para o periodo!</strong>
        </div>
      )}

      {sizeList > 0 && (
        <Pagination>
          <span
            onClick={() => {
              prevPage();
            }}
          >
            <MdChevronLeft color="#ccc" size={20} />
          </span>
          <span
            onClick={() => {
              nextPage();
            }}
          >
            <MdChevronRight color="#ccc" size={20} />
          </span>
        </Pagination>
      )}

      {error && (
        <div className="message">
          <strong>
            Ocorreu um erro, por favor tente mais tarde novamente!
          </strong>
        </div>
      )}
    </Container>
  );
}
