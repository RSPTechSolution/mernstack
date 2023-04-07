import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { getSingleUser } from '../../services/Apis';
import {Card, Row} from 'react-bootstrap';
import { BASE_URL } from '../../services/helper';
import Loading from '../../components/Loading/Loading';
import moment from 'moment';
import {BsFillEnvelopePlusFill, BsFillPersonFill, BsCalendarDate} from 'react-icons/bs';
import {AiOutlineMobile} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import './profile.css';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [showspin, setShowSpin] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    const userProfileGet = async () => {
      const response = await getSingleUser(id);
  
      if(response.status === 200){
        setUserProfile(response.data)
      }else{
        console.log("error");
      }
    }
  
    userProfileGet();
    setTimeout(() => {
      setShowSpin(false)
    }, 1200);
  },[id]);
  
  // userProfileGet(); 
  return (
    <>
      {
        showspin ? <Loading/> :  <div className='container'>
          <Card className='card-profile shadow col-lg-6 mx-auto mt-5 bg-dark'>
            <Card.Body>
              <Row>
                <div className='col'>
                  <div className="card-profile-stats d-flex justify-content-center">
                    <img src={`${BASE_URL}/uploads/${userProfile.profile}`} alt="" />
                  </div>
                </div>
              </Row>
              <div className='text-center'>
                <h3>{userProfile.fname + userProfile.lname}</h3>
                <h4><BsFillEnvelopePlusFill/>&nbsp;:- <span>{userProfile.email}</span> </h4>
                <h5><AiOutlineMobile/>&nbsp;:- <span>{userProfile.mobile}</span> </h5>
                <h4><BsFillPersonFill/>&nbsp;:- <span>{userProfile.gender}</span> </h4>
                <h4><GoLocation/>&nbsp;:- <span>{userProfile.location}</span> </h4>
                <h4>Status&nbsp;:- <span>{userProfile.status}</span> </h4>
                <h5><BsCalendarDate/>&nbsp;Date Created&nbsp;:- <span>{moment(userProfile.datecreated).format("DD-MM-YYYY")}</span> </h5>
                <h5> <BsCalendarDate/>&nbsp;Date Updated&nbsp;:- <span>{userProfile.dateUpdated}</span> </h5>
              </div>
            </Card.Body>
          </Card>
        </div>
      }
      Profile
    </>
  )
}

export default Profile
