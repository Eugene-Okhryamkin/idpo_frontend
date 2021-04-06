import React from "react";
import ImageComponent from "Components/ImageSlider/ImageComponent/ImageComponent.jsx";
// // import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// // import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import data from "../../data/sliderData.json";
import PrevArrow from "Components/ImageSlider/PrevArrow/PrevArrow.jsx";
import Slider from "react-slick";
import NextArrow from "Components/ImageSlider/NextArrow/NextArrow.jsx";

const ImageSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    return (
        <>
            <Slider {...settings}>

                {
                    data.map((item, index) => {
                        return <ImageComponent key={index} img={item.imgSrc} name={item.gradName} desc={item.gradDesc} className="col-sm" />
                    })
                }



            </Slider>


        </>
    )
};

export default ImageSlider;