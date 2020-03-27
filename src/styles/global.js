import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    overflow-y: hidden;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .mbt-16 {
      margin-top: 16px;
  }

  .mbr-16 {
    margin-right: 16px;
  }

  .mbt-16 {
    margin-top: 16px;
  }

  .mbt-20 {
    margin-top: 20px;
  }

  .mbl-30 {
      margin-left: 30px;
   }

   .flex {
    display: flex;
  }

  .flex-justify-between {
    display: flex;
    justify-content: space-between;
  }

  .flex-justify-center {
    display: flex;
    justify-content: center;
  }

  .grow0 {
    flex-grow: 0;
  }

  .grow1 {
    flex-grow: 1;
  }

  .grow2 {
    flex-grow: 2;
  }

  .label-color-red {
    color: #DE3B3B;
  }

  .MuiPopover-paper {
    box-shadow: none !important;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 2px #00000026;
    opacity: 1;
    width: 150px;
    height: 120px;
    padding: 15px;
    display:flex;
    align-self:center;
    justify-content: space-between;
    flex-direction: column;

    hr {
        width: 130px;
        border: 1px solid #EEEEEE;
        opacity: 1;
    }

    div {
      display: flex;
      align-items: center;

      span {
        text-align: left;
        letter-spacing: 0;
        color: #999999;
        opacity: 1;
        margin-left: 4px;
        cursor: pointer;
      }
    }
  }
`;
