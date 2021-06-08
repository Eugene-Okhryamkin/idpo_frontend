import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import {logout} from "Actions/logoutAction";

const mapStateToProps = state => ({
    user: state.user.user
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

const Header = props => {
    const onHandleLogout = e => {
        e.preventDefault();
        const { logout } = props;
        logout();
        localStorage.removeItem("token");
    }

    return (
        <header>
            <a href="" className="float-end mx-5 p-3 d-block" onClick={onHandleLogout}>Выход</a>
            <h5 className="p-3 d-block"><span className="float-right">{ props.user.sub }</span></h5>
        </header>
    )
}

Header.propTypes = {
    user: propTypes.object.isRequired,
    logout: propTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);