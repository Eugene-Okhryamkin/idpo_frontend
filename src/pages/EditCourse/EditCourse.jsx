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
    course: state.getCourse.course
});

const EditCourse = props => {
    const [editedCourse, setEditedCourse] = useState({
        name: "",
        audienceCategory: "",
        programTypeId: 0 ,
        programDirectionId: 0,
        programSeparationId: 0,
        programGroup: "",
        formTraining: "",
        laborIntensity: "",
        duration: "",
        price: "",
        conditions: "",
        programManager: ""
    });

    const onHandleClose = e => {
        e.preventDefault();
        const { openEdit } = props;
        openEdit(false);
    }

    const onHandleChangeCourse = e => {
        const { id } = e.currentTarget;
        setEditedCourse({ ...editedCourse, [id]: e.currentTarget.value });
        console.log(editedCourse);
    }

    const onHandleDeleteCourse = e => {
        e.preventDefault();
        const { id } = editedCourse;
        fetch("http://194.67.116.27:8080/api/edit/delete_user", {
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
        console.log(editedCourse);
        e.preventDefault();
        fetch("http://194.67.116.27:8080/api/edit/edit_course", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(editedCourse)
        })
    }


    return (
        <div className="content col-lg-9" id="content">
            <div className="section-title">
                <h3 className="d-block mx-5">Добавить курс <a className="px-5 py-2 float-end" onClick={onHandleClose}><FontAwesomeIcon
                    icon={faTimes}></FontAwesomeIcon></a></h3>
            </div>

            <div className="add-form m-5">

                <form className="col-lg-6">
                    <div className="form-group my-2">
                        <label htmlFor="title">Название:</label>
                        <input type="text" className="form-control" id="title" name="name" placeholder="Введите название" onChange={onHandleChangeCourse} />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="title">Категория слушателей:</label>
                        <input type="text" className="form-control" id="title"  placeholder="Введите категорию" name="audienceCategory" onChange={onHandleChangeCourse} />
                    </div>
                    <div className="form-group my-2">
                        <label className="" htmlFor="role1">Тип курса:</label>
                        <select className="form-control" id="role1" name="programType" onChange={onHandleChangeCourse}>
                            <option selected>Выберете...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="form-group my-2">
                        <label className="" htmlFor="role2">Направление курса:</label>
                        <select className="form-control" id="role2" name="programDirection" onChange={onHandleChangeCourse}>
                            <option selected>Выберете...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="form-group my-2">
                        <label htmlFor="cgroup">Группа курса:</label>
                        <input type="text" className="form-control" id="cgroup" placeholder="Введите группу" name="programGroup" onChange={onHandleChangeCourse}/>
                    </div>
                    <div className="my-2">
                        <label className="custom-control custom-radio">
                            <input id="radio1"  type="radio" className="custom-control-input" name="formTraining" onChange={onHandleChangeCourse}/>
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">Очная</span>
                        </label>
                        <label className="custom-control custom-radio">
                            <input id="radio2"  type="radio" className="custom-control-input" name="formTraining" onChange={onHandleChangeCourse}/>
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">Заочная</span>
                        </label>
                    </div>

                    <div className="form-group row my-2">
                        <label htmlFor="number-input" className="col-8 col-form-label" style={{paddingLeft: "0"}}>Трудоемкость
                            (в часах):</label>
                        <div className="col-4">
                            <input className="form-control" type="number" value="72" id="number-input" name="laborIntensity" onChange={onHandleChangeCourse}/>
                        </div>
                    </div>

                    <div className="form-group my-2">
                        <label htmlFor="time">Срок обучения:</label>
                        <input type="text" className="form-control" id="time" placeholder="Введите срок обучения" name="duration" onChange={onHandleChangeCourse}/>
                    </div>

                    <div className="form-group my-2">
                        <label htmlFor="cost">Стоимость обучения:</label>
                        <input type="text" className="form-control" id="cost" placeholder="Введите стоимость обучения" name="price" onChange={onHandleChangeCourse} />
                    </div>

                    <div className="form-group my-4">
                        <label htmlFor="InputFile">Добавить сертификат:</label>
                        <input type="file" className="form-control-file" id="InputFile" aria-describedby="fileHelp" />
                        <small id="fileHelp" className="form-text text-muted">Добавьте PDF файл</small>
                    </div>

                    <div className="form-group my-2">
                        <label htmlFor="conditions">Условия поступления:</label>
                        <input type="text" className="form-control" id="conditions" placeholder="Введите условия" name="conditions" onChange={onHandleChangeCourse}/>
                    </div>

                    <div className="form-group my-2">
                        <label htmlFor="name">Руководитель программы:</label>
                        <input type="text" className="form-control" id="name" placeholder="Введите имя руководителя" name="programManager" onChange={onHandleChangeCourse}/>
                    </div>

                </form>

                <input className="log-in-btn p-2 mt-4" type="submit" value="Add" onClick={onHandleSubmit}/>
                <br /><br />
                <input className="del p-2 mt-4" type="submit" value="Delete course" onClick={onHandleDeleteCourse}/>
            </div>

        </div>
    )
};

EditCourse.propTypes = {
    openEdit: propTypes.func.isRequired,
    course: propTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCourse);