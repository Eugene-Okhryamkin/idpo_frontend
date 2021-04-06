import React from "react";
import ImageSlider from "Components/ImageSlider/ImageSlider.jsx";
// import data from "../../../../data/sliderData.json";


const GraduatesSection = () => {
    // const [current, setCurrent] = useState(0);
    // const length = data.length;

    //TODO: create and customize css

    // const nextSlide = e => {
    //     e.preventDefault();
    //     setCurrent(current === length ? 0 : current + 3);
    // }
    //
    // const prevSlide = e => {
    //     e.preventDefault();
    //     setCurrent(current >= length ? current - 1 : length)
    // }
    //
    // if(!Array.isArray(data) || data.length <= 0) {
    //     return null;
    // }

    // console.log(current);

    return (
        <section className="graduates">
            <h2 className="text-center">Наши успешные выпускники</h2>
            <div className="row col-lg-10 mx-auto justify-content-around">


                {/*<div className="col-lg-4 grad-card">*/}
                {/*    <img className="grad-img mx-auto" src="pic/photo-1.jpg" />*/}
                {/*        <h6 className="grad-name">Тамара Сарджвеладзе</h6>*/}
                {/*        <p className="grad-desc text-muted">Выпускница программы ЕМВА. Партнер по кадровой поддержке бизнеса*/}
                {/*            Макрорегион Центр АО Почта Банк</p>*/}
                {/*</div>*/}
                {/*<div className="col-lg-4 grad-card">*/}
                {/*    <img className="grad-img mx-auto" src="pic/photo-1.jpg" />*/}
                {/*        <h6 className="grad-name">Наталья Самсон</h6>*/}
                {/*        <p className="grad-desc text-muted">Некоммерческая организация Historic Annapolis (г.Аннаполис,*/}
                {/*            Мэриленд, США), гид.</p>*/}
                {/*</div>*/}
                {/*<div className="col-lg-4 grad-card">*/}
                {/*    <img className="grad-img mx-auto" src="pic/photo-1.jpg" />*/}
                {/*        <h6 className="grad-name">Артем Семыкин</h6>*/}
                {/*        <p className="grad-desc text-muted">Благодаря спецгруппе поступил в СПбГУ в англоязычную*/}
                {/*            магистратуру, сейчас является студентом Болонского университета в Италии </p>*/}
                {/*</div>*/}
                <ImageSlider />

            </div>

        </section>
    );
}

export default GraduatesSection;