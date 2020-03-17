import { Form, Input } from "@rocketseat/unform";
import React, { Component } from "react";
import * as Yup from "yup";
import logo from "../../assets/fastfeet-logo.png";
import { Root } from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../../store/modules/auth/actions";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: Yup.string().required("A senha é obrigatória")
});

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ email, password }) {
    const { signRequest } = this.props;
    signRequest(email, password);
  }

  render() {
    return (
      <Root>
        <Form schema={schema} onSubmit={this.handleSubmit}>
          <div className="contentImage">
            <img src={logo} alt="Logo FastFeet" />
          </div>
          <label>SEU E-MAIL</label>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
          <label>SUA SENHA</label>
          <Input name="password" type="password" placeholder="*******" />
          <button type="submit">Entrar no sistema</button>
        </Form>
      </Root>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth.data
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
