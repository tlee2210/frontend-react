import React from 'react'
import { Card, CardBody, Col, Container, Input, Label, Row, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import {
    StripedColumnsTables
} from './BasicTablesCode';


//Im


const BasicTables = () => {
    return (
        <div className="page-content" style={{paddingTop:0}}>
            <h1>Course Search</h1>
            <Row>
                <Col xl={12}>
                    <Card>
                        <CardBody>
                            <div className="live-preview">
                                <div className="table-responsive table-card">
                                    <table className="table align-middle table-nowrap table-striped-columns mb-0">
                                        <thead className="table-light">
                                            <tr>

                                                <th scope="col" style={{ width: "700px" }}>Course Title</th>
                                                <th scope="col">Course code</th>
                                                <th scope="col">Campus</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><Link to="#" className="fw-medium">Bachelor of Business/Bachelor of Applied Innovation </Link></td>
                                                <td>BB-BUSAIN1</td>
                                                <td>Hownthown</td>

                                            </tr>
                                            <tr>
                                                <td><Link to="#" className="fw-medium">Bachelor of Computer Science/Bachelor of Applied Innovation  </Link></td>
                                                <td>BB-CSAIN</td>
                                                <td>Hownthown</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="d-none code-view">
                                <pre className="language-markup" style={{ "height": "275px" }}>
                                    <code>
                                        <StripedColumnsTables />
                                    </code>
                                </pre>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </div>

    )
}

export default BasicTables