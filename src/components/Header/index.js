import React from "react";
import logo from "../../assets/fastfeet-logo.png";
import { Container, Menu, MenuItem, Config } from "./styles";

export default function Header() {
  return (
    <Container>
      <Menu>
        <img src={logo} />
        <MenuItem>ENCOMENDAS</MenuItem>
        <MenuItem>ENTREGADORES</MenuItem>
        <MenuItem>DESTINATÁRIOS</MenuItem>
        <MenuItem>PROBLEMAS</MenuItem>
      </Menu>

      <Config>
        <strong>Admin FastFeet</strong>
        <span>sair do sistema</span>
      </Config>
    </Container>
  );
}
