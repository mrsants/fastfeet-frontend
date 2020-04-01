import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import logo from '../../assets/fastfeet-logo.png';
import { signUpRequest } from '../../store/modules/auth/actions';
import { BtnSignIn, Root } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <Root>
      <Form schema={schema} onSubmit={handleSubmit}>
        <div className="contentImage">
          <img src={logo} alt="Logo FastFeet" />
        </div>
        <label>SEU NOME</label>
        <Input name="name" placeholder="Nome completo" />
        <label>SEU E-MAIL</label>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <label>SUA SENHA</label>
        <Input name="password" type="password" placeholder="*******" />
        <button type="submit">Cadastrar-se</button>
        <div className="flex-justify-center">
          <BtnSignIn>Entrar</BtnSignIn>
        </div>
      </Form>
    </Root>
  );
}
