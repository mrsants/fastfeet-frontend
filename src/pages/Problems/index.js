import React, { useEffect, useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import api from "../../services/api";
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
    loadListProblems(1);
  }, []);

  return (
    <Container>
      <h2>Problemas na entrega</h2>
      {sizeList > 0 && (
        <Table>
          <table>
            <thead>
              <tr>
                <th>Encomenda</th>
                <th>Problema</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {listProblems.map((problem, index) => {
                return (
                  <tr key={index}>
                    <td>#{problem.id}</td>
                    <td>{problem.description}</td>
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
