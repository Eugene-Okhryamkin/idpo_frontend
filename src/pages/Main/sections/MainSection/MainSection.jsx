import React from "react";
import {NavLink} from "react-router-dom";

const MainSection = () => (
    <section className="main-section">
        <div className="col-lg-6">
            <h1 className="text-white">Откройте новые <span className="text-orange">перспективы!</span></h1>
        </div>
        <div className="col-lg-8">
            <h3 className="text-white">C Институтом Дополнительного Профессионального Образования</h3>
        </div>
        <div>
            <NavLink className="btn bg-orange px-5" to="/learn">Изучить</NavLink>
        </div>
    </section>
);

export default MainSection;