import React from "react";

const MainBlockSection = () => (
    <section className="main-block">
    <h1>Дополнительное образование</h1>
    <div className="row mx-auto show-btns">
        <div className="col-lg-3">
            <a className="btn d-block bg-orange mx-auto mb-md-2 btn-text text-uppercase" href="">Показать все</a>
        </div>
        <div className="col-lg-3">
            <div className="dropdown show" id="learn-dropdown1">
                <a className="btn btn-outline-orange d-block bg-orange mx-auto mb-md-2 btn-text text-uppercase"
                   id="dropdownMenuLink" href="#" data-toggle="dropdown" data-display="static" aria-haspopup="true"
                   aria-expanded="false">ПО ПОДРАЗДЕЛЕНИЯМ</a>

                <div className="dropdown-menu dropdown-menu-lg-right" aria-labelledby="dropdownMenuLink">
                    <ul>
                        <li><a className="" href="#">Коммуникация</a></li>
                        <li><a className="" href="#">Искусство и культура</a></li>
                        <li><a className="" href="#">Здравоохранение</a></li>
                        <li><a className="" href="#">Анимация</a></li>
                        <li><a className="" href="#">Фотография</a></li>
                        <li><a className="" href="#">Безопасность и экология</a></li>
                        <li><a className="" href="#">Геодезия и геология</a></li>
                        <li><a className="" href="#">Математика, информатика и информационные технологии</a></li>
                        <li><a className="" href="#">Естественные науки и новые технологии</a></li>
                        <li><a className="" href="#">Бизнес-образование</a></li>
                        <li><a className="" href="#">История</a></li>
                        <li><a className="" href="#">Юриспруденция. Государственное муниципальное управлениея</a></li>
                        <li><a className="" href="#">Довузовское и послевузовское образование</a></li>
                        <li><a className="" href="#">Педагогика и психология</a></li>
                        <li><a className="" href="#">Изучение языковя</a></li>
                        <li><a className="" href="#">Журналистика и филология</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="dropdown show" id="learn-dropdown1">
                <a className="btn btn-outline-orange d-block bg-orange mx-auto mb-md-2 btn-text text-uppercase"
                   id="dropdownMenuLink2" href="#" data-toggle="dropdown" data-display="static" aria-haspopup="true"
                   aria-expanded="false">ПО НАПРАВЛЕНИЯМ</a>

                <div className="dropdown-menu dropdown-menu-lg-right" aria-labelledby="dropdownMenuLink2">
                    <ul>
                        <li><a className="" href="#">Гуманитарные науки</a></li>
                        <li><a className="" href="#">Здравоохранение</a></li>
                        <li><a className="" href="#">Искусство и культура</a></li>
                        <li><a className="" href="#">Математические и естественные науки</a></li>
                        <li><a className="" href="#">Науки об обществе</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="dropdown show dropdown-menu-lg-right" id="learn-dropdown1">
                <a className="btn btn-outline-orange d-block bg-orange mx-auto mb-md-2 btn-text text-uppercase"
                   id="dropdownMenuLink3" href="#" data-toggle="dropdown" data-display="static" aria-haspopup="true"
                   aria-expanded="false">ПО ВИДАМ ПРОГРАММ</a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink3">
                    <ul>
                        <li className="dropdown-submenu">
                            <a href="#" className="" data-toggle="dropdown" role="button" aria-haspopup="true"
                               aria-expanded="true"> <span className="nav-label">Общеобразовательные</span> <span
                                className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="">Повышение квалификации</a></li>
                                <li><a href="">Профессиональная переподготовка без присвоения квалификации</a></li>
                                <li><a href="">Профессиональная переподготовка с присвоением квалификации</a></li>
                            </ul>
                        </li>
                        <li className="dropdown-submenu">
                            <a href="#" className="" data-toggle="dropdown" role="button" aria-haspopup="true"
                               aria-expanded="true"> <span className="nav-label">Профессиональные</span> <span
                                className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="">Повышение квалификации</a></li>
                                <li><a href="">Профессиональная переподготовка без присвоения квалификации</a></li>
                                <li><a href="">Профессиональная переподготовка с присвоением квалификации</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
);

export default MainBlockSection;