import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/"> */}
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li> */}
            </ul>
            <div className="d-flex">
                  <div className="bg-primary rounded mx-2"  style={{height:'30px',width:'30px', cursor:"pointer"}} onClick={()=>props.toggleMode('primary')}></div>
                  <div className="bg-success rounded mx-2"  style={{height:'30px',width:'30px', cursor:"pointer"}} onClick={()=>props.toggleMode('success')}></div>
                  <div className="bg-warning rounded mx-2"  style={{height:'30px',width:'30px', cursor:"pointer"}} onClick={()=>props.toggleMode('warning')}></div>
                  <div className="bg-danger rounded mx-2"  style={{height:'30px',width:'30px', cursor:"pointer"}}  onClick={()=>props.toggleMode('danger')}></div>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" onClick={()=>props.toggleMode('null')} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" for="flexSwitchCheckDefault" style={{color:props.mode==='light'?'black':'white'}}>Enable dark mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  about: "About text here",
};
