/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { FaEllipsisH, FaPlus } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight, MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import api from '../../services/api';
import { Container, Pagination, Table } from './styles';

export default function Deliverymans() {
  const [listDeliverymans, setListDeliverymans] = useState([]);
  const [name, setName] = useState('');
  const [sizeList, setSizeList] = useState(0);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  async function loadListDeliverymans(pageNumber) {
    try {
      const response = await api.get(`/deliverymans?name=${name}`, {
        params: {
          page: pageNumber,
        },
      });

      setSizeList(response.data.length);
      setListDeliverymans(response.data);
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
    loadListDeliverymans(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadListDeliverymans(page);
  }, [page]);

  return (
    <Container>
      <h2>Gerenciando entregadores</h2>
      <div className="content-header">
        <div className="search">
          <MdSearch size={20} color="#999" />
          <input
            onChange={e => {
              e.preventDefault();
              setName(e.target.value);
              loadListDeliverymans();
            }}
            type="text"
            placeholder="Buscar por entregadores"
            disabled={error}
          />
        </div>

        <Link className="register-redirect" to="/deliverymans-register">
          <FaPlus color="#ffffff" opacity="1" />
          <span>CADASTRAR</span>
        </Link>
      </div>

      {sizeList > 0 && (
        <Table>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Foto</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {listDeliverymans.map(delivery => {
                return (
                  <tr key={delivery.id}>
                    <td>#{delivery.id}</td>
                    <td>
                      <img
                        src={delivery.avatar.url}
                        alt="Avatar do entregador"
                      />
                    </td>
                    <td>{delivery.name}</td>
                    <td>{delivery.email}</td>
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
          <strong>Não foi encontrado entregadores para o periodo!</strong>
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
