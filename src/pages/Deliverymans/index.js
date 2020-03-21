import React, { useEffect, useState } from "react";
import { FaEllipsisH, FaPlus } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom/cjs/react-router-dom";
import api from "../../services/auth";
import { Container, Pagination, Table } from "./styles";

export default function Deliverymans() {
  const [listDeliverymans, setListDeliverymans] = useState([]);
  const [loading, setLoading] = useState(false);
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
    loadListDeliverymans(pageNumber);
  }

  function nextPage() {
    if (sizeList < 20) {
      return;
    }

    const pageNumber = page + 1;

    setPage(pageNumber);
    loadListDeliverymans(pageNumber);
  }

  async function loadListDeliverymans(page) {
    try {
      setLoading(true);

      const response = await api.get(`/deliverymans?name=${name}`, {
        params: {
          page
        }
      });

      const data = response.data.map(order => ({
        ...order
      }));

      setSizeList(response.data.length);
      setListDeliverymans(data);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadListDeliverymans(page);
  }, []);

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
                <th>Foto</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {listDeliverymans.map((delivery, index) => {
                return (
                  <tr key={index}>
                    <td>#{delivery.id}</td>
                    <td>
                      <img src={delivery.avatar.url} />
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

      {!sizeList && !loading && !error && (
        <div className="message">
          <strong>Não foi encontrado entregadores para o periodo!</strong>
        </div>
      )}

      {sizeList > 0 && !loading && (
        <Pagination>
          <span
            onClick={() => {
              prevPage();
              loadListDeliverymans(page);
            }}
          >
            <MdChevronLeft color="#ccc" size={20} />
          </span>
          <span
            onClick={() => {
              nextPage();
              loadListDeliverymans(page);
            }}
          >
            <MdChevronRight color="#ccc" size={20} />
          </span>
        </Pagination>
      )}

      {error && !loading && (
        <div className="message">
          <strong>
            Ocorreu um erro, por favor tente mais tarde novamente!
          </strong>
        </div>
      )}
    </Container>
  );
}
