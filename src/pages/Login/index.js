import { Form } from '@rocketseat/unform';
import React from 'react';
import logo from '../../assets/fastfeet-logo.png';
import { Root } from './styles';

export default function Login() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Root>
      <Form onSubmit={handleSubmit}>
        <div className="contentImage">
          <img src={logo} alt="Logo FastFeet" />
        </div>
        <label>SEU E-MAIL</label>
        <input name="email" type="email" placeholder="exemplo@email.com" />
        <label>SUA SENHA</label>
        <input name="password" type="password" placeholder="*******" />
        <button type="submit">Entrar no sistema</button>
      </Form>
    </Root>
  );
}
