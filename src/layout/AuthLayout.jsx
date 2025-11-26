import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div>
      <nav>
        <NavBar></NavBar>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;