import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {openEditPage} from "Actions/openEditAction";
import propTypes from "prop-types";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => ({
    openEdit: isOpen => dispatch(openEditPage(isOpen))
});

const mapStateToProps = state => ({
    user: state.getUser.user
});

const EditUser = props => {
    const [editedUser, setEditedUser] = useState({
        id: props.user.id,
        username: "",
        password: "",
        role: []
    });

    const onHandleClose = e => {
        e.preventDefault();
        const { openEdit } = props;
        openEdit(false);
    }

    const onHandleChangeUser = e => {
        const { id } = e.currentTarget;
        setEditedUser({ ...editedUser, [id]: e.currentTarget.value });
        console.log(editedUser);
    }

    const onHandleDeleteUser = e => {
        e.preventDefault();
        const { id } = editedUser;
        fetch("http://194.67.116.27:8080/api/edit/delete_user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({id})
        })
            .then(res => res.json())
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
        fetch("http://194.67.116.27:8080/api/edit/edit_user", {
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
                <h3 className="d-block mx-5">Редактировать пользователя <a className="px-5 py-2 float-end"><FontAwesomeIcon onClick={onHandleClose} icon={faTimes}/></a></h3>
            </div>
            <div className="add-form m-5">

                <form className="col-lg-6">
                    <div className="form-group my-2">
                        <label htmlFor="username">Login:</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter login" value={editedUser.username.length ? editedUser.username : props.user.username } onChange={onHandleChangeUser} />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="password">Password:</label>
                        <input type="text" className="form-control" id="password" placeholder="Enter password" value={editedUser.password} onChange={onHandleChangeUser}/>
                    </div>
                    <div className="form-group my-2">
                        <label className="" htmlFor="role">Role</label>
                        <select className="form-control" id="role" defaultValue={editedUser.role} onChange={onHandleChangeUserRoles} value={editedUser.role}>
                            <option >Choose...</option>
                            <option value="ADMIN">ADMIN</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                </form>

                <input className="log-in-btn p-2 mt-4" type="submit" value="Save" onClick={onHandleSubmit} />
                    <br /><br />
                        <input className="del p-2 mt-4" type="submit" value="Delete user" onClick={onHandleDeleteUser}/>

            </div>
        </div>
    )
};

EditUser.propTypes = {
    openEdit: propTypes.func.isRequired,
    user: propTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);