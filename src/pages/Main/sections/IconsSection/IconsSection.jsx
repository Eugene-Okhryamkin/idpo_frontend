import React from "react";
import icon1 from "Pic/icons1.jpg";
import icon2 from "Pic/icons2.jpg";
import icon3 from "Pic/icons3.jpg";

const IconsSection = () => (
    <section className="icons">
        <div className="row col-lg-10 mx-auto">
            <div className="col-lg text-center">
                <img src={icon1} />
                    <h4>Профессионльная переподготовка</h4>
                    <p>Получите диплом с присвоением новой квалификации</p>
            </div>
            <div className="col-lg text-center">
                <img src={icon2} />
                    <h4>Повышение квалификации</h4>
                    <p>Совершенствуйте имеющиеся компетенции</p>
            </div>
            <div className="col-lg text-center">
                <img src={icon3} />
                    <h4>Общеразвивающие программы</h4>
                    <p>Откройте для себя новые границы</p>
            </div>
        </div>
    </section>
);

export default IconsSection;