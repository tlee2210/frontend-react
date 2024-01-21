import React from 'react';
import ParticlesAuth from '../../layouts/ParticlesAuth';
import HeaderSourcePage from './components/Header';
import Index from './components';

function CoursesPage() {
    return (
        <div style={{ paddingTop: 120 }}>
            <ParticlesAuth>
                <HeaderSourcePage />
                <Index />
            </ParticlesAuth>
        </div>
    );
}

export default CoursesPage;