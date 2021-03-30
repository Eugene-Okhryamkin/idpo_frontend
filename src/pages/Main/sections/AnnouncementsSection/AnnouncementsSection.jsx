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
                </div>
                <div className="col-lg">
                    <div className="section-container bg-orange">
                        <p>События</p>
                    </div>
                    <EventsContainer />
                </div>
            </div>
        </section>
);

export default AnnouncementsSection;