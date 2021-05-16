import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import {getInfoByRoute} from "Actions/getInfoByRoute";
import {getLearnData} from "Actions/getLearnTableData.js";
// import uniqueLinks from "../../utils/uniqueLinks";

const mapStateToProps = state => ({
    learnData: state.learn.learnData
})

const mapDispatchToProps = dispatch => ({
    pushRoute: route => dispatch(getInfoByRoute(route)),
    getLearnData: id => dispatch(getLearnData(id)),
});

const ProgramSeparation = props => {

    const [programSeparationLinks, setProgramSeparationLinks] = useState([]);

    // const getProgramSeparationObjects = () => {
    //     const { learnData } = props;
    //     const programSeparationObjects = [];
    //
    //     if(learnData.length) {
    //         learnData.map((item) => {
    //             if(Object.keys(item.programSeparation)) {
    //                 return programSeparationObjects.push(item.programSeparation);
    //             }
    //         })
    //     }
    //     return programSeparationObjects;
    // }

    useEffect(() => {
        async function fetchData() {
            let response = await fetch("http://194.67.116.27:8080/api/get_category?orderType=LIST&categoryType=ProgramSeparation");
            response = await response.json();
            setProgramSeparationLinks(response);
        }

        fetchData();
    }, [])

    const updateData = (e, id) => {
        e.preventDefault();
        const { getLearnData } = props;
        getLearnData(`?programSeparationId=${id}`);
    }

    const renderProgramLinks = () => {
        return programSeparationLinks.map((item, index) => {
            return <li key={index} onClick={(e) => updateData(e, item.id)}><a className="" href="">{item.name}</a></li>
        });
    }

    return (
        <div className="dropdown show" id="learn-dropdown1">
            <a className="btn btn-outline-orange d-block bg-orange mx-auto mb-md-2 btn-text text-uppercase"
               id="dropdownMenuLink" href="#" data-toggle="dropdown" data-display="static" aria-haspopup="true"
               aria-expanded="false">ПО ПОДРАЗДЕЛЕНИЯМ</a>

            <div className="dropdown-menu dropdown-menu-lg-right" aria-labelledby="dropdownMenuLink">
                <ul>
                    {renderProgramLinks()}
                    {/*<li><a className="" href="#">Коммуникация</a></li>*/}
                    {/*<li><a className="" href="#">Искусство и культура</a></li>*/}
                    {/*<li><a className="" href="#">Здравоохранение</a></li>*/}
                    {/*<li><a className="" href="#">Анимация</a></li>*/}
                    {/*<li><a className="" href="#">Фотография</a></li>*/}
                    {/*<li><a className="" href="#">Безопасность и экология</a></li>*/}
                    {/*<li><a className="" href="#">Геодезия и геология</a></li>*/}
                    {/*<li><a className="" href="#">Математика, информатика и информационные технологии</a></li>*/}
                    {/*<li><a className="" href="#">Естественные науки и новые технологии</a></li>*/}
                    {/*<li><a className="" href="#">Бизнес-образование</a></li>*/}
                    {/*<li><a className="" href="#">История</a></li>*/}
                    {/*<li><a className="" href="#">Юриспруденция. Государственное муниципальное управлениея</a></li>*/}
                    {/*<li><a className="" href="#">Довузовское и послевузовское образование</a></li>*/}
                    {/*<li><a className="" href="#">Педагогика и психология</a></li>*/}
                    {/*<li><a className="" href="#">Изучение языковя</a></li>*/}
                    {/*<li><a className="" href="#">Журналистика и филология</a></li>*/}
                </ul>
            </div>
        </div>
    )
}

ProgramSeparation.propTypes = {
    learnData: propTypes.array.isRequired,
    pushRoute: propTypes.func.isRequired,
    getLearnData: propTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramSeparation);