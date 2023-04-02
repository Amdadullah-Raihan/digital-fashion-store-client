import React from 'react'
import Login from '../Login/Login';
import useFirebase from '../../hooks/useFirebase';

const PrivateRoute = ({children}) => {

    const {user} = useFirebase();
    
    if(!user.email){
      return <Login></Login>
    }

  return children;
}

export default PrivateRoute;