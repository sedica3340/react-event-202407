import React, { useEffect, useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import Main from '../components/Main';
import { useRouteLoaderData } from 'react-router-dom';

const WelcomePage = () => {
    const userData = useRouteLoaderData('user-data');

  

  return (
    <>
      {!userData && <LoginForm />}
      {userData && <Main />}
    </>
  );
};

export default WelcomePage;
