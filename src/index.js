import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "react-fontawesome"
// import "components/fonts/fonts.css"
import './index.css';
import { BrowserRouter } from "react-router-dom";



// import { Provider } from "react-redux";

import Pages from "./layout/Pages";


ReactDOM.render(
    // <Provider store={}>
        <BrowserRouter>
            <Pages />

        </BrowserRouter>,
    // </Provider>,

  document.getElementById('root')
);

