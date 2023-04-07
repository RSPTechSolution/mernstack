import React, { useEffect, useState } from 'react';
import './home.css';
import {Form, Button, Dropdown} from 'react-bootstrap';
import Loading from "../../components/Loading/Loading";
import Tables from '../../components/Tables/Tables';
import { getUsers } from '../../services/Apis';
import {Link} from 'react-router-dom';
import {AiOutlinePlus, AiOutlineSortDescending } from 'react-icons/ai';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [showspin, setShowSpin] = useState(true);

  const usersGet = async () => {
    const response = await getUsers();
    if(response.status === 200){
      setUsers(response.data);
    }
  }
  // console.log(users);

  useEffect(() => {
    usersGet();
    setTimeout(() => {
      setShowSpin(false)
    }, 1200);
  },[])
  return (
    <>
      <div className="container--fluid filters">
        <div className="container">
          <div className="main_div">
            <div className="search_add mt-4 d-flex justify-content-between">
                <div className="search col-lg-4">
                  <Form className="d-flex">
                    <Form.Control type="search" placeholder="Search"className="me-2" aria-label="Search"/>
                    <Button className='search_btn'>Search</Button>
                  </Form>
                </div>
                <div className="add_btn">
                  <Link to='/register'><Button> <AiOutlinePlus/>&nbsp; Add User</Button></Link>
                  
                </div>
            </div>
            <div className="filter_div mt-5 d-flex justify-content-between flex-wrap">
              <div className="export_csv">
                <Button className='export_btn'>Export To Csv</Button>
              </div>
              <div className="filter_gender">
                <div className="filter">
                  <h3>Filter By Gender</h3>
                  <div className="gender d-flex justify-content-between">
                    <Form.Check
                      type={"radio"} label={`All`} name="gender"value={"All"} defaultChecked/>
                    <Form.Check
                      type={"radio"} label={`Male`} name="gender" value={"Male"}/>
                    <Form.Check type={"radio"} label={`Female`} name="gender" value={"Female"}/>
                  </div>
                </div>
              </div>

              {/* short by value */}
              <div className="filter_newold">
                <h3>Short By Value</h3>
                <Dropdown className='text-center'>
                  <Dropdown.Toggle className='dropdown_btn' id='dropdown-basic'>
                    <AiOutlineSortDescending />
                  </Dropdown.Toggle>
                  <Dropdown.Menu> 
                    <Dropdown.Item>New</Dropdown.Item>
                    <Dropdown.Item>Old</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              {/* filter by status */}
              <div className="filter_status">
              <div className="status">
                <h3>Filter By Status</h3>
                <div className="status_radio d-flex justify-content-between flex-wrap">
                  <Form.Check
                    type={"radio"}
                    label={`All`}
                    name="status"
                    value={"All"}
                    defaultChecked
                  />
                  <Form.Check
                    type={"radio"}
                    label={`Active`}
                    name="status"
                    value={"Active"}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`InActive`}
                    name="status"
                    value={"InActive"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          showspin ? <Loading/> : <Tables usersData={users}/>
        }
      </div>
      </div>
    </>
  )
}

export default Home
