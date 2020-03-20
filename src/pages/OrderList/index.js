import { Form, Input } from "@rocketseat/unform";
import React, { Component } from "react";
import { FaCircle, FaEllipsisH, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { isNull } from "util";
import api from "../../services/auth";
import { Container, DotStatus, ListOrders } from "./styles";

class OrderList extends Component {
  state = {
    listOrderManagement: [],
    sizeList: false
  };

  async componentWillMount() {
    const { data } = await api.get("order-management");

    if (Object.keys(data).length > 0) {
      this.setState({
        listOrderManagement: data
      });

      this.setState({
        sizeList: true
      });
    }
  }

  render() {
    const { listOrderManagement, sizeList } = this.state;

    console.log(listOrderManagement);
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

        {sizeList && (
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
                {sizeList &&
                  listOrderManagement.map((order, index) => {
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
        {!sizeList && (
          <div className="error">
            <strong>Não foi encontrado encomendas para o periodo!</strong>
          </div>
        )}
      </Container>
    );
  }
}

export default OrderList;
