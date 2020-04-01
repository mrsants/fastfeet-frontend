import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Root = styled.div`
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 360px;
    padding: 30px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 10px #00000033;
    border-radius: 4px;
    opacity: 1;

    .contentImage {
      display: flex;
      align-self: center;
      margin-top: 36px;
      margin-bottom: 36px;
    }

    label {
      margin-top: 15px;
      margin-bottom: 10px;
      font-size: 12px;
      color: #444444;
      font-weight: bold;
      text-align: left;
      letter-spacing: 0;
      opacity: 1;
    }

    input {
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
      padding: 15px;

      &::placeholder {
        background: #fff;
        text-align: left;
        letter-spacing: 0;
        color: #999999;
        opacity: 1;
      }
    }

    button {
      margin-top: 15px;
      background: #7d40e7 0% 0% no-repeat padding-box;
      border-radius: 4px;
      opacity: 1;
      color: #fff;
      padding: 15px;
      font-weight: bold;
    }
  }
`;

export const BtnSignUp = styled(Link).attrs({
  to: '/sign-up',
})`
  margin-top: 16px;
  color: #ccc;
  &:hover {
    color: #7d40e7;
  }
`;
