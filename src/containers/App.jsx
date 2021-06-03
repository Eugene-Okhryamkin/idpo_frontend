import React from "react";
import 'regenerator-runtime/runtime';
import "./App.css";
import Admin from "Pages/Admin/Admin.jsx";
import {Redirect, Route, Switch} from "react-router";
import MainApp from "Components/MainApp/MainApp.jsx";

const App = () => (
    <>
        <Switch>
            <Route  path={"/main"}  component={MainApp} />
            <Route  path={"/admin"} component={Admin} />
            <Redirect from={"/"} to={"/main"} />
        </Switch>
    </>
);

export default App;