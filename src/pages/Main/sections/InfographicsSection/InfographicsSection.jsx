import React from "react";

const InfographicsSection = () => (
    <section className="infographics">
        <div className="row">

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