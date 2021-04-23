import React from "react";
import ProgramSeparation from "Containers/ProgramSeparation/ProgramSeparation.jsx";
import ProgramDirection from "Containers/ProgramDirection/ProgramDirection.jsx";
import ProgramType from "Containers/ProgramType/ProgramType.jsx";
const MainBlockSection = () => (
    <section className="main-block">
    <h1>Дополнительное образование</h1>
    <div className="row mx-auto show-btns">
        <div className="col-lg-3">
            <a className="btn d-block bg-orange mx-auto mb-md-2 btn-text text-uppercase" href="">Показать все</a>
        </div>
        <div className="col-lg-3">
            <ProgramSeparation />
        </div>
        <div className="col-lg-3">
            <ProgramDirection />
        </div>
        <div className="col-lg-3">
            <ProgramType />

        </div>
    </div>
</section>
);

export default MainBlockSection;