import React, {useEffect, useState} from "react";
// import {NavLink} from "react-router-dom";
import {setId} from "Actions/getInfoByIDAction.js";
import { connect } from "react-redux";
import propTypes from "prop-types";
import {useHistory} from "react-router";

const mapDispatchToProps = dispatch => {
    return {
        setId: id => dispatch(setId(id))
    }
}

const LearnTableContainer = props => {
    const [learnData, setLearnData] = useState([]);
    const { setId } = props;
    const history = useHistory();

    useEffect(() => {
        async function fetchData() {
            let response = await fetch("http://194.67.116.27:8080/api/get_program_list");
            response = await response.json();
            setLearnData(response);
        }

        fetchData();
    }, [])

    const setInfoByID = id => {
        setId(id);
        history.push(`/info/ + ${id}`);
    }

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
    setId: propTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(LearnTableContainer);