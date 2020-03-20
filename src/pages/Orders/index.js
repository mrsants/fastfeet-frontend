import React, { useEffect, useState } from "react";
import { FaCircle, FaEllipsisH, FaPlus } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { isNull } from "util";
import Pagination from "../../components/Pagination";
import api from "../../services/auth";
import { Container, DotStatus, ListOrders } from "./styles";
export default function Orders() {
  const [listOrders, setListOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nameProduct, setNameProduct] = useState("");
  const [sizeList, setSizeList] = useState(0);
  const [error, setError] = useState(false);
  async function loadListOrders(page) {
    try {
      setLoading(true);

      const response = await api.get(
        `/order-management?product=${nameProduct}`,
        {
          params: {
            page
          }
        }
      );

      const data = response.data.map(order => ({
        ...order
      }));

      setSizeList(response.data.length);
      setListOrders(data);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadListOrders(1);
  }, []);

  return (
    <Container>
      <h2>Gerenciando encomendas</h2>
      <div className="content-header">
        <div className="search">
          <MdSearch size={20} color="#999" />
          <input
            onChange={e => {
              e.preventDefault();
              setNameProduct(e.target.value);
              loadListOrders();
            }}
            type="text"
            placeholder="Buscar por encomendas"
            disabled={error}
          />
        </div>

        <Link className="register-redirect" to="/order-register">
          <FaPlus color="#ffffff" opacity="1" />
          <span>CADASTRAR</span>
        </Link>
      </div>

      {sizeList > 0 && (
        <ListOrders>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Destinatário</th>
                <th>Entregador</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {listOrders.map((order, index) => {
                return (
                  <tr key={index}>
                    <td>#{order.id}</td>
                    <td>{order.recipients.name}</td>
                    <td>
                      <span className="dotName">JD</span>
                      {order.deliverymans.name}
                    </td>
                    <td>{order.recipients.city}</td>
                    <td>{order.recipients.state}</td>
                    <td className="deliver">
                      <DotStatus
                        backgroundColor={
                          (order.status === "PENDENTE" && "#F0F0DF") ||
                          (order.status === "CANCELADA" && "#FAB0B0") ||
                          (order.status === "ENTREGUE" && "#DFF0DF") ||
                          (order.status === "RETIRADA" && "#BAD2FF")
                        }
                        color={
                          (order.status === "PENDENTE" && "#C1BC35") ||
                          (order.status === "CANCELADA" && "#DE3B3B") ||
                          (order.status === "ENTREGUE" && "#2CA42B") ||
                          (order.status === "RETIRADA" && "#4D85EE")
                        }
                      >
                        <FaCircle size="10" />
                        <strong>
                          {!isNull(order.canceled_at)
                            ? "CANCELADO"
                            : "ENTREGUE"}
                        </strong>
                      </DotStatus>
                    </td>
                    <td>
                      <FaEllipsisH color="#C6C6C6" size="10" opacity="1" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ListOrders>
      )}

      {!sizeList && !loading && !error && (
        <div className="message">
          <strong>Não foi encontrado encomendas para o periodo!</strong>
        </div>
      )}

      {sizeList > 0 && !loading && (
        <Pagination loadItems={loadListOrders} itemsLenght={sizeList} />
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
