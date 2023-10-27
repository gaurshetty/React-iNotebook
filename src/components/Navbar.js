import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = (props) => {
  let location = useLocation();
  let navigate = useNavigate()

  const handleClick = () => {
    localStorage.removeItem('token');
    navigate('/login')
    props.showAlert("Successfully Logged Out!", "danger")
  }
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><strong>iNotebook</strong></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/"? "active": ""}`} aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/about"? "active": ""}`} to="/about">About</Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                {!localStorage.getItem('token')?
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/login"? "active": ""}`} to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/signup"? "active": ""}`} to="/signup">SignUp</Link>
                  </li>
                </ul>:
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                   <Link onClick={handleClick} className={`nav-link ${location.pathname === "/login"? "active": ""}`} to="/login">Logout</Link>
                  </li>
                </ul>}
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
