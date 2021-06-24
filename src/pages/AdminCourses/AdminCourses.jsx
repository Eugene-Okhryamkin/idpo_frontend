import React, {useEffect} from "react";
import { connect } from "react-redux";
import {getCourses} from "Actions/getCoursesActions";
import propTypes from "prop-types";
import Table from "Containers/Table/Table.jsx";
import AdminCoursesTableItem from "Components/AdminCoursesTableItem/AdminCoursesTableItem.jsx";
import AddCourse from "Pages/AddCourse/AddCourse.jsx";
import EditCourse from "Pages/EditCourse/EditCourse.jsx";


const mapStateToProps = state => ({
    courses: state.courses.courses,
    editPage: state.edit.isOpen,
    addPage: state.add.isOpen
});

const mapDispatchToProps = dispatch => ({
    getCourses: () => dispatch(getCourses())
});


const AdminCourses = props => {
    const tableCols = ["Название курса", "Форма"];


    useEffect( () => {
        const { getCourses } = props;
        getCourses();
    },  [])


    const isEditOpen = () => {
        const { editPage, addPage } = props;
        if(editPage) {
            return <EditCourse />
        }

        if(addPage) {
            return <AddCourse />
        }

        const { courses } = props;

        return <Table tableName="Курсы" cols={tableCols}  tableElements={courses} Component={AdminCoursesTableItem} />
    }

    return (
        isEditOpen()
    )
}

AdminCourses.propTypes = {
    courses: propTypes.array.isRequired,
    getCourses: propTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminCourses);