import { Input } from "@rocketseat/unform";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 34px;
  margin-left: 245px;
  margin-right: 245px;

  h2 {
    text-align: left;
    letter-spacing: 0;
    color: #444444;
    opacity: 1;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 34px;
  }

  form {
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 4px;
    opacity: 1;
    padding: 25px;
    top: 150px;
    left: 270px;
    margin: 0 auto;
    width: 900px;

    label {
      font-weight: bold;
      font-size: 14px;
      text-align: left;
      letter-spacing: 0;
      color: #444444;
      opacity: 1;
    }

    .group {
      .primary-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
   
      .form-group {
      
        span {
          line-height: 22px;
          font-weight: bold;
          color: #de3b3b;
        }
      }

      margin-top: 10px;
      margin-bottom: 16px;
    }
  }

`;

export const ButtonSave = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #7d40e7;
  border-radius: 4px;
  opacity: 1;
  padding: 4px;
  width: 142px;
  height: 36px;

  span {
    font-weight: bold;
    text-align: center;
    letter-spacing: 0;
    color: #ffffff;
    opacity: 1;
    font-size: 14px;
    margin-left: 6px;
  }
`;

export const ButtonBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #cccccc;
  border-radius: 4px;
  opacity: 1;
  padding: 4px;
  width: 142px;
  height: 36px;

  span {
    font-weight: bold;
    text-align: center;
    letter-spacing: 0;
    color: #ffffff;
    opacity: 1;
    font-size: 14px;
    margin-left: 6px;
  }
`;

export const StyledInput = styled(Input)`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dddddd;
  border-radius: 4px;
  opacity: 1;
  height: 38px;
  padding: 4px;
  width: 100%;
  margin-top: 10px;
  &::placeholder {
    text-align: left;
    letter-spacing: 0;
    color: #999999;
    opacity: 1;
  }
`;
