import React from "react";
import LearnTableContainer from "Containers/LearnTableContainer/LearnTableContainer.jsx";

const TableSection = () => (
    <section>
        <div className="table-section">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Группа направления</th>
                        <th scope="col">Программа</th>
                        <th scope="col">Форма обучения</th>
                        <th scope="col">Продолжительность</th>
                    </tr>
                </thead>
                <LearnTableContainer />
            </table>
        </div>
    </section>

);

export default TableSection;