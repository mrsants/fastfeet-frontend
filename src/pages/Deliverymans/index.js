/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaEllipsisH, FaPlus } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight, MdSearch } from 'react-icons/md';
import api from '../../services/api';
import { Container, Pagination, Table, ButtonRegister } from './styles';
import Popover from '../../components/Popover';
import ContentPopoverUi from './ContentPopoverUi';
import { deliverymansUpdate } from '../../store/modules/deliverymans/actions';

export default function Deliverymans() {
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [sizeList, setSizeList] = useState(0);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState();
  const [anchorEl, setAnchorEl] = useState();
  const dispatch = useDispatch();
  const deliverymansState = useSelector(state => state.deliverymans);

  const open = Boolean(anchorEl);

  const id = open ? 'simple-popover' : undefined;

  async function loadList(pageNumber) {
    try {
      const response = await api.get(`/deliverymans?name=${name}`, {
        params: {
          page: pageNumber,
        },
      });

      setSizeList(response.data.length);
      setList(response.data);
    } catch (err) {
      setError(true);
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
    loadList(page);
  }, [name, page, deliverymansState]);

  function handleUpdate() {
    dispatch(
      deliverymansUpdate({
        edit: false,
      })
    );
  }

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
              loadList();
            }}
            type="text"
            placeholder="Buscar por entregadores"
            disabled={error}
          />
        </div>

        <ButtonRegister onClick={() => handleUpdate()}>
          <FaPlus color="#ffffff" opacity="1" />
          <span>CADASTRAR</span>
        </ButtonRegister>
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
              {list.map(delivery => {
                return (
                  <tr key={delivery.id}>
                    <td>#{delivery.id}</td>
                    <td>
                      <img
                        src={delivery.avatar.url}
                        alt="Avatar do entregador"
                      />
                    </td>
                    <td>{delivery.name}</td>
                    <td>{delivery.email}</td>
                    <td
                      className="action"
                      aria-describedby={id}
                      variant="contained"
                      onClick={e => {
                        setAnchorEl(e.currentTarget);
                        setData(delivery);
                      }}
                    >
                      <FaEllipsisH color="#C6C6C6" size="10" opacity="1" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Table>
      )}

      {data && (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          call={handleClose}
          width="150px"
          height="94px"
        >
          <ContentPopoverUi data={data} />
        </Popover>
      )}

      {!sizeList && !error && (
        <div className="message">
          <strong>Não foi encontrado entregadores para o periodo!</strong>
        </div>
      )}

      {sizeList > 0 && (
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

      {error && (
        <div className="message">
          <strong>
            Ocorreu um erro, por favor tente mais tarde novamente!
          </strong>
        </div>
      )}
    </Container>
  );
}
