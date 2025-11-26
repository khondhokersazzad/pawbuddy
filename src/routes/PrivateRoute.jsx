import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
  const {user,loading} = useContext(AuthContext);
  const location = useLocation();
  if(user){
    return children;
  }

  if(loading){
    return <Loading></Loading>
  }

  return <Navigate state={location.pathname} to='/auth/login'></Navigate>;
};

export default PrivateRoute;