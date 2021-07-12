import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";

// import { Provider } from "react-redux";
import Home from "./components/Home";
import Pages from "./layout/Pages";


ReactDOM.render(
    // <Provider store={}>
        <BrowserRouter>
            <Pages />

        </BrowserRouter>,
    // </Provider>,

  document.getElementById('root')
);

