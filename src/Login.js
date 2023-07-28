import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();

    const handleSubmit = event => {
      event.preventDefault();
  
      
      navigate('/react-india-region-selector');
    };
  return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input type="password" placeholder="password" />

        <button >Send</button>
      </form>
    </div>
  )
}

export default Login
