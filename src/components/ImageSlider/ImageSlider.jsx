import React, {useState} from "react";
import "./ImageSlider.css";
// import ImageComponent from "Components/ImageSlider/ImageComponent/ImageComponent.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import data from "../../data/sliderData.json";


const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = data.length;

    const nextSlide = () => {
        setCurrent(current === length ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === length -2 ? 0 : current + 1)
    }

    if(!Array.isArray(data) || data.length <= 0) {
        return null;
    }

    console.log(current);

    return (
        <>
            <button className="slick-prev slick-arrow" aria-label="Previous" type="button" onClick={prevSlide}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            {
                // data.map((item, index) => {
                //     console.log(item, index);
                //     return (
                //         <ImageComponent key={index} name={item.gradName} desc={item.gradDesc} img={item.imgSrc}/>
                //     )
                // })
            }
            <button className="slick-next slick-arrow" aria-label="Next" type="button" onClick={nextSlide} >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </>
    )
};

export default ImageSlider;