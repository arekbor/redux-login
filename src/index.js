import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./components/Login";
import User from "./components/User";
import './index.css';
import {Provider} from 'react-redux';
import store from './app/store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/user" element={<User/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>, 
document.getElementById('root'));