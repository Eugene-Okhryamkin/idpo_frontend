import React from "react";

const ManagersSection = () => (
    <section className="managers">
        <h2 className="text-center">Наши руководители программ</h2>
        <div className="col-lg-10 mx-auto">
            <div className="card-columns">
                <div className="card">
                    <img className="card-img-top mx-auto" src="pic/photo-1.jpg" alt="image" />
                        <div className="card-body">
                            <h5 className="card-title">Вениамин<br />Виноградов</h5>
                            <p className="card-text text-muted">факультет биологии</p>
                            <h3 className="card-bigger-title">Декан факультета биологии</h3>
                        </div>
                </div>
                <div className="card">
                    <img className="card-img-top mx-auto" src="pic/photo-1.jpg" alt="image" />
                        <div className="card-body">
                            <h5 className="card-title">Константин<br />Константиновый</h5>
                            <p className="card-text text-muted">преподаватель программы MBA</p>

                        </div>
                </div>

                <div className="card mt-5">
                    <img className="card-img-top mx-auto" src="pic/photo-1.jpg" alt="image" />
                        <div className="card-body">
                            <h5 className="card-title">Константин<br />Константиновый</h5>
                            <p className="card-text text-muted">факультет приклодной математики и меаники</p>
                        </div>
                </div>
                <div className="card">
                    <img className="card-img-top mx-auto" src="pic/photo-1.jpg" alt="image" />
                        <div className="card-body">
                            <h5 className="card-title">Анфиса<br />Коровина</h5>
                            <p className="card-text text-muted">преподаватель математики</p>

                        </div>
                </div>

                <div className="card">
                    <img className="card-img-top mx-auto" src="pic/photo-1.jpg" alt="image" />
                        <div className="card-body">
                            <h5 className="card-title">Анфиса<br />Коровина</h5>
                            <p className="card-text text-muted">факультет лингвистики</p>
                            <h3 className="card-bigger-title">кафедра английской филологии </h3>
                        </div>
                </div>
                <div className="card">
                    <img className="card-img-top mx-auto" src="pic/photo-1.jpg" alt="image" />
                        <div className="card-body">
                            <h5 className="card-title">Александра<br />Ларина</h5>
                            <p className="card-text text-muted">директор бизнес-школы</p>
                        </div>
                </div>

                <div className="card mt-5">
                    <img className="card-img-top mx-auto" src="pic/photo-1.jpg" alt="image" />
                        <div className="card-body">
                            <h5 className="card-title">Александра<br />Ларина</h5>
                            <p className="card-text text-muted">декан факультета журналистики</p>
                        </div>
                </div>
                <div className="card">
                    <img className="card-img-top mx-auto" src="pic/photo-1.jpg" alt="image" />
                    <div className="card-body">
                            <h5 className="card-title">Вениамин<br />Виноградов</h5>
                            <p className="card-text text-muted">главный редактор научного журнала</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ManagersSection;