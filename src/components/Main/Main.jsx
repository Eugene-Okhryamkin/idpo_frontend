import React from "react";
// import {Route, Switch} from "react-router";
// import MainPage from "Pages/Main/MainPage.jsx";
import LearnPage from "Pages/Learn/LearnPage.jsx";

const Main = () => (
    <main>
    {/*//     <Switch>*/}
    {/*//         <Route exact path="/" component={MainPage}></Route>*/}
    {/*//         <Route path="/learn" component={LearnPage}></Route>*/}
    {/*//     </Switch>*/}
    {/*//     <MainPage />*/}
        <LearnPage />
    </main>
);

export default Main;