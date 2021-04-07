import React, {useEffect, useState} from "react";
import NewsComponentItem from "Components/NewsComponentItem/NewsComponentItem.jsx";

const NewsContainer = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let response = await fetch("http://194.67.116.27:8080/api/get_news");
            response = await response.json();
            setNewsData(response);
        }

        fetchData();
    }, []);

    const renderNewsItems = () => {
        if(newsData.length) {
            return newsData.map((item, index) => {
                return <NewsComponentItem
                    key={index}
                    imgSrs={item.imgSrc}
                    title={item.title}
                    text={item.text}
                    url={item.url}
                />
            })
        }
    }

    return (
        <div className="row">
            {
                renderNewsItems()
            }
        </div>
    )
}



export default NewsContainer;