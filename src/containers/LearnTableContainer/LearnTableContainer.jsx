import React, {useEffect, useState} from "react";

const LearnTableContainer = () => {
    const [learnData, setLearnData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let response = await fetch("http://194.67.116.27:8080/api/get_program_list", {
                method: "GET",
                mode: "no-cors",
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Credentials" : true,
                "Content-Type": "application/json"
            });
            response = await response.json();
            setLearnData(response);
        }

        fetchData();
    })

    const renderTable = () => {
        if(learnData.length) {
            return learnData.map((item, index) => {
                return (
                    <tr key={index}>
                        <th>{item.name}</th>
                        <td><a href="#" className="text-orange">{item.audienceCategory}</a></td>
                        <td>{item.formTraining}</td>
                        <td>{item.duration}</td>
                    </tr>
                )
            });
        }
    }

    return (
        <tbody>
        {
            renderTable()
        }
        </tbody>
    )
};

export default LearnTableContainer;