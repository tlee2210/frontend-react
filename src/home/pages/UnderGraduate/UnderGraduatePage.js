import React from "react";
import ParticlesAuth from "../../layouts/ParticlesAuth";
import HeaderGraduate from "./components/Header/HeaderGraduate";
import NavBarGraduate from "./components/NavBarGraduate/NavBarGraduate";

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