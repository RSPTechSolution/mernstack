import React from 'react';
import './edit.css';
import {Form, Row, Button, Card} from 'react-bootstrap';
import Select from 'react-select';

const options = [
  { value: 'Active', label: 'Active' },
  { value: 'Inactive', label: 'Inactive' },
];

const Edit = () => {
  return (
    <>
      <div className="container">
        <Card className='shadow-card mt-3 p-3'>
        <h2 className='text-center mt-1'>Edit your profile</h2>
          <div className='profile_div text-center'>
            <img src="./male.jpg" alt="" />
          </div>
          <Form>
              <Row>
                <Form.Group className='mb-3 col-lg-6'>
                  <Form.Label>First name</Form.Label>
                  <Form.Control type='text' name='fname' placeholder='Enter Firstname' />
                </Form.Group>
                <Form.Group className='mb-3 col-lg-6'>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control type='text' name='lname' placeholder='Enter Lastname' />
                </Form.Group>
                <Form.Group className='mb-3 col-lg-6'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type='email' name='email' placeholder='Enter Email' />
                </Form.Group>
                <Form.Group className='mb-3 col-lg-6'>
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type='text' name='mobile' placeholder='Enter Mobile' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" >
                  <Form.Label >Select Your Gender</Form.Label>
                  <Form.Check type={"radio"} label={`Male`} name="gender"/>
                  <Form.Check type={"radio"} label={`Female`} name="gender"/>
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" >
                  <Form.Label >Select Your Status</Form.Label>
                  <Select  options={options} />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6">
                  <Form.Label>Select Your Profile</Form.Label>
                  <Form.Control type='file' name='user_profile' placeholder='Select Your Profile'/>
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Enter Your Location</Form.Label>
                  <Form.Control type="text" name='location' placeholder='Enter Your Location' />
                </Form.Group>
                <Form.Group className="mb-3 button" controlId="formBasicEmail">
                  <Button  type="submit" > Submit </Button>
                </Form.Group>
              </Row>
          </Form>
        </Card>
      </div>
    </>
  )
}

export default Edit
