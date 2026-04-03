import React, { useState } from 'react';
import '../style/register.scss';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';
import FormGroup from '../components/FormGroup';

const Register = () => {

const{handleRegister,loading}=useAuth();    
const [username,setUsername]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const Navigate=useNavigate();

async function handleSubmit(e){

e.preventDefault();
// Call the register function from useAuth hook here
await handleRegister({username,email,password});

Navigate('/');

}


    return (
    <div className="moodify-auth">
      <div className="neon-grid"></div>
      <div className="auth-card">
        <h1 className="logo">Moodify</h1>
        <h2 className="title">Create Your Account</h2>
        <form className="form" onSubmit={handleSubmit}>
          <FormGroup
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormGroup
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormGroup
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn">Register</button>
        </form>
        <p className="switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
      <div className="equalizer">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Register;
