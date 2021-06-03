import React from "react";
import {Route, Switch} from "react-router";
import MainPage from "Pages/Main/MainPage.jsx";
import LearnPage from "Pages/Learn/LearnPage.jsx";
import InfoPage from "Pages/Info/InfoPage.jsx";

const Main = () => (
    <main>
         <Switch>
             <Route  path="/main/" component={MainPage} exact />
             <Route  path="/main/learn" component={LearnPage}  />
             <Route  path="/main/info/:id" component={InfoPage}  />
         </Switch>
    </main>
);

export default Main;