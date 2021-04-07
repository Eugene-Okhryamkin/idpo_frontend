import React from "react";
import MainBlockSection from "Pages/Info/sections/MainBlockSection/MainBlockSection.jsx";
import ProgramInfoSection from "Pages/Info/sections/ProgramInfoSection/ProgramInfoSection.jsx";
import DocumentSection from "Pages/Info/sections/DocumentSection/DocumentSection.jsx";
import {useParams} from "react-router";

const InfoPage = () => {
    const { id } = useParams();

    return (
        <>
            <MainBlockSection />
            <ProgramInfoSection id={id} />
            <DocumentSection />
        </>
    )
}


export default InfoPage;