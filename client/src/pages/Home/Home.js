import React from 'react';
import './home.css';
import {Form, Button} from 'react-bootstrap';

const Home = () => {
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
                  <Button> <i class="fa-solid fa-plus"></i>&nbsp; Add User</Button>
                </div>
            </div>
            <div className="filter_div mt-5 d-flex justify-content-between flex-wrap">
            <div className="export_csv">
              <Button className='export_btn' onClick={exportuser}>Export To Csv</Button>
            </div>
            <div className="filter_gender">
              <div className="filter">
                <h3>Filter By Gender</h3>
                <div className="gender d-flex justify-content-between">
                  <Form.Check
                    type={"radio"} label={`All`} name="gender"value={"All"} defaultChecked/>
                  <Form.Check
                    type={"radio"}
                    label={`Male`} name="gender" value={"Male"}/>
                  <Form.Check
                    type={"radio"}
                    label={`Female`}
                    name="gender"
                    value={"Female"}
                    onChange={(e)=>setGender(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
