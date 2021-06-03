import React from "react";
import AdminSidebar from "Containers/AdminSidebar/AdminSidebar.jsx";
import { Switch, Route } from "react-router";
import AdminUsers from "Pages/AdminUsers/AdminUsers.jsx";
import AdminCourses from "Pages/AdminCourses/AdminCourses.jsx";
import AdminCategories from "Pages/AdminCategories/AdminCategories.jsx";


const Main = () => {
    return (
        <div className="row d-flex" id="main">
            <AdminSidebar />
            <div className="content col-lg-9" id="content">
                <Switch>
                    <Route  path="/admin/users" component={AdminUsers} exact></Route>
                    <Route  path="/admin/courses" component={AdminCourses} exact></Route>
                    <Route  path="/admin/categories" component={AdminCategories} exact></Route>
                </Switch>
            </div>
        </div>
    )
};

export default Main;