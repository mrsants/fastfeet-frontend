import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import logo from "../../assets/fastfeet-logo.png";
import history from "../../services/history";
import * as Actions from "../../store/modules/auth/actions";
import { MenuItem, Config, Container, Menu } from "./styles";

class Header extends Component {

  state = {
    menu: {
      controls: [
        {
          id: 1,
          description: "ENCOMENDAS",
          path: "/orders"
        },
        {
          id: 2,
          description: "ENTREGADORES",
          path: "/delivers"
        },
        {
          id: 3,
          description: "DESTINATÁRIOS",
          path: "/recipient"
        },
        {
          id: 4,
          description: "PROBLEMAS",
          path: "/problems"
        }
      ]
    },
    font: {
      color: "#fff",
      index: 0
    }
  };

  redirectTo() {
    const { signOut } = this.props;

    signOut();
  }

  render() {
    return (
      <Container>
        <Menu>
          <img
            src={logo}
            alt="Logo Fastfeet"
            onClick={() => {
              history.push("/order-list");
            }}
          />
          {this.state.menu.controls.map((menuItem, index) => {
            return (
              <MenuItem
              key={menuItem.id}
              index={this.state.font.index}
                className={`bold-${index}`}
                onClick={e => {
                  e.preventDefault();
                  this.setState({
                    font: {
                      index
                    }
                  });

                  history.push(menuItem.path);
                }}
              >
                {menuItem.description}
              </MenuItem>
            );
          })}
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
