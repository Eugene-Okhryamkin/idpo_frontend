import React from "react";
import AdminUsersTableItem from "Containers/AdminUsersTableItem/AdminUsersTableItem.jsx";
import propTypes from "prop-types";

const AdminPanelTableBody = props => {



    const renderElements = () => {
        const { tableElements } = props;
        return tableElements.map((item, index) => <AdminUsersTableItem cols={item} key={index} />);
    }

    return (
        <div className="c-table mx-4">
            {
                renderElements()
            }
        </div>
    )
}

AdminPanelTableBody.propTypes = {
    tableElements: propTypes.array.isRequired,
}

export default AdminPanelTableBody;