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
    height: 220px;
    margin: 0 auto;

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
      .mbl-30 {
        margin-left: 30px;
      }
      .form-group {

        &.mbl-30 {
          margin-left: 30px;
        }

        &.mbt-16 {
          margin-top: 16px;
        }
        input {
          background: #ffffff 0% 0% no-repeat padding-box;
          border: 1px solid #dddddd;
          border-radius: 4px;
          opacity: 1;
          height: 36px;
          padding: 4px;
          width: 100%;
          margin-top: 10px;
          &::placeholder {
            text-align: left;
            letter-spacing: 0;
            color: #999999;
            opacity: 1;
          }
        }
      }

      margin-top: 10px;
      margin-bottom: 16px;
    }
  }
`;
