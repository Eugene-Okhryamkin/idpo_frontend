import React from "react";
import MainSection from "Pages/Main/sections/MainSection/MainSection.jsx";
import IconsSection from "Pages/Main/sections/IconsSection/IconsSection.jsx";
import AnnouncementsSection from "Pages/Main/sections/AnnouncementsSection/AnnouncementsSection.jsx";
import DocumentSection from "Pages/Main/sections/DocumentSection/DocumentSection.jsx";
import LogosSection from "Pages/Main/sections/LogoSection/LogosSection.jsx";
import GraduatesSection from "Pages/Main/sections/GraduatesSection/GraduatesSection.jsx";
import InfographicsSection from "Pages/Main/sections/InfographicsSection/InfographicsSection.jsx";
import ManagersSection from "Pages/Main/sections/ManagersSection/ManagersSection.jsx";

const MainPage = () => (
    <>
        <MainSection />
        <IconsSection />
        <AnnouncementsSection />
        <DocumentSection />
        <LogosSection />
        <GraduatesSection />
        <InfographicsSection />
        <ManagersSection />
    </>
);

export default MainPage;
