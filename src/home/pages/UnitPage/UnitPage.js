import React from 'react';
import ParticlesAuth from '../../layouts/ParticlesAuth';
import './UnitPage.css';
import { Container, Table, } from 'reactstrap';
import { Link } from 'react-router-dom';


function UnitPage() {
    return (
        <ParticlesAuth>
            {/* Header */}
            <header className="header-container-unit-page-Header" style={{ paddingTop: 210, paddingBottom: 100 }}>
                <div className="header-content-unit-page-Header">
                    <span className="header-code-unit-page-Header">
                        INF20030 • Unit • 12.5 credit points
                    </span>
                    <h1 className="header-title-unit-page-Header">
                        Cloud Approaches for Enterprise Systems
                    </h1>
                    <div className="details-container-unit-page-Header">
                        <div className="detail-unit-page-Header">
                            <strong>
                                <i style={{ fontSize: 25 }} className="las la-clock"></i>
                            </strong>
                            <span style={{ fontSize: 12 }}>
                                24 hours face to face + blended
                            </span>
                        </div>
                        <div className="detail-unit-page-Header">
                            <strong>
                                <i className="las la-calendar"></i>
                            </strong>
                            <span style={{ fontSize: 12 }}>One Semester or equivalent</span>
                        </div>
                        <div className="detail-unit-page-Header">
                            <strong>
                                <i className="mdi mdi-hospital-building"></i>
                            </strong>
                            <span style={{ fontSize: 12 }}>Hawthorn,Online</span>
                        </div>

                    </div>
                </div>
            </header>


            <Container fluid>
                {/* Overview */}
                <div className="row" style={{ paddingTop: 50, paddingBottom: 70 }}>
                    <div className="col-sm-4">
                        <h2 className="overview-title-overview-Graduated">
                            Overview
                        </h2>
                    </div>
                    <div className="col-sm-8">
                        <p className="fs-5">
                            This unit introduces students to the critical role cloud-based Enterprise Resource Planning (ERP) platforms play in supporting efficient and agile business processes. Organisations use ERPs for Customer Relationship Management, Supply Chain Management, Financial Management, as well as for bespoke business functions. The design, configuration, integration and operation of these â€˜software ecosystemsâ€™ is complicated by their scale and the complexity. Through real-world cases, this unit provides an overview of the global, social and economic motivations for cloud-based ERPs and addresses the strategic and managerial issues faced by organisations as they manage their virtual value chains. Students will examine the different types of cloud-based ERP service models (SaaS, PaaS) and explore the key challenges surrounding the management of cloud-based ERPs particularly process integration and data analytics enablement.
                        </p>
                    </div>
                </div>

                {/* Requisites */}
                <div className="row">
                    <div className="col-sm-4">
                        <div className="overview-container-overview-Graduated">
                            <h1 className="overview-title-overview-Graduated">
                                Requisites
                            </h1>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="d-flex flex-column mb-3">
                            <p className='fs-4'>Prerequisites</p>
                            <a href="#" className='text-decoration-underline fs-5'>INF10024 Business Digitalisation</a>

                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="d-flex flex-column mb-3">
                            <p className='fs-4'>Equivalent units</p>
                            <a href="#" className='text-decoration-underline fs-5'>INF20012 Enterprise Systems</a>

                        </div>
                    </div>
                </div>



                {/* Teaching Periods */}
                <div className='row' style={{ paddingBottom: 100 }}>
                    <h1 className='fs-1'>Teaching Periods</h1>
                    <div className="table-responsive">
                        <Table className="align-middle table-nowrap mb-0">

                            <thead className="table-light">
                                <tr>
                                    <th scope="col" >Teaching Periods</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Start and end dates</th>
                                    <th scope="col">Last self-enrolment date</th>
                                    <th scope="col">Census date</th>
                                    <th scope="col">Last withdraw without fail date</th>
                                    <th scope="col">Results released date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Teaching Period 1</td>
                                    <td>Online</td>
                                    <td >11-March-2024 <br />
                                        09-June-2024</td>
                                    <td>
                                        24-March-2024
                                    </td>
                                    <td>05-April-2024</td>
                                    <td>26-April-2024</td>
                                    <td>02-July-2024</td>
                                </tr>
                                <tr>
                                    <td>Semester 2</td>
                                    <td>Hawthorn</td>
                                    <td >29-July-2024 <br />
                                        27-October-2024</td>
                                    <td>
                                        11-August-2024
                                    </td>
                                    <td>31-August-2024</td>
                                    <td>13-September-2024
                                    </td>
                                    <td>03-December-2024</td>
                                </tr>
                                <tr>
                                    <td>Teaching Period 3</td>
                                    <td>Online</td>
                                    <td >04-November-2024 <br />
                                        09-February-2025</td>
                                    <td>
                                        17-November-2024
                                    </td>
                                    <td>29-November-2024</td>
                                    <td>27-December-2024
                                    </td>
                                    <td>04-March-2025</td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                </div>


                {/* Learning outcomes */}
                <div className="row" style={{ paddingTop: 10, paddingBottom: 70 }}>
                    <div className="col-sm-4">
                        <h2 className="overview-title-overview-Graduated">
                            Learning outcomes
                        </h2>
                    </div>
                    <div className="col-sm-8">
                        <ul className='fs-5' style={{ lineHeight: 2, listStyleType: 'none', paddingLeft: 0 }}>
                            <li><i className="mdi mdi-check-bold "></i> Analyse and articulate the role of cloud-based enterprise systems in organisations.     </li>
                            <li><i className="mdi mdi-check-bold " ></i> Develop a coherent understanding of the application of cloud-based enterprise systems to organisational supply-chains.</li>
                            <li><i className="mdi mdi-check-bold "></i> Apply technical and theoretical knowledge regarding the operation of enterprise systems to the management of enterprise information.</li>
                            <li><i className="mdi mdi-check-bold "></i> Check uikings theme and give customer support.</li>
                            <li><i className="mdi mdi-check-bold "></i> Communicate effectively as a professional and function as an effective leader or member of a team.</li>
                        </ul>
                    </div>
                </div>


                {/* Teaching methods */}
                <div className="row" style={{ paddingTop: 1, paddingBottom: 70 }}>
                    <div className="col-sm-4">
                        <h2 className="overview-title-overview-Graduated">
                            Teaching methods
                        </h2>
                    </div>
                    <div className="col-sm-8">

                        {/* Hawthorn */}
                        <div>
                            <h1 className='fs-1 text-dark'>Hawthorn</h1>
                            <div className="table-responsive">
                                <Table className="align-middle table-nowrap mb-0">
                                    <thead className="table-dark">
                                        <tr>
                                            <th scope="col" style={{ padding: '30px 30px 30px 10px' }}>Type</th>
                                            <th scope="col" style={{ padding: '30px 30px 30px 10px' }}>Hours per week</th>
                                            <th scope="col" style={{ padding: '30px 30px 30px 10px' }}>Number of weeks</th>
                                            <th scope="col" style={{ padding: '30px 30px 30px 10px' }}>Total (number of hours)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> <span className='fw-bold'>On-campus</span> <br /> Class</td>
                                            <td>2.00 </td>
                                            <td>12 weeks </td>
                                            <td>24</td>
                                        </tr>
                                        <tr>
                                            <td> <span className='fw-bold'>Online</span> <br /> Lecture</td>
                                            <td>1.00   </td>
                                            <td>12 weeks </td>
                                            <td>12</td>

                                        </tr>
                                        <tr>
                                            <td> <span className='fw-bold'>Online</span> <br /> Lecture</td>
                                            <td>9.50   </td>
                                            <td>12 weeks </td>
                                            <td>114</td>

                                        </tr>
                                        <tr>
                                            <td> <span className='fw-bold'>TOTAL</span></td>
                                            <td>  </td>
                                            <td> </td>
                                            <td><span className='fw-bold'>150</span></td>

                                        </tr>

                                    </tbody>
                                </Table>
                            </div>
                        </div>


                        {/* OUA */}
                        <div style={{paddingTop:70}}>
                            <h1 className='fs-1 text-dark'>OUA</h1>
                            <div className="table-responsive">
                                <Table className="align-middle table-nowrap mb-0">
                                    <thead className="table-dark">
                                        <tr>
                                            <th scope="col" style={{ padding: '30px 30px 30px 10px' }}>Type</th>
                                            <th scope="col" style={{ padding: '30px 30px 30px 10px' }}>Hours per week</th>
                                            <th scope="col" style={{ padding: '30px 30px 30px 10px' }}>Number of weeks</th>
                                            <th scope="col" style={{ padding: '30px 30px 30px 10px' }}>Total (number of hours)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> <span className='fw-bold'>Online</span> <br /> Directed Online <br /> Learning and Independent <br /> Learning</td>
                                            <td>2.00 </td>
                                            <td>12 weeks </td>
                                            <td>24</td>
                                        </tr>

                                        <tr>
                                            <td> <span className='fw-bold'>TOTAL</span></td>
                                            <td>  </td>
                                            <td> </td>
                                            <td><span className='fw-bold'>150</span></td>

                                        </tr>

                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Assessment */}
                <div className="row" style={{ paddingTop: 1, paddingBottom: 70 }}>
                    <div className="col-sm-4">
                        <h2 className="overview-title-overview-Graduated">
                        Assessment
                        </h2>
                    </div>
                    <div className="col-sm-8">
                        <div>
                            <div className="table-responsive">
                                <Table className="align-middle table-nowrap mb-0">
                                    <thead className="table-dark">
                                        <tr>
                                            <th scope="col" style={{ padding: '30px 30px 30px 10px' }}>Type</th>
                                            <th scope="col" style={{ padding: '30px 30px 30px 10px' }}>Task</th>
                                            <th scope="col" style={{ padding: '30px 30px 30px 10px' }}>Weighting</th>
                                            <th scope="col" style={{ padding: '30px 30px 30px 10px' }}>ULO's</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Assignment 1</td>
                                            <td>Individual  </td>
                                            <td>30 - 40%  </td>
                                            <td>1,2,3 </td>
                                        </tr>
                                        <tr>
                                            <td>Assignment 2</td>
                                            <td>Group   </td>
                                            <td>30 - 50%  </td>
                                            <td>1,2,3,4 </td>
                                        </tr>
                                        <tr>
                                            <td>Test </td>
                                            <td>Individual  </td>
                                            <td>20 - 30%  </td>
                                            <td>1,2,3 </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Content */}
                <div className="row" style={{ paddingTop: 10, paddingBottom: 70 }}>
                    <div className="col-sm-4">
                        <h2 className="overview-title-overview-Graduated">
                        Content
                        </h2>
                    </div>
                    <div className="col-sm-8">
                        <ul className='fs-5' style={{ lineHeight: 2, paddingLeft: 0 }}>
                            <li>The strategic and economic context in which organisations operate.</li>
                            <li>The operational and strategic importance of cloud-basedÂ  Enterprise Resource Planning (ERP) systems.</li>
                            <li>Data security, privacy and data sovereignty issues with cloud-based ERPs.Â </li>
                            <li>The integration of individual organisations into supply chains and supply chain systems through cloud ERP models.</li>
                            <li>The lifecycle management challenges of cloud ERPs from solution design, implementation, change management, administration and operational management, and upgrade or decommissioning.</li>
                            <li>The future of cloud-based ERPs.</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </ParticlesAuth>
    );
}

export default UnitPage;