import React, { Component } from "react";
import logo from "../../assets/fastfeet-logo.png";
import { Container, Menu, StyledLink, Config } from "./styles";
import { bindActionCreators } from "redux";
import * as Actions from "../../store/modules/auth/actions";
import { connect } from "react-redux";
import history from "../../services/history";

class Header extends Component {
  constructor() {
    super();
  }

  state = {
    menu: {
      controls: [
        {
          id: 1,
          description: "ENCOMENDAS",
          path: "/orders"
        },
        {
          id: 1,
          description: "ENTREGADORES",
          path: "/delivers"
        },
        {
          id: 1,
          description: "DESTINATÁRIOS",
          path: "/recipient"
        },
        {
          id: 1,
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
              <StyledLink
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
              </StyledLink>
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
