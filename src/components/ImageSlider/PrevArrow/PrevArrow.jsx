import React from "react";
import propTypes from "prop-types";

const PrevArrow = props => (
    <div className="col-lg arrow" onClick={props.onClick}>
        <a className="btn prev" href="#" >&lt;</a>
    </div>
);

PrevArrow.propTypes = {
    onClick: propTypes.func
}

export default PrevArrow;