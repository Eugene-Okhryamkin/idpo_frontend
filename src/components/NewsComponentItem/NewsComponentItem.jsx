import React from "react";
import propTypes from "prop-types";


const NewsComponentItem = props => (

    <div className="col-lg news-card mr">
        <p className="text-orange news-date">8 oct 2020</p>
        <img className="news-img" src="{props.imgSrc}" />
        <h4>{props.title}</h4>
        <p className="text-muted">{props.text}</p>
        <p className="text-muted">Сотрудники Роспотребнадзора...<a className="text-orange" href={props.url}>Читать дальше</a></p>
    </div>
)


NewsComponentItem.propTypes = {
    title: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
}
export default NewsComponentItem;