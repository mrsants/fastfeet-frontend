import React, { useEffect, useState } from "react";
import { FaEllipsisH, FaPlus } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom/cjs/react-router-dom";
import api from "../../services/auth";
import { Container, Pagination, Table } from "./styles";

export default function Problems() {
  const [listProblems, setListProblems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sizeList, setSizeList] = useState(0);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  function prevPage() {
    if (page === 1) {
      return;
    }

    const pageNumber = page - 1;
    setPage(pageNumber);
    loadListProblems(pageNumber);
  }

  function nextPage() {
    if (sizeList < 20) {
      return;
    }

    const pageNumber = page + 1;

    setPage(pageNumber);
    loadListProblems(pageNumber);
  }

  async function loadListProblems(page) {
    try {
      setLoading(true);

      const response = await api.get(`/problems`, {
        params: {
          page
        }
      });

      const data = response.data.map(order => ({
        ...order
      }));

      setSizeList(response.data.length);
      setListProblems(data);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadListProblems(page);
  }, []);

  return (
    <Container>
      <h2>Problemas na entrega</h2>
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
              {listProblems.map((Problems, index) => {
                return (
                  <tr key={index}>
                    <td>#{Problems.id}</td>
                    <td>{Problems.name}</td>
                    <td>{`${Problems.street}, ${Problems.number}, ${Problems.city}, ${Problems.state}`}</td>
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
          <strong>Não foi encontrado problemas de entregas para o periodo!</strong>
        </div>
      )}

      {sizeList > 0 && !loading && (
        <Pagination>
          <span
            onClick={() => {
              prevPage();
              loadListProblems(page);
            }}
          >
            <MdChevronLeft color="#ccc" size={20} />
          </span>
          <span
            onClick={() => {
              nextPage();
              loadListProblems(page);
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
