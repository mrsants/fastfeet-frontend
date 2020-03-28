/**
 * Modules
 */
import { Form } from "@rocketseat/unform";
import React, { useRef, useState, useEffect } from "react";
import { FaCheck, FaChevronLeft } from "react-icons/fa";
import { IoMdImage } from "react-icons/io";
import { toast } from "react-toastify";
import { isNullOrUndefined } from "util";
import * as Yup from "yup";

/**
 * Services
 */

import history from "../../../services/history";
import api from "../../../services/api";
/**
 * StyleSheet
 */
import {
  Container,
  ButtonBack,
  ButtonSave,
  StyledInput,
  Avatar
} from "./styles";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório")
});

/**
 * @function <FunctionComponentElement> DeliverymansRegister
 * @param {*} rest
 * @returns {ReactDOM} Returns a form to register a deliverymans
 */
export default function DeliverymansRegister() {
  const avatarRef = useRef(null);
  const [file, setFile] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [upload, setUpload] = useState(false);
  const onButtonClick = async () => {
    avatarRef.current.click();
  };

  const onChange = async e => {
    const src = Array.from(e.target.files);
    setFile(src[0]);
  };

  useEffect(() => {
    const upload = async () => {
      if (file) {
        const formData = new FormData();

        formData.append("photos", file);

        try {
          const res = await api.post("/photos", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          });

          setAvatar(res.data);
          setUpload(true);
        } catch (error) {}
      }
    };

    upload();
  }, [file]);

  const handleSubmit = async ({ name, email }) => {
    if (!isNullOrUndefined(avatar)) {
      try {
        await api.post("/deliverymans", {
          name,
          email,
          avatar_id: avatar.id
        });

        setUpload(true);

        toast.success("Entregador cadastro com sucesso!");

        setTimeout(() => {
          history.push("/deliverymans");
        }, 3000);
      } catch (error) {
        toast.error("Ocorreu um erro ao criar um entregador!");
      }
    } else {
      toast.error("Por favor nao é possivel criar um perfil sem um avatar");
    }
  };

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <div className="flex-justify-between">
          <h2>Cadastro de encomendas</h2>
          <div className="flex-justify-between">
            <ButtonBack
              onClick={e => {
                e.preventDefault();
                history.push("/deliverymans");
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
