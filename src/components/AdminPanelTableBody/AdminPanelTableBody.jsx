import React from "react";
import propTypes from "prop-types";

const AdminPanelTableBody = props => {

    const getKeysOfObject = () => {
        const { tableElements } = props;
        return tableElements.forEach(item => {
            return Object.keys(item);
        });
    }

    const renderElements = () => {
        const { tableElements, Component } = props;
        console.log(Component);
        const keys = getKeysOfObject();
        if(tableElements != null) {
            return tableElements.map((item) => <Component keys={keys} cols={item} key={item.id} />);
        }

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
    Component: propTypes.func.isRequired
}

export default AdminPanelTableBody;