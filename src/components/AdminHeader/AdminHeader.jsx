import React from "react";
// import PropTypes from "prop-types";

const AdminHeader = () => {
    return (
        <>
            <div className="section-title">
                <h3 className="d-block mx-5">Пользователи <a className="px-5 py-2 float-end" href="add-user.html">+</a></h3>
            </div>

            <hr className="w-100 m-4" />

            <div className="mx-4">
                <p className="d-block p-4 d-flex" style={{alignItems: "center", justifyContent: "space-between"}}>
                    <span className="float-start">Имя</span> <span className="ml-5 float-end">Статус</span> <i className="fas fa-pen float-end"></i>
                </p>
            </div>
        </>
    )
}

// AdminHeader.PropTypes = {
//     sectionTitle: propTypes.string.isRequired,
//     nameCol: propTypes.string.isRequired,
//     statusCol: propTypes.string.isRequired,
//     formCol: propTypes.string
// }

export default AdminHeader;
