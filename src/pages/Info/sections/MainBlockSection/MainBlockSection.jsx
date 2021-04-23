import React from "react";
import {NavLink} from "react-router-dom";

const MainBlockSection = () => (
    <section className="main-block">
        <h1 className="text-orange">Информация о программе</h1>
        <h4 className="my-5">«Внедрение инновационных медиатехнологий в образовательном процессе высшей школы»</h4>
        <p>Гуманитарные науки<br /> Средства массовой информации и информационно-библиотечное дело<br /> Подразделение:
            Факультет журналистики</p>
        <NavLink className="col-lg-4 my-5 btn btn-outline-orange d-block btn-text text-uppercase" to="/learn">ВЕРНУТЬСЯ К
            ПРОГРАММАМ</NavLink>
    </section>
);

export default MainBlockSection;