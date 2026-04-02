import React from 'react'
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router';



const Protected = ({children}) => {

const {user,loading}=useAuth();

const Navigate=useNavigate();

if(loading){
    return <h1>Loading...</h1>
}


if(!loading || !user)
{
return <Navigate to='/login' />;
}


  return (
    children
  )
}

export default Protected