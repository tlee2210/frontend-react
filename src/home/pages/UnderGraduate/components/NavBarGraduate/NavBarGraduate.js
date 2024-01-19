import React, { useState } from 'react';
import OverviewContent from './ConentView/OverviewContent';
import EntryRequirementsContent from './ConentView/EntryRequirementsContent';
import StudyStructureContent from './ConentView/StudyStructureContent';
import FeesScholarshipsContent from './ConentView/FeesScholarshipsContent';
import HowToApplyContent from './ConentView/HowToApplyContent';
import './NavBarGraduate.css';
import { Container } from 'reactstrap';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState('overview');

  return (
    <Container>
      <div className="navbar-graduate-Navbar">
        <a
          className={`navbar-item-graduate-Navbar ${currentPage === 'overview' ? 'active' : ''}`}
          onClick={() => setCurrentPage('overview')}
        >
          <i><FeatherIcon icon="edit" /></i><span>Overview</span>
        </a>
        <a
          className={`navbar-item-graduate-Navbar ${currentPage === 'entry-requirements' ? 'active' : ''}`}
          onClick={() => setCurrentPage('entry-requirements')}
        >
          <i className='las la-file-alt'></i><span>Entry requirements</span>
        </a>
        <a
          className={`navbar-item-graduate-Navbar ${currentPage === 'study-structure' ? 'active' : ''}`}
          onClick={() => setCurrentPage('study-structure')}
        >
          <i className='las la-book'></i><span>Study structure</span>
        </a>
        <a
          className={`navbar-item-graduate-Navbar ${currentPage === 'fees-scholarships' ? 'active' : ''}`}
          onClick={() => setCurrentPage('fees-scholarships')}
        >
          <i className='las la-dollar-sign'></i><span>Fees & Scholarships</span>
        </a>
        <a
          className={`navbar-item-graduate-Navbar ${currentPage === 'how-to-apply' ? 'active' : ''}`}
          onClick={() => setCurrentPage('how-to-apply')}
        >
          <i><FeatherIcon icon="edit" /></i><span>How to apply</span>
        </a>
      </div>
      <div className="content-graduate-Navbar">
        {/* Render content based on the current page */}
        {currentPage === 'entry-requirements' && <EntryRequirementsContent />}
        {currentPage === 'study-structure' && <StudyStructureContent />}
        {currentPage === 'fees-scholarships' && <FeesScholarshipsContent />}
        {currentPage === 'how-to-apply' && <HowToApplyContent />}
        {currentPage === 'overview' && <OverviewContent />}
      </div>
    </Container>
  );
};

export default MainPage;