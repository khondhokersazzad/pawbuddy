import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
  const {user,loading} = useContext(AuthContext);
  console.log(loading);
  if(user){
    return children;
  }

  if(loading){
    return <Loading></Loading>
  }

  return <Navigate to='/auth/login'></Navigate>;
};

export default PrivateRoute;