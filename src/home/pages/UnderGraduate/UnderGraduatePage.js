import React from "react";
import ParticlesAuth from "../../layouts/ParticlesAuth";
import HeaderGraduate from "./components/Header/HeaderGraduate";
import NavBarGraduate from "./components/NavBarGraduate/NavBarGraduate";
import ProfessionalAccreditations from "./components/NavBarGraduate/ConentView/ProfessionalAccreditations/ProfessionalAccreditations";
import WhySwinburne from "./components/NavBarGraduate/ConentView/WhySwinburne/WhySwinburne";

function UnderGraduatePage() {
    return (
        <div style={{paddingTop:150}}>
        <ParticlesAuth>
            <HeaderGraduate/>
            <NavBarGraduate/>
        </ParticlesAuth>

        </div>
    )
}

export default UnderGraduatePage;