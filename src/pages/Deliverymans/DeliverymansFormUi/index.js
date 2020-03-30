/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Form } from '@rocketseat/unform';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaCheck, FaChevronLeft } from 'react-icons/fa';
import { IoMdImage } from 'react-icons/io';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import api from '../../../services/api';
import history from '../../../services/history';
import {
  deliverymansNewUpdate,
  deliverymansCreate,
} from '../../../store/modules/deliverymans/actions';

import {
  Avatar,
  ButtonBack,
  ButtonSave,
  Container,
  StyledInput,
} from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
});

export default function DeliverymansFormUi() {
  const avatarRef = useRef(null);
  const [file, setFile] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [upload, setUpload] = useState(false);
  const dispatch = useDispatch();

  const { id, edit } = useSelector(state => {
    return state.deliverymans.data;
  });

  const onButtonClick = async () => {
    avatarRef.current.click();
  };

  const onChange = async e => {
    const src = Array.from(e.target.files);
    setFile(src[0]);
  };

  async function uploadAvatar() {
    if (file) {
      const formData = new FormData();

      formData.append('photos', file);

      try {
        const res = await api.post('/photos', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setAvatar(res.data);
        toast.success('Upload da foto foi feito com sucesso!');
        setUpload(true);
      } catch (error) {
        toast.error('Ocorreu um erro ao fazer upload!');
      }
    }
  }

  useEffect(() => {
    uploadAvatar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  const handleSubmit = async ({ name, email }) => {
    if (avatar) {
      if (edit) {
        dispatch(deliverymansNewUpdate(id, name, email, avatar.id, id));
        setUpload(true);
      } else {
        dispatch(deliverymansCreate(name, email, avatar.id));
        setUpload(true);
      }
    } else {
      toast.error('Por favor nao é possivel criar um perfil sem um avatar');
    }
  };

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <div className="flex-justify-between">
          {edit ? (
            <h2>Edição de entregadores</h2>
          ) : (
            <h2>Cadastro de entregadores</h2>
          )}
          <div className="flex-justify-between">
            <ButtonBack
              onClick={e => {
                e.preventDefault();
                history.push('/deliverymans');
              }}
            >
              <FaChevronLeft color="#fff" />
              <span>VOLTAR</span>
            </ButtonBack>
            <ButtonSave className="mbl-16" type="submit">
              <FaCheck color="#fff" />
              <span>SALVAR</span>
            </ButtonSave>
          </div>
        </div>
        <>
          <Avatar>
            {!upload && (
              <div className="content" onClick={onButtonClick}>
                <IoMdImage size="40" color="#DDDDDD" />
                <label>Adicionar foto</label>
                <input
                  type="file"
                  id="avatarRef"
                  ref={avatarRef}
                  onChange={onChange}
                />
              </div>
            )}
            {upload && <img className="new-avatar" src={avatar.url} />}
          </Avatar>

          <div className="form-group">
            <label>Nome</label> <br />
            <StyledInput name="name" />
          </div>

          <div className="form-group mbt-16">
            <label>Email</label> <br />
            <StyledInput name="email" />
          </div>
        </>
      </Form>
    </Container>
  );
}
