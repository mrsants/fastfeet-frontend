import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import "./config/ReacttotronConfig";
import Routes from "./routes";
import history from "./services/history";
import { persistor, store } from "./store";
import GlobalStyle from "./styles/global";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}
