import React, {useEffect} from "react";
// import {NavLink} from "react-router-dom";
import {setId} from "Actions/getInfoByIDAction.js";
import { connect } from "react-redux";
import propTypes from "prop-types";
import {useHistory} from "react-router";
import {getLearnData} from "Actions/getLearnTableData.js";

const mapDispatchToProps = dispatch => ({
    setId: id => dispatch(setId(id)),
    getLearnData: () => dispatch(getLearnData())
});

const mapStateToProps = state => ({
    learnData: state.learn.learnData,
    storeRoute: state.learnRoute.route
});

const LearnTableContainer = props => {

    const { setId , getLearnData, learnData } = props;
    const history = useHistory();

    useEffect(() => {
        getLearnData();
    }, [] )

    const setInfoByID = id => {
        setId(id);
        history.push(`info/${id}`);
    }

    // const sortInfo = () => {
    //     console.log(route);
    //     getLearnData(route);
    // }

    const renderTable = () => {
        if(learnData.length) {
            return learnData.map((item, index) => {
                return (
                    <tr key={index}>
                        <th>{item.programGroup}</th>
                        <th className="text-orange" onClick={() => setInfoByID(item.id)} style={{cursor: "pointer"}}>{item.name}</th>
                        {/*<td>{item.audienceCategory}</td>*/}
                        <td>{item.formTraining}</td>
                        <td>{item.duration}</td>
                    </tr>
                )
            });
        }
    }

    return (
        <tbody>
        {
            renderTable()
        }
        </tbody>
    )
};

LearnTableContainer.propTypes = {
    setId: propTypes.func.isRequired,
    getLearnData: propTypes.func.isRequired,
    learnData: propTypes.array.isRequired,
    storeRoute: propTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnTableContainer);