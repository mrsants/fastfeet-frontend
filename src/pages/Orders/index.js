/**
 * Modules
 */
import Popover from "@material-ui/core/Popover";
import React, { useEffect, useState } from "react";
import { FaCircle, FaEllipsisH, FaPlus } from "react-icons/fa";
import {
  MdChevronLeft,
  MdChevronRight,
  MdDeleteForever,
  MdEdit,
  MdRemoveRedEye,
  MdSearch
} from "react-icons/md";
import { Link } from "react-router-dom/cjs/react-router-dom";
import ModalList from "../../components/ModalList";
/**
 * Services
 */
import api from "../../services/api";
/**
 * Stylesheet
 */
import { Container, DotStatus, ListOrders, Pagination } from "./styles";

/**
 * @function <FunctionComponentElement> Orders
 * @param {*} rest
 * @returns {ReactDOM} Returns a list of the orders
 */

export default function Orders() {
  const [listOrders, setListOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nameProduct, setNameProduct] = useState("");
  const [sizeList, setSizeList] = useState(0);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const open = Boolean(anchorEl);

  const id = open ? "simple-popover" : undefined;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function prevPage() {
    if (page === 1) {
      return;
    }

    const pageNumber = page - 1;
    setPage(pageNumber);
    loadListOrders(pageNumber);
  }

  function nextPage() {
    if (sizeList < 20) {
      return;
    }

    const pageNumber = page + 1;

    setPage(pageNumber);
    loadListOrders(pageNumber);
  }

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
      setLoading(null);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadListOrders(1);
  }, []);

  return (
    <>
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
          <>
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
                        <td className="avatar-uui">
                          <img
                            src={order.deliverymans.avatar.url}
                            alt="Avatar do entregador"
                          />
                          <span>{order.deliverymans.name}</span>
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
                            <strong>{order.status}</strong>
                          </DotStatus>
                        </td>
                        <td
                          className="action"
                          aria-describedby={id}
                          variant="contained"
                          onClick={handleClick}
                        >
                          <FaEllipsisH color="#C6C6C6" size="10" opacity="1" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </ListOrders>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              className="popover"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <div
                onClick={() => {
                  handleOpenModal(true);
                  console.log("visualizar");
                  console.log(open);
                }}
              >
                <MdRemoveRedEye size="16" color="#8E5BE8" />
                <span>Visualizar</span>
              </div>
              <hr />
              <div onClick={() => {}}>
                <MdEdit size="16" color="#4D85EE" />
                <span>Editar</span>
              </div>
              <hr />
              <div onClick={() => {}}>
                <MdDeleteForever size="16" color="#DE3B3B" />
                <span>Excluir</span>
              </div>
            </Popover>
          </>
        )}

        {!sizeList && !loading && !error && (
          <div className="message">
            <strong>Não foi encontrado encomendas para o periodo!</strong>
          </div>
        )}

        {sizeList > 0 && !loading && (
          <Pagination>
            <span
              onClick={() => {
                prevPage();
                loadListOrders(page);
              }}
            >
              <MdChevronLeft color="#ccc" size={20} />
            </span>
            <span
              onClick={() => {
                nextPage();
                loadListOrders(page);
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

      <ModalList open={openModal} call={handleCloseModal} />
    </>
  );
}
