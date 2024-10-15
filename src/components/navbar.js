import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar(props) {

  
    return (
      
        <nav className="navbar navbar-expand-sm fixed-top bg-dark" data-bs-theme="dark">
          <div className="container-fluid mx-5">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link  to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link  to="/sports" className="nav-link">Sports</Link></li>
              <li className="nav-item"><Link  to="/technology" className="nav-link">technology</Link></li>
              <li className="nav-item"><Link  to="/science" className="nav-link">Science</Link></li>
              <li className="nav-item"><Link  to="/entertainment" className="nav-link">entertainment</Link></li>
              <li className="nav-item"><Link  to="/health" className="nav-link">health</Link></li>
              <li className="nav-item"><Link  to="/about" className="nav-link">About</Link></li>
            </ul>
            </div>
          </div>
          <div className="form-check form-switch wi">
            <input className="form-check-input" type="checkbox" onClick={props.changemode} id="flexSwitchCheckDefault"/>
            <label className= "form-check-label text-white"   htmlFor="flexSwitchCheckDefault">{`${props.mode==='light'?"Enable dark mode":"Enable light mode"}`}</label>
            </div>
        </nav>
      


    )
  
}
