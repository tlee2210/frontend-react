import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";
import axios from "axios";
//Import Flatepicker

const ListTables = () => {
  const [hotels, setHotels] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://localhost:7045/api/Emp/GetAdmin")
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    //chay function
    fetchData();
  }, []);

  document.title = "Courses List";

  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <Container fluid>
              <BreadCrumb title="Listjs" pageTitle="Tables" />
              <Row>
                <Col lg={12}>
                  <Card>
                    <CardHeader>
                      <h4 className="card-title mb-0">Courses list</h4>
                    </CardHeader>

                    <CardBody>
                      <div className="listjs-table" id="customerList">
                        <Row className="g-4 mb-3">
                          <Col className="col-sm-auto">
                            <div>
                              <Button
                                color="success"
                                className="add-btn me-1"
                                id="create-btn"
                              >
                                <i className="ri-add-line align-bottom me-1"></i>{" "}
                                Add
                              </Button>
                            </div>
                          </Col>
                          <Col className="col-sm">
                            <div className="d-flex justify-content-sm-end">
                              <div className="search-box ms-2">
                                <input
                                  type="text"
                                  className="form-control search"
                                  placeholder="Search..."
                                />
                                <i className="ri-search-line search-icon"></i>
                              </div>
                            </div>
                          </Col>
                        </Row>

                        <div className="table-responsive table-card mt-3 mb-1">
                          <table
                            className="table align-middle table-nowrap"
                            id="customerTable"
                          >
                            <thead className="table-light">
                              <tr>
                                <th className="sort" data-sort="customer_name">
                                  Customer
                                </th>
                                <th className="sort" data-sort="email">
                                  Email
                                </th>
                                <th className="sort" data-sort="phone">
                                  Phone
                                </th>
                                <th className="sort" data-sort="date">
                                  Joining Date
                                </th>
                                <th className="sort" data-sort="status">
                                  Delivery Status
                                </th>
                                <th className="sort" data-sort="action">
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody className="list form-check-all">
                              {hotels &&
                                hotels.map((hotel) => (
                                  <tr key={hotel.id}>
                                    <td
                                      className="id"
                                      style={{ display: "none" }}
                                    >
                                      <Link
                                        to="#"
                                        className="fw-medium link-primary"
                                      >
                                        #VZ2112
                                      </Link>
                                    </td>
                                    <td className="customer_name">
                                      Kevin Dawson
                                    </td>
                                    <td className="email">
                                      kevindawson@velzon.com
                                    </td>
                                    <td className="phone">213-741-4294</td>
                                    <td className="date">14 Apr, 2021</td>
                                    <td className="status">
                                      <span className="badge bg-success-subtle text-success text-uppercase">
                                        Active
                                      </span>
                                    </td>
                                    <td>
                                      <div className="d-flex gap-2">
                                        <div className="edit">
                                          <button
                                            className="btn btn-sm btn-success edit-item-btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#showModal"
                                          >
                                            Edit
                                          </button>
                                        </div>
                                        <div className="remove">
                                          <button
                                            className="btn btn-sm btn-danger remove-item-btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#deleteRecordModal"
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                          <div className="noresult" style={{ display: "none" }}>
                            <div className="text-center">
                              <lord-icon
                                src="https://cdn.lordicon.com/msoeawqm.json"
                                trigger="loop"
                                colors="primary:#121331,secondary:#08a88a"
                                style={{ width: "75px", height: "75px" }}
                              ></lord-icon>
                              <h5 className="mt-2">Sorry! No Result Found</h5>
                              <p className="text-muted mb-0">
                                We've searched more than 150+ Orders We did not
                                find any orders for you search.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex justify-content-end">
                          <div className="pagination-wrap hstack gap-2">
                            <Link
                              className="page-item pagination-prev disabled"
                              to="#"
                            >
                              Previous
                            </Link>
                            <ul className="pagination listjs-pagination mb-0"></ul>
                            <Link className="page-item pagination-next" to="#">
                              Next
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ListTables;
