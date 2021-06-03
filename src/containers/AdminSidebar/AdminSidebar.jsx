import React from "react";
import {NavLink} from "react-router-dom";

const AdminSidebar = () => {
    return (
        <div className="nav-bar col-lg h-100" id="nav-bar">
            <NavLink className="p-3 d-block" to="/admin/users">Пользователи</NavLink>
            <NavLink className="p-3 d-block" to="/admin/courses">Курсы</NavLink>
            <NavLink className="p-3 d-block" to="/admin/categories">Категории</NavLink>
        </div>
    )
}

export default AdminSidebar;