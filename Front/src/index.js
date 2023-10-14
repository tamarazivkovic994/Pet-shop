import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="798118603151-qj82s092efvs3aq0156oo0d9ae4vpacd.apps.googleusercontent.com">
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  </GoogleOAuthProvider>
);
