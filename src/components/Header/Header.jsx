import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => (
    <header className="main-header bg-white">
        <ul className="head">
            <li className="logo"><img src="" /></li>
            <li className="mx-5">ИДПО ВГУ</li>
        </ul>
        <ul className="head">
            <li className="">+7 (473) 255-04-81<br />+7 (473) 252-45-34</li>
            <li><NavLink className="btn bg-orange mx-5 px-5" to="/main/learn">Изучить</NavLink></li>
        </ul>
    </header>
);

export default Header;