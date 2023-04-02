import React from 'react'
import googleIcon from '../../assests/icons/google.png'
import useFirebase from '../../hooks/useFirebase'

const Login = () => {
  const {handleGoogleSignin, handleLogOut,user}= useFirebase();


  return (
    <div className='w-full'>

      <div className='min-h-[450px] max-w-md bg-blue-50 mx-auto mt-16 p-6 flex items-center shadow'>
        {
        !user.email? <button onClick={handleGoogleSignin} className='btn btn-outline border-blue-500 w-full rounded-full'><img src={googleIcon} alt="" className='mr-2' /> Login with google</button> :
        <div className='w-full'>
              <img src={user.photoURL} alt=""  className='mb-4 mx-auto rounded-full'/>
          <h4 className="text-lg mb-4 text-center">{user?.email}</h4>
          <button onClick={handleLogOut} className='btn border-blue-500 w-full rounded-full'>Log out</button>
        </div>
        }
      </div>
    </div>
  )
}

export default Login