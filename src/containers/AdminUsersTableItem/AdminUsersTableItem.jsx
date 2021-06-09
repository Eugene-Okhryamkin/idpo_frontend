import React from "react";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import propTypes from "prop-types";
import {openEditPage} from "Actions/openEditAction";
import {getUser} from "Actions/getUserAction";

const mapDispatchToProps = dispatch => ({
    openEdit: isOpen => dispatch(openEditPage(isOpen)),
    getUser: user => dispatch(getUser(user))
});

const AdminUsersTableItem = props => {
    const { cols } = props;

    console.log(props);

    const onHandleOpen = e => {
        e.preventDefault();
        const { openEdit, getUser } = props;
        getUser(cols);
        openEdit(true);
    }


    const renderItem = () => {
        return (
            <>
                <a className="d-block p-4 d-flex" style={{alignItems: "center", justifyContent: "space-between"}}>
                <span className="float-start">{cols.username}</span>
                <span className="mx-5 float-end">{cols.roles.map((item, index) => <p key={index}>{item}</p>)}</span>
                <FontAwesomeIcon icon={faPen} onClick={onHandleOpen} /></a>
                 </>
        )

    }

    return (
        renderItem()
    )
};

AdminUsersTableItem.propTypes = {
    cols: propTypes.object.isRequired,
    openEdit: propTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(AdminUsersTableItem);