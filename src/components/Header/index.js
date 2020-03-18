import React, { Component } from "react";
import logo from "../../assets/fastfeet-logo.png";
import { Container, Menu, MenuItem, Config } from "./styles";
import { bindActionCreators } from "redux";
import * as Actions from "../../store/modules/auth/actions";
import { connect } from "react-redux";

class Header extends Component {
  redirectTo() {
    const { signOut } = this.props;

    signOut();
  }

  render() {
    return (
      <Container>
        <Menu>
          <img src={logo} alt="Logo Fastfeet"/>
          <MenuItem>ENCOMENDAS</MenuItem>
          <MenuItem>ENTREGADORES</MenuItem>
          <MenuItem>DESTINATÁRIOS</MenuItem>
          <MenuItem>PROBLEMAS</MenuItem>
        </Menu>

        <Config>
          <strong>Admin FastFeet</strong>
          <span onClick={() => this.redirectTo()}>sair do sistema</span>
        </Config>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(null, mapDispatchToProps)(Header);
