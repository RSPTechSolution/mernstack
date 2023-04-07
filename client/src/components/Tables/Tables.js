import React from 'react';
import { Row, Card, Table, Dropdown, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../services/helper';
import './Table.css';
import { AiFillEye } from 'react-icons/ai';
import { FaEllipsisV } from 'react-icons/fa';
import { BsPencilSquare, BsTrash3 } from 'react-icons/bs';
import { TfiAngleDown } from 'react-icons/tfi';

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
                                                        {element.status} <TfiAngleDown/>
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
                                                    <FaEllipsisV/>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                    <Dropdown.Item >
                                                        <Link to={`/userprofile/${element._id}`} className="text-decoration-none">
                                                        <AiFillEye style={{ color: "green" }} /> <span>View</span>
                                                        </Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item >
                                                        <Link to={`/edit/${element._id}`} className="text-decoration-none">
                                                       <BsPencilSquare style={{ color: "blue" }}/> <span>Edit</span>
                                                        </Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item >
                                                        <div>
                                                        <BsTrash3 style={{ color: "red" }}/> <span>Delete</span>
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
