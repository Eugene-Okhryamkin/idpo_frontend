import React from "react";
import {Route, Switch} from "react-router";
import MainPage from "Pages/Main/MainPage.jsx";
import LearnPage from "Pages/Learn/LearnPage.jsx";
import InfoPage from "Pages/Info/InfoPage.jsx";

const Main = () => (
    <main>
         <Switch>
             <Route exact path="/" component={MainPage}></Route>
             <Route path="/learn" component={LearnPage}></Route>
             <Route path="/info" component={InfoPage}></Route>
         </Switch>
    </main>
);

export default Main;