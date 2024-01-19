import React from 'react';
import Header from './components/Header/Header';
import MainBanner from './components/MainBanner/MainBanner';
import StudyWithUs from './components/StudyWithUs/StudyWithUs';
import SearchBar from './components/SeacrchCourese/SearchBar';
import BrowseArea from './components/BrowserArea/BrowserArea';
// import StudyOptions from './components/StudyOptions';
// import Footer from './components/Footer';
import ParticlesAuth from '../../layouts/ParticlesAuth';
import { Container } from 'reactstrap';
import SectionIndustry from './components/SectionIndustry/SectionIndustry';
import StudyLevel from './components/StudyLevel/StudyLevel';
import EntrySection from './components/EntrySection/EntrySection';
import WantStudy from './components/WantStudy/WantStudy';
import KeepOnExploring from './components/KeepOnExploring/KeepOnExploring';

function CoursesPage() {
    return (
        <div style={{paddingTop:120}}>
            <ParticlesAuth>
                <Header />
                <MainBanner />
                <StudyWithUs />
                <SearchBar/>
                <BrowseArea />
                <SectionIndustry/>
                <StudyLevel/>
                <EntrySection/>
                <WantStudy/>
                <KeepOnExploring/>
            </ParticlesAuth>
        </div>
    );
}

export default CoursesPage;