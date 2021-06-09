import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import propTypes from "prop-types";
import {connect} from "react-redux";
import {addPage} from "Actions/openAddPage";

const mapDispatchToProps = dispatch => ({
    openAdd: isOpen => dispatch(addPage(isOpen))
});

const mapStateToProps = state => ({
    user: state.getUser.user
});

const AddUser = props => {
    const [editedUser, setEditedUser] = useState({
        username: "",
        password: "",
        roles: []
    });

    const onHandleClose = e => {
        e.preventDefault();
        const { openAdd } = props;
        openAdd(false);
    }

    const onHandleChangeUser = e => {
        const { id } = e.currentTarget;

        setEditedUser({
            ...editedUser, [id]: e.currentTarget.value,
        });


        console.log(editedUser);
    }

    const onHandleChangeUserRoles = e => {
        setEditedUser({
            ...editedUser,
            roles: [e.currentTarget.value]
        })
    }

    const onHandleSubmit = e => {
        console.log(editedUser);
        e.preventDefault();
        fetch("http://194.67.116.27:8080/api/edit/add_user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(editedUser)
        })
    }


    return (
        <div className="content col-lg-9" id="content">
            <div className="section-title">
                <h3 className="d-block mx-5">Добавить пользователя <a className="px-5 py-2 float-end" href="index.html"><FontAwesomeIcon
                    className="fas fa-times" onClick={onHandleClose} icon={faTimes} /></a></h3>
            </div>
            <div className="add-form m-5">

                <form className="col-lg-6">
                    <div className="form-group my-2">
                        <label htmlFor="username">Login:</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter login" value={editedUser.username} onChange={onHandleChangeUser} />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="password">Password:</label>
                        <input type="text" className="form-control" id="password" placeholder="Enter password" value={editedUser.password} onChange={onHandleChangeUser}/>
                    </div>
                    <div className="form-group my-2">
                        <label className="" htmlFor="role">Role</label>
                        <select className="form-control" id="roles" defaultValue={editedUser.roles} onChange={onHandleChangeUserRoles} value={editedUser.roles}>
                            <option>Choose...</option>
                            <option value="ADMIN">ADMIN</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                </form>

                <input className="log-in-btn p-2 mt-4" type="submit" value="Save" onClick={onHandleSubmit} />
                <br /><br />

            </div>
        </div>
    )
};

AddUser.propTypes = {
    openAdd: propTypes.func.isRequired,
    user: propTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);