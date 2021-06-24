import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {openEditPage} from "Actions/openEditAction";
import propTypes from "prop-types";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => ({
    openEdit: isOpen => dispatch(openEditPage(isOpen))
});

const mapStateToProps = state => ({
    category: state.getCategory.category
});

const EditCategory = props => {
    const [editedCategory, setEditedCategory] = useState({
        name: "",
        programSeparation: "",
        programDirection: "",
        programType: "",
        parentId: null
    });

    const onHandleClose = e => {
        e.preventDefault();
        const { openEdit } = props;
        openEdit(false);
    }

    const onHandleChangeCategory = e => {
        const { name } = e.currentTarget;
        setEditedCategory({ ...editedCategory, [name]: e.currentTarget.value });
        console.log(editedCategory);
    }

    const onHandleDeleteCategory = e => {
        e.preventDefault();
        const { id } = editedCategory;
        fetch("http://194.67.116.27:8080/api/edit/delete_category", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({id})
        })
            .then(res => res.json())
    }


    const onHandleSubmit = e => {
        console.log(editedCategory);
        e.preventDefault();
        fetch("http://194.67.116.27:8080/api/edit/edit_category", {
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
               <h3 className="d-block mx-5">Изменить категорию <a className="px-5 py-2 float-end" ><FontAwesomeIcon icon={faTimes} onClick={onHandleClose}/></a></h3>
           </div>

           <div className="add-form m-5">

               <form className="col-lg-6">
                   <div className="form-group my-2">
                       <label form="title">Название:</label>
                       <input type="text" className="form-control" id="title" placeholder="Введите название" name="name"/>
                   </div>
                   <div className="form-group my-2">
                       <label className="" htmlFor="role1">Подразделение:</label>
                       <select className="form-control" id="role1" name="programSeparation"
                               onChange={onHandleChangeCategory}>
                           <option selected>Выберете...</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                       </select>
                   </div>
                   <div className="form-group my-2">
                       <label className="" htmlFor="role2">Направление:</label>
                       <select className="form-control" id="role2" name="programDirection"
                               onChange={onHandleChangeCategory}>
                           <option selected>Выберете...</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                       </select>
                   </div>
                   <div className="form-group my-2">
                       <label className="" htmlFor="role3">Вид программы:</label>
                       <select className="form-control" id="role3" name="programType" onChange={onHandleChangeCategory}>
                           <option selected>Выберете...</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                       </select>
                   </div>
                   <div className="form-group my-2">
                       <label className="" htmlFor="parent-role">Родительская категория:</label>
                       <select className="form-control" id="parent-role" name="parentId"
                               onChange={onHandleChangeCategory}>
                           <option selected>Выберете...</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                       </select>
                   </div>

               </form>

               <input className="log-in-btn p-2 mt-4" type="submit" value="Save" onClick={onHandleSubmit}/>
                   <br /><br />
                   <input className="del p-2 mt-4" type="submit" value="Delete category"onClick={onHandleDeleteCategory} />

           </div>
        </>
    )
};

EditCategory.propTypes = {
    openEdit: propTypes.func.isRequired,
    course: propTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory);