import React from "react";
import propTypes from "prop-types";

const ImageComponent = props => {
    return (
        <div className="col-lg-3 grad-card">
            <img className="grad-img mx-auto" src={props.img}/>
            <h6 className="grad-name">{props.name}</h6>
            <p className="grad-desc text-muted">{props.desc}</p>
        </div>
    )
};

ImageComponent.propTypes = {
    name: propTypes.string.isRequired,
    img: propTypes.string.isRequired,
    desc: propTypes.string.isRequired
}

export default ImageComponent;