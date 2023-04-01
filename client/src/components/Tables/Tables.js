import React from 'react';
import { Row, Card, Table, Dropdown, Badge } from 'react-bootstrap';
import { BASE_URL } from '../../services/helper';
import {NavLink} from 'react-bootstrap';

const Tables = (usersData) => {
    // const [userData] = usersData.usersData;
    console.log(usersData.usersData.length);
  return (
    <>
      <div className="container">
        <Row>
            <div className="col mt-0">
                <Card className="shadow">
                    <Table className="align-item-center" responsive="sm">
                        <thead className='thead-dark'>
                            <tr className='table-dark'>
                            <th>ID</th>
                            <th>FullName</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>&nbsp;&nbsp;&nbsp;Status</th>
                            <th>Profile</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usersData.usersData.length > 0 ? usersData.usersData.map((element, index) =>{
                                    return (
                                        <>
                                            <tr>
                                                <td>{index + 1}</td> 
                                                <td>{element.fname + element.lname}</td>
                                                <td>{element.email}</td>
                                                <td>{element.gender === "Male" ? "M" : "F"}</td>
                                                <td className='d-flex align-items-center'>
                                                <Dropdown className='text-center'>
                                                    <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                                                    <Badge bg={element.status === "Active" ? "primary" : "danger"}>
                                                        {element.status} <i className="fa-solid fa-angle-down"></i>
                                                    </Badge>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                    <Dropdown.Item >Active</Dropdown.Item>
                                                    <Dropdown.Item >InActive</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                </td>
                                                <td className='img_parent'>
                                                <img src={`${BASE_URL}/uploads/${element.profile}`} alt="img" />
                                                </td>
                                                <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant='light' className='action' id="dropdown-basic">
                                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                    <Dropdown.Item >
                                                        <NavLink to={`/userprofile/${element._id}`} className="text-decoration-none">
                                                        <i className="fa-solid fa-eye" style={{ color: "green" }}></i> <span>View</span>
                                                        </NavLink>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item >
                                                        <NavLink to={`/edit/${element._id}`} className="text-decoration-none">
                                                        <i className="fa-solid fa-pen-to-square" style={{ color: "blue" }}></i> <span>Edit</span>
                                                        </NavLink>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item >
                                                        <div>
                                                        <i className="fa-solid fa-trash" style={{ color: "red" }}></i> <span>Delete</span>
                                                        </div>
                                                    </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                }) :  (
                                    <tr>
                                        <td colSpan="7" className='no_data text-center'>NO Data Found</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Card>
            </div>
        </Row>
      </div>
    </>
  )
}

export default Tables
