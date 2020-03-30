/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { FaCircle, FaEllipsisH, FaPlus } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight, MdSearch } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import Popover from '../../components/Popover';
import ContentPopoverUi from './ContentPopoverUi';
import api from '../../services/api';
import { orderUpdate } from '../../store/modules/orders/actions';

import {
  ButtonResgiter,
  Container,
  DotStatus,
  ListOrders,
  Pagination,
} from './styles';

export default function Orders() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [sizeList, setSizeList] = useState(0);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const orderState = useSelector(state => state.orders);

  const open = Boolean(anchorEl);

  const id = open ? 'simple-popover' : undefined;

  async function loadListOrders(pageNumber) {
    try {
      setLoading(true);

      const response = await api.get(`/order-management?product=${name}`, {
        params: {
          page: pageNumber,
        },
      });

      setSizeList(response.data.length);
      setList(response.data);
      setLoading(null);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function prevPage() {
    if (page === 1) {
      return;
    }

    const pageNumber = page - 1;
    setPage(pageNumber);
  }

  function nextPage() {
    if (sizeList < 20) {
      return;
    }

    const pageNumber = page + 1;

    setPage(pageNumber);
  }

  useEffect(() => {
    loadListOrders(page);
  }, [name, page, orderState]);

  function handleUpdate() {
    dispatch(
      orderUpdate({
        edit: false,
      })
    );
  }

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
                setName(e.target.value);
              }}
              type="text"
              placeholder="Buscar por encomendas"
              disabled={error}
            />
          </div>

          <ButtonResgiter
            onClick={() => {
              handleUpdate();
            }}
          >
            <FaPlus color="#ffffff" opacity="1" />
            <span>CADASTRAR</span>
          </ButtonResgiter>
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
                {list.map(order => {
                  return (
                    <tr key={order.id}>
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
                            (order.status === 'PENDENTE' && '#F0F0DF') ||
                            (order.status === 'CANCELADA' && '#FAB0B0') ||
                            (order.status === 'ENTREGUE' && '#DFF0DF') ||
                            (order.status === 'RETIRADA' && '#BAD2FF')
                          }
                          color={
                            (order.status === 'PENDENTE' && '#C1BC35') ||
                            (order.status === 'CANCELADA' && '#DE3B3B') ||
                            (order.status === 'ENTREGUE' && '#2CA42B') ||
                            (order.status === 'RETIRADA' && '#4D85EE')
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
                        onClick={e => {
                          setAnchorEl(e.currentTarget);
                          setData(order);
                        }}
                      >
                        <FaEllipsisH color="#C6C6C6" size="10" opacity="1" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </ListOrders>
        )}

        {data && (
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            call={handleClose}
            width="150px"
            height="120px"
          >
            <ContentPopoverUi data={data} />
          </Popover>
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
              }}
            >
              <MdChevronLeft color="#ccc" size={20} />
            </span>
            <span
              onClick={() => {
                nextPage();
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
    </>
  );
}
