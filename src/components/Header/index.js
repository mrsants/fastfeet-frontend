/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../assets/fastfeet-logo.png';
import history from '../../services/history';
import { Config, Container, Menu, MenuItem } from './styles';
import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
  const [controls, setControls] = useState([
    {
      id: 0,
      description: 'ENCOMENDAS',
      path: '/orders',
    },
    {
      id: 1,
      description: 'ENTREGADORES',
      path: '/deliverymans',
    },
    {
      id: 2,
      description: 'DESTINATÁRIOS',
      path: '/recipient',
    },
    {
      id: 3,
      description: 'PROBLEMAS',
      path: '/problems',
    },
  ]);

  const [fontIndex, setFontIndex] = useState(0);
  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

  function handleRedirectTo() {
    history.push('/orders');
    setFontIndex(0);
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  useEffect(() => {
    const updatePath = controls.filter((menuFindItem, index) => {
      return menuFindItem.path === history.location.pathname;
    });

    if (updatePath) {
      setFontIndex(updatePath[0].id);
    }
  }, [controls]);
  return (
    <Container>
      <Menu>
        <div onClick={() => handleRedirectTo()}>
          <img src={logo} alt="Logo Fastfeet" />
        </div>
        {controls.map((menuItem, index) => {
          return (
            <MenuItem
              key={menuItem.id}
              index={fontIndex}
              className={`bold-${index}`}
              onClick={e => {
                e.preventDefault();
                setFontIndex(index);
                history.push(menuItem.path);
              }}
            >
              {menuItem.description}
            </MenuItem>
          );
        })}
      </Menu>

      <Config>
        <strong>{auth.user.name}</strong>
        <span onClick={() => handleSignOut()}>sair do sistema</span>
      </Config>
    </Container>
  );
}
