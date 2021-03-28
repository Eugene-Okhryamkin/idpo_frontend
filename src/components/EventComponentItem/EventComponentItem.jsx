import React from "react";
import propTypes from "prop-types";

const EventComponentItem = props => (
    <>
        <h4>{props.title}</h4>
        <p>{props.description}  <a className="text-orange">кликай!</a></p>
    </>
)

EventComponentItem.propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
}

export default EventComponentItem;