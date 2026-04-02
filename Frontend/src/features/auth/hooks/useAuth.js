import{login,register,getMe,logout} from '../services/auth.api'
import { useState, useEffect, useContext, createContext } from 'react'

import { AuthContext} from '../auth.context'

export function useAuth(){

const context=useContext(AuthContext);
const {user,setUser,loading,setLoading}=context;


//register function

async function handleRegister({username,email,password}){

setLoading(true);
const data=await register({email,password,username})
setUser(data.user);
setLoading(false);


}


//handle login function

async function handleLogin({username,email,password}){

setLoading(true);
const data=await login({username,email,password})
setUser(data.user);
setLoading(false);


   
}

//get me function

async function handleGetMe(){

setLoading(true);
const data=await getMe();
setUser(data.user);
setLoading(false);

}

//logout function

async function handleLogout(){

setLoading(true);
await logout();
setUser(null);
setLoading(false);

}

useEffect(()=>{

handleGetMe();
},[])


return({
    user,loading,handleLogin,handleRegister,handleGetMe,handleLogout
})


}