import React from "react";
import NewsContainer from "Containers/NewsContainer/NewsContainer.jsx";
import EventsContainer from "Containers/EventsContainer/EventsContainer.jsx";

const AnnouncementsSection = () => (
    <section className="announcements">
            <div className="row">
                <div className="col-lg-8">
                    <div className="section-container bg-orange">
                        <p>Новости</p>
                    </div>
                    <NewsContainer />
                    {/*<div className="row">*/}

                        {/*<div className="col-lg news-card mr">*/}
                        {/*    <p className="text-orange news-date">8 oct 2020</p>*/}
                        {/*    <img className="news-img" src="pic/photo-1.jpg" />*/}
                        {/*    <h4>Роспотребнадзор временно закрыл МГТУ имени Баумана из-за вспышки коронавируса</h4>*/}
                        {/*    <p className="text-muted">Роспотребнадзор приостановил работу Московского государственного технического университета (МГТУ) имени Баумана из-за того, что студенты стали чаще болеть коронавирусной инфекцией, а в вузе нарушают меры профилактики. Об этом сообщило*/}
                        {/*        агентство «Москва», ссылаясь на слова а</p>*/}
                        {/*    <p className="text-muted">Сотрудники Роспотребнадзора...<a className="text-orange" href="">Читать дальше</a></p>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg news-card ml">*/}
                        {/*    <p className="text-orange news-date">8 oct 2020</p>*/}
                        {/*    <img className="news-img" src="pic/photo-1.jpg" />*/}
                        {/*    <h4>Обучение в ВГУ временно будет осуществлятся посредством сети интернет</h4>*/}
                        {/*    <p className="text-muted">Роспотребнадзор приостановил работу Московского государственного технического университета (МГТУ) имени Баумана из-за того, что студенты стали чаще болеть коронавирусной инфекцией, а в вузе нарушают меры профилактики. Об этом сообщило*/}
                        {/*        агентство «Москва», ссылаясь на слова а</p>*/}
                        {/*    <p className="text-muted">Сотрудники Роспотребнадзора...<a className="text-orange">Читать дальше</a></p>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
                <div className="col-lg">
                    <div className="section-container bg-orange">
                        <p>События</p>
                    </div>
                    <EventsContainer />
                    {/*<div className="events">*/}
                    {/*    <h4>Объявлен набор на курс по маркетингу</h4>*/}
                    {/*    <p>Программа стартует 8 октября 2020 года. Чтобы узнать подробности или записаться на курс, <a className="text-orange">кликай!</a></p>*/}

                    {/*    <h4>Объявлен набор на курс по информатике</h4>*/}
                    {/*    <p>Программа стартует 21 ноября 2020 года. Чтобы узнать подробности или записаться на курс, <a className="text-orange">кликай!</a></p>*/}

                    {/*    <h4>Приглашаем на семинар по правописанию</h4>*/}
                    {/*    <p>Программа направлена на повышение граммотности среди студентов. Для записи на семинар, <a className="text-orange">кликай!</a></p>*/}

                    {/*    <a className="text-orange">Смотреть больше событий</a>*/}
                    {/*</div>*/}

                </div>
            </div>
        </section>
);

export default AnnouncementsSection;