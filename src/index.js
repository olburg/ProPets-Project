import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";

// import { Provider } from "react-redux";
import Home from "./components/Home";


ReactDOM.render(
    // <Provider store={}>
        <BrowserRouter>
            <Home />

        </BrowserRouter>,
    // </Provider>,

  document.getElementById('root')
);

