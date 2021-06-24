import React from "react";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import propTypes from "prop-types";
import {getCourse} from "Actions/getCourseAction";
import {connect} from "react-redux";
import {openEditPage} from "Actions/openEditAction";

const mapDispatchToProps = dispatch => ({
    openEdit: isOpen => dispatch(openEditPage(isOpen)),
    getCourse: course => dispatch(getCourse(course))
});


const AdminCoursesTableItem = props => {
    const { cols } = props;

    console.log(props);

    const onHandleOpen = e => {
        e.preventDefault();
        const { openEdit, getCourse } = props;
        getCourse(cols);
        openEdit(true);
    }


    const renderItem = () => {
        return (
            <>
                <a className="d-block p-4 d-flex"
                   style={{alignItems: "center", justifyContent: "space-between"}}>
                    <span className="float-start">{props.cols.name}</span> <span className="ml-5 float-end">{props.cols.formTraining}</span>
                    <span className="ml-5 float-end">Статус</span> <FontAwesomeIcon icon={faPen} onClick={onHandleOpen} />
                </a>
            </>
        )

    }

    return (
        renderItem()
    )
}

AdminCoursesTableItem.propTypes = {
    cols: propTypes.object.isRequired,
}

export default connect(null, mapDispatchToProps)(AdminCoursesTableItem);