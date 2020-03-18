import React from "react";

import { Container, ListOrders } from "./styles";
import { Form, Input } from "@rocketseat/unform";
import { FaCircle, FaEllipsisH, FaPlus } from "react-icons/fa";

export default function OrderList() {
  return (
    <Container>
      <h2>Gerenciando encomendas</h2>
      <Form>
        <Input name="buscar_encomendas" placeholder="Buscar por encomendas" />
        <button>
          <FaPlus color="#ffffff" opacity="1" />
          <span>CADASTRAR</span>
        </button>
      </Form>

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
          </tbody>
        </table>
      </ListOrders>
    </Container>
  );
}
