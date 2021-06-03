import React from "react";


const AdminUsersTableItem = () => {
    return (
        <div className="c-table mx-4">
            <a className="d-block p-4 d-flex" href="edit-user.html" style={{alignItems: "center", justifyContent: "space-between"}}>
            <span className="float-start">Имя 0</span> <span className="mx-5 float-end">Пользователь</span> <i className="fas fa-pen float-end"></i></a>
        </div>
    )
};

export default AdminUsersTableItem;