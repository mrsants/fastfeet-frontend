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
          id: 0,
          description: "ENCOMENDAS",
          path: "/orders"
        },
        {
          id: 1,
          description: "ENTREGADORES",
          path: "/deliverymans"
        },
        {
          id: 2,
          description: "DESTINATÁRIOS",
          path: "/recipient"
        },
        {
          id: 3,
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

  componentDidMount() {
    let updatePath = this.state.menu.controls.filter((menuFindItem, index) => {
      return menuFindItem.path === history.location.pathname;
    });

    this.setState({
      font: {
        index: updatePath[0] && updatePath[0].id
      }
    });
  }

  render() {
    const { auth } = this.props;
    const { menu } = this.state;

    return (
      <Container>
        <Menu>
          <img
            src={logo}
            alt="Logo Fastfeet"
            onClick={() => {
              history.push("/orders");
            }}
          />
          {menu.controls.map((menuItem, index) => {
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
          <strong>{auth.user.name}</strong>
          <span onClick={() => this.redirectTo()}>sair do sistema</span>
        </Config>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
