import React from "react";
import ReactDOM from 'react-dom';
import App from "./containers/App.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
// import { createBrowserHistory } from "history";
// import Admin from "Pages/Admin/Admin.jsx";
import {BrowserRouter} from "react-router-dom";


// const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);