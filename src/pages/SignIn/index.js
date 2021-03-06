import { Form, Input } from '@rocketseat/unform';
import React from 'react';
import * as Yup from 'yup';
import logo from '../../assets/fastfeet-logo.png';
import { signInRequest } from '../../store/modules/auth/actions';
import { Root, BtnSignUp } from './styles';
import { useDispatch } from 'react-redux';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Root>
      <Form schema={schema} onSubmit={handleSubmit}>
        <div className="contentImage">
          <img src={logo} alt="Logo FastFeet" />
        </div>
        <label>SEU E-MAIL</label>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <label>SUA SENHA</label>
        <Input name="password" type="password" placeholder="*******" />
        <button type="submit">Entrar no sistema</button>
        <div className="flex-justify-center">
          <BtnSignUp>Cadastrar-se</BtnSignUp>
        </div>
      </Form>
    </Root>
  );
}
