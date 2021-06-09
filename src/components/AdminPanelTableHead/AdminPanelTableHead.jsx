import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import {addPage} from "Actions/openAddPage";

const mapDispatchToProps = dispatch => ({
    openAdd: isOpen => dispatch(addPage(isOpen)),
});

const AdminPanelTableHead = props => {

    const onHandleOpenEdit = e => {
        e.preventDefault();
        const { openAdd } = props;
        openAdd(true);
    }

    return (
        <div className="section-title">
            <h3 className="d-block mx-5">{props.tableName}<a className="px-5 py-2 float-end" onClick={onHandleOpenEdit}>+</a></h3>
        </div>
    )
}

AdminPanelTableHead.propTypes = {
    tableName: propTypes.string.isRequired,
    openAdd: propTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(AdminPanelTableHead);