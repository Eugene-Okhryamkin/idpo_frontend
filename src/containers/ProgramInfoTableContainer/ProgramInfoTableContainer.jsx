import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";

const mapStateToProps = state => ({
    id: state.info.id
})

const ProgramInfoTableContainer = props => {
    const [programInfo, setProgramInfo] = useState({});
    const {id} = props;


    useEffect(() => {
        async function fetchData() {
            let response = await fetch(`http://194.67.116.27:8080/api/get_program_info?id=${id}`);
            response = await response.json();
            setProgramInfo(response);
        }

        fetchData();


    }, [])



    const renderTable = () => {
        if(Object.keys(programInfo).length) {
            console.log(programInfo);
            return (
                <>
                    <tr>
                        <th className="pt-5">Категория слушателей</th>
                        <td className="pt-5">{programInfo.audienceCategory}</td>
                    </tr>
                    <tr>
                        <th>Вид программы</th>
                        <td>{programInfo.programType.name}</td>
                    </tr>
                    <tr>
                        <th>Направление программы</th>
                        <td>{programInfo.programDirection.name}</td>

                    </tr>
                    <tr>
                        <th>Группа программы</th>
                        <td>{programInfo.programGroup}</td>

                    </tr>
                    <tr>
                        <th>Подразделение</th>
                        <td>{programInfo.programSeparation.name}</td>
                    </tr>
                    <tr>
                        <th>Форма обучения</th>
                        <td>{programInfo.formTraining}</td>

                    </tr>
                    <tr>
                        <th>Общая трудоемкость программы</th>
                        <td>{programInfo.laborIntensity}</td>

                    </tr>
                    <tr>
                        <th>Срок обучения</th>
                        <td>{programInfo.duration}</td>

                    </tr>
                    <tr>
                        <th>Стоимость обучения</th>
                        <td>{programInfo.price}</td>

                    </tr>
                    <tr>
                        <th>Выдаваемый документ</th>
                        <td><a className="" href={programInfo.documentPath}>Удостоверение</a></td>

                    </tr>
                    <tr>
                        <th>Условия поступления</th>
                        <td>{programInfo.conditions}</td>

                    </tr>
                    <tr>
                        <th className="pb-5">Руководитель программы</th>
                        <td className="pb-5">{programInfo.programManager}</td>
                    </tr>
                </>
            )
        }
    };

    return (
        <tbody>
            {
                renderTable()
            }
        </tbody>
    )
};

ProgramInfoTableContainer.propTypes = {
    id: propTypes.string.isRequired
}


export default connect(mapStateToProps, null)(ProgramInfoTableContainer);