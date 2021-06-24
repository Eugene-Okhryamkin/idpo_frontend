import React from "react";
import AdminPanelTableHead from "Components/AdminPanelTableHead/AdminPanelTableHead.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import propTypes from "prop-types";
import AdminPanelTableBody from "Components/AdminPanelTableBody/AdminPanelTableBody.jsx";

const Table = props => {
    return (
        <>
            <AdminPanelTableHead tableName={props.tableName} />
            <hr className="w-100 m-4" />
            <div className="mx-4">
                <p className="d-block p-4 d-flex" style={{alignItems: "center", justifyContent: "space-between"}}>
                    {
                        props.cols.map((item, index) => <span className="float-start" key={index}>{item}</span> )
                    }
                    <FontAwesomeIcon icon={faPen} />
                </p>
            </div>
            <AdminPanelTableBody tableElements={props.tableElements} Component={props.Component}/>
        </>
    )
};

Table.propTypes = {
    tableName: propTypes.string.isRequired,
    tableElements: propTypes.array.isRequired,
    cols: propTypes.array.isRequired,
    Component: propTypes.func.isRequired
}

export default Table;