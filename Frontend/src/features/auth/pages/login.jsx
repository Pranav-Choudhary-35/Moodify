import '../style/login.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import FormGroup from '../components/FormGroup';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { loading, handleLogin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const Navigate=useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    await handleLogin({ email, password });
  
Navigate('/');
}



  return (
    <div className="moodify-auth">
      <div className="neon-grid"></div>
      <div className="auth-card">
        <h1 className="logo">Moodify</h1>
        <h2 className="title">Login to the Dark Beat</h2>
        <form className="form" onSubmit={handleSubmit}>
          <FormGroup
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormGroup
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button  className="btn" >Login
          </button>
        </form>
        <p className="switch">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
      <div className="equalizer">
        <div></div><div></div><div></div>
      </div>
    </div>
  );
};

export default Login;
