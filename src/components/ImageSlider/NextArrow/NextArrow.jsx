import React from "react";
import propTypes from "prop-types";

const NextArrow = props => (
    <div className="col-lg arrow"  onClick={props.onClick}>
        <a className="btn next" href="#" >&gt;</a>
    </div>
);

NextArrow.propTypes = {
    onClick: propTypes.func
}

export default NextArrow