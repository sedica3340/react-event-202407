import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/route-config';
// 라우터 설정


const App = () => {
  
  return (
    <RouterProvider router={router} />
  );
};

export default App;
