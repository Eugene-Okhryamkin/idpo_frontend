import React from "react";
// import ImageComponent from "Components/ImageSlider/ImageComponent/ImageComponent.jsx";
// // import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// // import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import data from "../../data/sliderData.json";
// import PrevArrow from "Components/ImageSlider/PrevArrow/PrevArrow.jsx";
// import Slider from "react-slick";
// import NextArrow from "Components/ImageSlider/NextArrow/NextArrow.jsx";

const ImageSlider = () => {

    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //     prevArrow: <PrevArrow />,
    //     nextArrow: <NextArrow />
    // };

    return (
        <>
            {/*<Slider {...settings}>*/}

            {/*    {*/}
            {/*        data.map((item, index) => {*/}
            {/*            return <ImageComponent key={index} img={item.imgSrc} name={item.gradName} desc={item.gradDesc} className="col-sm" />*/}
            {/*        })*/}
            {/*    }*/}



            {/*</Slider>*/}

            <div className="col-lg arrow">
                <a className="btn prev" href="#">&lt;</a>
            </div>
            <div className="col-lg-3 grad-card">
                <img className="grad-img mx-auto" src="pic/photo-1.jpg" />
                    <h6 className="grad-name">Тамара Сарджвеладзе</h6>
                    <p className="grad-desc text-muted">Выпускница программы ЕМВА. Партнер по кадровой поддержке бизнеса
                        Макрорегион Центр АО Почта Банк</p>
            </div>
            <div className="col-lg-3 grad-card">
                <img className="grad-img mx-auto" src="pic/photo-1.jpg" />
                    <h6 className="grad-name">Наталья Самсон</h6>
                    <p className="grad-desc text-muted">Некоммерческая организация Historic Annapolis (г.Аннаполис,
                        Мэриленд, США), гид.</p>
            </div>
            <div className="col-lg-3 grad-card">
                <img className="grad-img mx-auto" src="pic/photo-1.jpg" />
                    <h6 className="grad-name">Артем Семыкин 1</h6>
                    <p className="grad-desc text-muted">Благодаря спецгруппе поступил в СПбГУ в англоязычную
                        магистратуру, сейчас является студентом Болонского университета в Италии </p>
            </div>
            <div className="col-lg arrow">
                <a className="btn next" href="#">&gt;</a>
            </div>

        </>
    )
};

export default ImageSlider;