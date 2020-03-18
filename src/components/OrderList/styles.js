import styled from "styled-components";

export const Container = styled.div`
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 34px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
      width: 220px;
      height: 36px;
      padding: 4px;
      &::placeholder {
        text-align: left;
        letter-spacing: 0;
        color: #999999;
        opacity: 1;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #7d40e7 0% 0% no-repeat padding-box;
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
    }
  }
`;

export const ListOrders = styled.div`
  margin-top: 22px;
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 20px;
    thead {
      text-align: left;
      tr {
        th {
          font-size: 16px;
          font-weight: bold;
          text-align: center;
          letter-spacing: 0;
          color: #444444;
          opacity: 1;
        }
        th:last-child {
          text-align: right;
        }
      }
    }

    tbody {
      background: #ffffff 0% 0% no-repeat padding-box;
      border-radius: 4px;
      opacity: 1;
      text-align: left;
      margin-top: 14px;
      tr {
        height: 50px;
        td {
          background: #ffffff 0% 0% no-repeat padding-box;
          opacity: 1;
          border: none;
          text-align: center;
          letter-spacing: 0;
          color: #666666;
          opacity: 1;
          font-size: 16px;
          padding: 8px;
          border-spacing: none;

          .dotName {
            width: 35px;
            height: 35px;
            opacity: 1;
            padding: 5px;
            border-radius: 50%;
            font-size: 16px;
            background: #f4effc 0% 0% no-repeat padding-box;
            text-align: left;
            letter-spacing: 0;
            color: #a28fd0;
            opacity: 1;
            margin-right: 2px;
          }

          &.deliver {
            letter-spacing: 0;
            color: #2ca42b;
            opacity: 1;
            font-size: 14px;
            .dotStatus {
              background: #dff0df;
              border-radius: 12px;
              opacity: 1;
              width: 99px;
              height: 25px;
              padding: 4px;
            }

            strong {
              margin-left: 2px;
            }
          }
        }
      }

      td:last-child {
        text-align: right;
      }
    }
  }
`;
