import React, {useEffect, useState} from "react";
import EventComponentItem from "Components/EventComponentItem/EventComponentItem.jsx";

const EventsContainer = () => {
    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let response = await fetch("https://virtserver.swaggerhub.com/Happyer29/IDPO/1.0.0/get_events");
            response = await response.json();
            setEventData(response);
        }

        fetchData();
    }, [])

    const renderEventItems = () => {
        if(eventData.length) {
            return eventData.map((item, index) => {
                return <EventComponentItem key={index} title={item.title} description={item.description}  />
            });
        }
    }

    return (
        <div className="events">
            {
                renderEventItems()
            }
        </div>
    )
};

export default EventsContainer;