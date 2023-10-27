import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom';

const Login = (props) => {
  const host = "http://localhost:5000"
  const [credentials, setCredentials] = useState({email: "", password: ""})
  let navigate = useNavigate ();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    });
    const result = await response.json()
    console.log(result)
    if(result.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', result.authtoken); 
      navigate('/');
      props.showAlert("Successfully Logged In!", "success")
    }
    else{
      props.showAlert(result.errors, "danger")
    }
  };

  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  };
  return (
    <div className='container' style={{marginTop:"100px"}}>
      <h1 className='text-center'>Login to your account</h1>
      <div className="row mt-4">
        <div className="col-md-4 offset-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
