import React from "react";
import ProgramInfoTableContainer from "Containers/ProgramInfoTableContainer/ProgramInfoTableContainer.jsx";

const ProgramInfoSection = () => (
    <section id="program-info">
        <div className="table-section">
            <table className="table table-hover">
                <ProgramInfoTableContainer />
            </table>
        </div>
    </section>
);

export default ProgramInfoSection;