import React, { useEffect, useState } from "react";

import { Container, ListOrders } from "./styles";
import { Form, Input } from "@rocketseat/unform";
import { FaCircle, FaEllipsisH, FaPlus } from "react-icons/fa";
import api from "../../services/auth";
import history from "../../services/history";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function OrderList() {
  const [listOrderManagement, setListOrderManagement] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    async function loadOrder() {
      const response = await api.get("order-management");

      if (response && response.data && response.data.lenght) {
        setListOrderManagement(response.data);
        setActive(true);
      }
    }

    loadOrder();
  }, [listOrderManagement]);

  return (
    <Container>
      <h2>Gerenciando encomendas</h2>
      <Form>
        <Input name="buscar_encomendas" placeholder="Buscar por encomendas" />

        <Link className="register-redirect" to="/order-register">
          <FaPlus color="#ffffff" opacity="1" />
          <span>CADASTRAR</span>
        </Link>
      </Form>

      {active && (
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
              {listOrderManagement.map(order => {
                return (
                  <tr>
                    <td>#01</td>
                    <td>Ludwig van Beethoven</td>
                    <td>
                      <span className="dotName">JD</span>
                      John Doe
                    </td>
                    <td>Rio do Sul</td>
                    <td>Santa Catarina</td>
                    <td className="deliver">
                      <span className="dotStatus">
                        <FaCircle size="10" />
                        <strong>ENTREGUE</strong>
                      </span>
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
      {!active && (
        <div className="error">
          <strong>Não foi encontrado encomendas para o periodo!</strong>
        </div>
      )}
    </Container>
  );
}
