import React, { useState} from "react";
import { connect } from "react-redux";
import {login} from "Actions/authAction.js";
import propTypes from "prop-types";
import "./style-login.css";

const mapDispatchToProps = dispatch => ({
    auth: userData => dispatch(login(userData))
})

const Login = props => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const onBtnSubmit = e => {
        e.preventDefault();
        const data = {username, password};
        const { auth } = props;
        auth(data);
    }

    const onHandleLoginChange = e => setUsername(e.currentTarget.value);
    const onHandlePasswordChange = e => setPassword(e.currentTarget.value);

    const validate = () => {
        if(username) {
            return true;
        }

        return false;
    }

    return (
        <div className="container col-lg-5 mx-auto p-5 mt-5"
             style={{background: "#eee", borderRadius: "1em", boxShadow: "0 0 15px rgba(0,0,0,0.15)"}}>
            <h2 className="text-uppercase text-center my-4">account login</h2>

            <div className="form__group field">
                <input type="input" className="form__field" placeholder="Name" name="name" id='name' required onChange={onHandleLoginChange}/>
                <label htmlFor="name" className="form__label">Login</label>
            </div>

            <div className="form__group field">
                <input type="input" className="form__field" placeholder="Password" name="password" id='password'
                       required onChange={onHandlePasswordChange}/>
                <label htmlFor="password" className="form__label">Password</label>
            </div>

            <button className="log-in-btn d-block mx-auto p-2 mt-5" disabled={!validate()} onClick={onBtnSubmit}>log in</button>
        </div>
    )
};

Login.propTypes = {
    auth: propTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(Login);