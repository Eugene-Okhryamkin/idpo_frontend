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

const ProgramDirection = props => {

    const [programDirectionLinks, setProgramDirectionLinks] = useState([]);

    // const getProgramDirectionObjects = () => {
    //     const { learnData } = props;
    //     const programDirectionObjects = [];
    //
    //     if(learnData.length) {
    //         learnData.map((item) => {
    //             if(Object.keys(item.programDirection)) {
    //                 return programDirectionObjects.push(item.programDirection);
    //             }
    //         })
    //     }
    //     return programDirectionObjects;
    // }

    useEffect(() => {
        async function fetchData() {
            let response = await fetch("http://194.67.116.27:8080/api/get_category?orderType=LIST&categoryType=ProgramDirection");
            response = await response.json();
            setProgramDirectionLinks(response);
        }

        fetchData();
    }, [])

    const updateData = (e, id) => {
        e.preventDefault();
        const { getLearnData } = props;
        getLearnData(`?programDirection=${id}`);
    }

    const renderProgramLinks = () => {
        return programDirectionLinks.map((item, index) => {
            return <li key={index} onClick={(e) => updateData(e, item.id)}><a className="" href="">{item.name}</a></li>
        });
    }



    return (
        <div className="dropdown show" id="learn-dropdown1">
            <a className="btn btn-outline-orange d-block bg-orange mx-auto mb-md-2 btn-text text-uppercase"
               id="dropdownMenuLink2" href="#" data-toggle="dropdown" data-display="static" aria-haspopup="true"
               aria-expanded="false">ПО НАПРАВЛЕНИЯМ</a>

            <div className="dropdown-menu dropdown-menu-lg-right" aria-labelledby="dropdownMenuLink2">
                <ul>
                    {renderProgramLinks()}
                </ul>
            </div>
        </div>
    )
}

ProgramDirection.propTypes = {
    learnData: propTypes.array.isRequired,
    pushRoute: propTypes.func.isRequired,
    getLearnData: propTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramDirection);