import React from "react";
import mapUrl from "Pic/map.png";

const PreFooter = () => (
    <section className="pre-footer">

        <div className="row no-gutters">

            <div className="col-lg-8">
                <div className="mx-auto col-10">
                    <h2>Контакты ИДПО:</h2>
                    <div className="row">
                        <div className="col">
                            <p>+7 (473) 255-04-81<br /> +7 (473) 252-45-34</p>
                            <p>email@email.ru</p>
                        </div>
                        <div className="col">
                            <p>г. Воронеж,<br /> ул. Никитинская 14 А</p>
                            <p>Пн-Пт: 8:30 - 16:00<br /> Сб-Вск: выходные</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 map-col">
                <div className="map">
                    <img src={mapUrl} alt="map" />
                </div>
            </div>

        </div>
    </section>
);

export default PreFooter;