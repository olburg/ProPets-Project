import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import Home from "./components/Home";
import FoundPets from "./components/FoundPets";

ReactDOM.render(
    <BrowserRouter>
        <Home />
        <FoundPets/>
    </BrowserRouter>
    ,
  document.getElementById('root')
);

