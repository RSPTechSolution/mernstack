import React, {useState, useEffect} from 'react';
import './register.css';
import {Form, Card, Row, Button} from 'react-bootstrap';
import Select from 'react-select';
import Loading from '../../components/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import { registerfunc } from '../../services/Apis';
import {useNavigate} from "react-router-dom"

const options = [
  { value: 'Active', label: 'Active' },
  { value: 'Inactive', label: 'Inactive' },
];

const initialValues = {
  fname:"",
  lname:"",
  email:"",
  mobile:"",
  location:"",
  gender:""
}


const Register = () => {
  const [input, setInput] = useState(initialValues);
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");
  const [showSpin, setShowSpin] = useState(true);
  
  const navigate = useNavigate();

  const handleInput = (e) => {
    const {name, value} = e.target;
    setInput({...input, [name]:value});
  };
  const userProfile = (e) => {
    setImage(e.target.files[0]);
  };
  const setStausValue = (e) => {
    setStatus(e.value);
  }
  
  useEffect(() => {
    if(image){
      setPreview(URL.createObjectURL(image));
    }
    setTimeout(() => {
      setShowSpin(false);
    }, 1200);
  },[image])
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const { fname, lname, email, mobile, gender, location } = input;

    if (fname === "") {
      toast.error("First name is Required !")
    } else if (lname === "") {
      toast.error("Last name is Required !")
    } else if (email === "") {
      toast.error("Email is Required !")
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email !")
    } else if (mobile === "") {
      toast.error("Mobile is Required !")
    } else if (mobile.length > 10) {
      toast.error("Enter Valid Mobile!f")
    } else if (gender === "") {
      toast.error("Gender is Required !")
    } else if (status === "") {
      toast.error("Status is Required !")
    } else if (image === "") {
      toast.error("Prfile is Required !")
    } else if (location === "") {
      toast.error("location is Required !")
    }else{
      // console.log(image);

      const data = new FormData();
      data.append("fname",fname)
      data.append("lname",lname)
      data.append("email",email)
      data.append("mobile",mobile)
      data.append("gender",gender)
      data.append("status",status)
      data.append("user_profile",image)
      data.append("location",location)

      console.log(data.get("user_profile"));

      const config = {
        "Content-Type":"multipart/form-data"
      }
      const response = await registerfunc(data,config);
      
      if(response.status === 200){
        setInput({
          ...input,
          fname:"",
          lname: "",
          email: "",
          mobile: "",
          gender: "",
          location: ""
        });
        setStatus("");
        setImage("");
        // setUseradd(response.data)
        navigate("/");
      }else{
        toast.error("Error!")
      }
    }

  }

  return (
    <>{ 
       showSpin ? <Loading/> : <div className="container">
        <Card className='shadow-card mt-3 p-3'>
          <h2 className='text-center mt-1'>Register Your Details</h2>
            <div className='profile_div text-center'>
              <img src={preview ? preview : "./male.jpg"} alt="" />
            </div>
            <Form onSubmit={handleSubmit}>
                <Row>
                  <Form.Group className='mb-3 col-lg-6'>
                    <Form.Label>First name</Form.Label>
                    <Form.Control type='text' name='fname' placeholder='Enter Firstname' onChange={handleInput}/>
                  </Form.Group>
                  <Form.Group className='mb-3 col-lg-6'>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type='text' name='lname' placeholder='Enter Lastname' onChange={handleInput}/>
                  </Form.Group>
                  <Form.Group className='mb-3 col-lg-6'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' name='email' placeholder='Enter Email' onChange={handleInput}/>
                  </Form.Group>
                  <Form.Group className='mb-3 col-lg-6'>
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type='text' name='mobile' placeholder='Enter Mobile' onChange={handleInput}/>
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-6" >
                    <Form.Label >Select Your Gender</Form.Label>
                    <Form.Check type={"radio"} label={`Male`} value={"Male"} onChange={handleInput} name="gender"/>
                    <Form.Check type={"radio"} label={`Female`} value={"Female"} onChange={handleInput} name="gender"/>
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-6" >
                    <Form.Label >Select Your Status</Form.Label>
                    <Select  options={options} onChange={setStausValue}/>
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-6">
                    <Form.Label>Select Your Profile</Form.Label>
                    <Form.Control type='file' name='user_profile' onChange={userProfile} placeholder='Select Your Profile'/>
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                    <Form.Label>Enter Your Location</Form.Label>
                    <Form.Control type="text" name='location' placeholder='Enter Your Location' onChange={handleInput}/>
                  </Form.Group>
                  <Form.Group className="mb-3 button" controlId="formBasicEmail">
                    <Button  type="submit" > Submit </Button>
                  </Form.Group>
                </Row>
            </Form>
          </Card>
          <ToastContainer position='top-center'/>
        </div>
      }
    </>
  )
}

export default Register
