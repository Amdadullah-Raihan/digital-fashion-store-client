import React from 'react'
import Login from '../Login/Login';

const PrivateRoute = ({children}) => {

    const user = true;
    if(!user){
      <Login></Login>
    }

  return children;
}

export default PrivateRoute