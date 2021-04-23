import React from "react";
import infoGraphics1 from "Pic/infographics1.jpg";
import infoGraphics2 from "Pic/infographics2.jpg";
import infoGraphics3 from "Pic/infographics3.jpg";
import infoGraphics4 from "Pic/infographics4.jpg";
import infoGraphics5 from "Pic/infographics5.jpg";

const InfographicsSection = () => (
    <section className="infographics">
        <div className="row col-12 mx-auto">
            <img className="mx-auto" src={infoGraphics1} />
            <img className="mx-auto" src={infoGraphics2} />
            <img className="mx-auto" src={infoGraphics3} />
            <img className="mx-auto" src={infoGraphics4} />
            <img className="mx-auto" src={infoGraphics5} />
        </div>
        <div className="col-10 mx-auto progress" style={{height: "30px"}}>
            <div className="progress-bar" role="progressbar" style={{width: "25%", background: "rgba(238, 90, 45, 1)"}}
                 aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            <div className="progress-bar" role="progressbar" style={{width: "25%", background: "rgba(238, 90, 45, 0.75)"}}
                 aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            <div className="progress-bar" role="progressbar" style={{width: "25%", background: "rgba(238, 90, 45, 0.5)"}}
                 aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            <div className="progress-bar" role="progressbar" style={{width: "25%", background: "rgba(238, 90, 45, 0.25)"}}
                 aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </section>
);
export default InfographicsSection;