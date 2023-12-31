import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { Typography } from '@mui/material';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginPage from '../LoginPage/LoginPage';
function LandingPage() {

  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <>
      <Typography variant="h5" sx={{textAlign: 'center',}}> Please login to continue. </Typography>
      <br/>

      <LoginPage />


    </>
  );
}

export default LandingPage;
