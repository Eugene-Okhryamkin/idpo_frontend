import React, {useEffect, useState} from "react";
// import uniqueLinks from "../../utils/uniqueLinks";
import {getInfoByRoute} from "Actions/getInfoByRoute";
import {getLearnData} from "Actions/getLearnTableData";
import {connect} from "react-redux";
import propTypes from "prop-types";

const mapStateToProps = state => ({
    learnData: state.learn.learnData
})

const mapDispatchToProps = dispatch => ({
    pushRoute: route => dispatch(getInfoByRoute(route)),
    getLearnData: id => dispatch(getLearnData(id)),
});

const ProgramType = props => {

    const [programTypeLinks, setProgramTypeLinks] = useState([]);
    // const getProgramTypeObjects = () => {
    //     const { learnData } = props;
    //     const programTypeObjects = [];
    //
    //     if(learnData.length) {
    //         learnData.map((item) => {
    //             if(Object.keys(item.Type)) {
    //                 return programTypeObjects.push(item.programType);
    //             }
    //         })
    //     }
    //     return programTypeObjects;
    // }

    const updateData = (e, id) => {
        e.preventDefault();
        const { getLearnData } = props;
        getLearnData(`?programType=${id}`);
    }

    useEffect(() => {
        async function fetchData() {
            let response = await fetch("http://194.67.116.27:8080/api/get_category?orderType=TREE&categoryType=ProgramType");
            response = await response.json();
            setProgramTypeLinks(response);
        }

        fetchData();


    }, [])

    const renderProgramLinks = () => {
        //<li key={index} onClick={(e) => updateData(e, item.id)}><a className="" href="">{item.name}</a></li>
        return programTypeLinks.map((item, index) => {
            if(Object.keys(parent).length) {
                if(Object.keys(item.children).length) {
                    console.log(item.children);
                    return (
                        <li className="dropdown-submenu" key={index}>
                            <a href="#" className="" data-toggle="dropdown" role="button" aria-haspopup="true"
                               aria-expanded="true"> <span className="nav-label">{item.parent.name}</span><span className="caret"></span></a>

                            <ul className="dropdown-menu">
                                {
                                    item.children.map((item, index) => {
                                        return <li key={index} onClick={(e) => updateData(e, item.id)}><a href="">{item.name}</a></li>
                                    })
                                }

                            </ul>
                        </li>
                    )
                }
                return <li key={index} onClick={(e) => updateData(e, item.id)}><a className="" href="">{item.parent.name}</a></li>
            }

        });
    }

    return (
        console.log(programTypeLinks),
        <div className="dropdown show dropdown-menu-lg-right" id="learn-dropdown1">
            <a className="btn btn-outline-orange d-block bg-orange mx-auto mb-md-2 btn-text text-uppercase"
               id="dropdownMenuLink3" href="#" data-toggle="dropdown" data-display="static" aria-haspopup="true"
               aria-expanded="false">ПО ВИДАМ ПРОГРАММ</a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink3">
                <ul>
                    {renderProgramLinks()}
                    {/*<li className="dropdown-submenu">*/}
                    {/*    <a href="#" className="" data-toggle="dropdown" role="button" aria-haspopup="true"*/}
                    {/*       aria-expanded="true"> <span className="nav-label">Общеобразовательные</span> <span*/}
                    {/*        className="caret"></span></a>*/}

                    {/*    <ul className="dropdown-menu">*/}
                    {/*        <li><a href="">Повышение квалификации</a></li>*/}
                    {/*        <li><a href="">Профессиональная переподготовка без присвоения квалификации</a></li>*/}
                    {/*        <li><a href="">Профессиональная переподготовка с присвоением квалификации</a></li>*/}
                    {/*    </ul>*/}
                    {/*</li>*/}
                    {/*<li className="dropdown-submenu">*/}
                    {/*    <a href="#" className="" data-toggle="dropdown" role="button" aria-haspopup="true"*/}
                    {/*       aria-expanded="true"> <span className="nav-label">Профессиональные</span> <span*/}
                    {/*        className="caret"></span></a>*/}
                    {/*    <ul className="dropdown-menu">*/}
                    {/*        <li><a href="">Повышение квалификации</a></li>*/}
                    {/*        <li><a href="">Профессиональная переподготовка без присвоения квалификации</a></li>*/}
                    {/*        <li><a href="">Профессиональная переподготовка с присвоением квалификации</a></li>*/}
                    {/*    </ul>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </div>
    )
};

ProgramType.propTypes = {
    getLearnData: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgramType);