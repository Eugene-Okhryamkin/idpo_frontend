import React, {useEffect} from "react";
import 'regenerator-runtime/runtime';
import "./App.css";
import Admin from "Pages/Admin/Admin.jsx";
import {Redirect, Route, Switch} from "react-router";
import MainApp from "Components/MainApp/MainApp.jsx";
import Login from "Containers/Login/Login.jsx";
import { connect } from "react-redux";
import {setUser} from "Actions/setUserAction";
import propTypes from "prop-types";
import jwtDecode from "jwt-decode";

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user))
});


const App = props => {
    const { isAuthenticated } = props;

    const decodeAndSetUser = () => {
        const userData = localStorage.getItem("token");
        const { setUser } = props;

        if(userData) {
            const user = jwtDecode(userData);
            setUser(user);
        }
    };

    useEffect(() => {
        decodeAndSetUser();
    }, [])

    return (
        <Switch>
            <Route  path={"/main"}  component={MainApp} />
            {
                isAuthenticated ? <Redirect  from={"/auth"} to={"/admin"} /> : <Redirect from={"/admin"} to={"/auth"}></Redirect>
            }
            <Route  path={"/admin"} component={Admin} />
            <Route path={"/auth"} component={Login}/>
            <Redirect from={"/"} to={"/main"} />
        </Switch>
    )
}

App.propTypes = {
    isAuthenticated: propTypes.bool.isRequired,
    setUser: propTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App);