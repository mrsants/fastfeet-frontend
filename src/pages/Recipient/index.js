import React, { useEffect, useState } from "react";
import { FaEllipsisH, FaPlus } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom/cjs/react-router-dom";
import api from "../../services/api";
import { Container, Pagination, Table } from "./styles";

export default function Recipient() {
  const [listRecipient, setListRecipient] = useState([]);
  const [name, setName] = useState("");
  const [sizeList, setSizeList] = useState(0);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);

  function prevPage() {
    if (page === 1) {
      return;
    }

    const pageNumber = page - 1;
    setPage(pageNumber);
    loadListRecipient(pageNumber);
  }

  function nextPage() {
    if (sizeList < 20) {
      return;
    }

    const pageNumber = page + 1;

    setPage(pageNumber);
    loadListRecipient(pageNumber);
  }

  async function loadListRecipient(page) {
    try {

      const response = await api.get(`/recipient?name=${name}`, {
        params: {
          page
        }
      });

      const data = response.data.map(order => ({
        ...order
      }));

      setSizeList(response.data.length);
      setListRecipient(data);
    } catch (err) {
      setError(true);
    }
  }

  useEffect(() => {
    loadListRecipient(1);
  });

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
              loadListRecipient();
            }}
            type="text"
            placeholder="Buscar por destinatários"
            disabled={error}
          />
        </div>

        <Link className="register-redirect" to="/order-register">
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
                <th>Nome</th>
                <th>Endereço</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {listRecipient.map((recipient, index) => {
                return (
                  <tr key={index}>
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
              loadListRecipient(page);
            }}
          >
            <MdChevronLeft color="#ccc" size={20} />
          </span>
          <span
            onClick={() => {
              nextPage();
              loadListRecipient(page);
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
