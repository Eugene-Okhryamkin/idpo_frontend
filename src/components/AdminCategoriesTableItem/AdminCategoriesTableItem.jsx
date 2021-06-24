import React from "react";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import propTypes from "prop-types";
import {connect} from "react-redux";
import {openEditPage} from "Actions/openEditAction";
import {getCategory} from "Actions/getCategoryAction";

const mapDispatchToProps = dispatch => ({
    openEdit: isOpen => dispatch(openEditPage(isOpen)),
    getCategory: category => dispatch(getCategory(category))
});


const AdminCategoriesTableItem = props => {
    const { cols } = props;

    console.log(props);

    const onHandleOpen = e => {
        e.preventDefault();
        const { openEdit, getCategory } = props;
        getCategory(cols);
        openEdit(true);
    }


    const renderItem = () => {
        return (
            <>
                <a className="d-block p-4 d-flex"
                   style={{alignItems: "center", justifyContent: "space-between"}}>
                    <span className="float-start">{props.cols.name}</span> <span
                    className="ml-5 float-end">Статус</span> <FontAwesomeIcon onClick={onHandleOpen} icon={faPen}/>
                </a>
            </>
        )

    }

    return (
        renderItem()
    )
}

AdminCategoriesTableItem.propTypes = {
    cols: propTypes.object.isRequired,
}

export default connect(null, mapDispatchToProps)(AdminCategoriesTableItem);