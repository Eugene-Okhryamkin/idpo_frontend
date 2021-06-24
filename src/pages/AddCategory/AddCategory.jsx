import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import propTypes from "prop-types";
import {connect} from "react-redux";
import {addPage} from "Actions/openAddPage";

const mapDispatchToProps = dispatch => ({
    openAdd: isOpen => dispatch(addPage(isOpen))
});

const mapStateToProps = state => ({
    category: state.getCategory.category
});

const AddCategory = props => {
    const [editedCategory, setEditedCategory] = useState({
        name: "",
        programSeparation: "",
        programDirection: "",
        programType: "",
        parentId: null
    });

    const onHandleClose = e => {
        e.preventDefault();
        const { openAdd } = props;
        openAdd(false);
    }

    const onHandleChangeCategory = e => {
        const { name } = e.currentTarget;

        setEditedCategory({
            ...editedCategory, [name]: e.currentTarget.value,
        });


        console.log(editedCategory);
    }

    const onHandleSubmit = e => {
        console.log(editedCategory);
        e.preventDefault();
        fetch("http://194.67.116.27:8080/api/edit/add_category", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(editedCategory)
        })
    }


    return (
        <>
        <div className="section-title">
            <h3 className="d-block mx-5">Добавить категорию <a className="px-5 py-2 float-end" ><FontAwesomeIcon icon={faTimes} onClick={onHandleClose} /></a></h3>
        </div>

        <div className="add-form m-5">

            <form className="col-lg-6">
                <div className="form-group my-2">
                    <label form="title">Название:</label>
                    <input type="text" className="form-control" id="title" name="name" placeholder="Введите название" onChange={onHandleChangeCategory}/>
                </div>
                <div className="form-group my-2">
                    <label className="" form="role1">Подразделение:</label>
                    <select className="form-control" id="role1" name="programSeparation" onChange={onHandleChangeCategory}>
                        <option selected>Выберете...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="form-group my-2">
                    <label className="" form="role2">Направление:</label>
                    <select className="form-control" id="role2" name="programDirection" onChange={onHandleChangeCategory}>
                        <option selected>Выберете...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="form-group my-2">
                    <label className="" form="role3">Вид программы:</label>
                    <select className="form-control" id="role3" name="programType" onChange={onHandleChangeCategory}>
                        <option selected>Выберете...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="form-group my-2">
                    <label className="" form="parent-role">Родительская категория:</label>
                    <select className="form-control" id="parent-role" name="parentId" onChange={onHandleChangeCategory}>
                        <option selected>Выберете...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

            </form>

            <input className="log-in-btn p-2 mt-4" type="submit" value="Add" onClick={onHandleSubmit}/>
        </div>
        </>
    )
};

AddCategory.propTypes = {
    openAdd: propTypes.func.isRequired,
    course: propTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory)