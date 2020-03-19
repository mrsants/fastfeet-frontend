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
    sizeList: false,
    activePage: 15
  };

  async componentWillMount() {
    const { data } = await api.get("order-management");

    const size = Object.keys(data).length;

    if (data && size > 0) {
      this.setState({
        listOrderManagement: data
      });

      this.setState({
        sizeList: true
      });
    }
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
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
                              !isNull(order.canceled_at) ? `#efcfcf` : `#dff0df`
                            }
                            color={
                              !isNull(order.canceled_at) ? `#de3b3b` : `#2ca42b`
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
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </Container>
    );
  }
}

export default OrderList;
