import React from 'react';
import logo from './Skin-Care-Sen.png';
console.log(logo);
let Navbar=()=>{

  window.addEventListener("scroll", function(){
    var nav=document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  });    
return (<>
<nav className="navbar navbar-expand-lg navbar-dark blur fixed-top nav2 trans" >
<img className="filt" src={logo} width="30" height="30" alt="bonelogo"/>
<span class="navbar-brand mb-0 h1 ">Skin Specialist</span>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Book Appointment</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Contact Us
        </a>
        <div className="dropdown-menu " aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{letterSpacing:"2px"}} href="#">FAQ</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>


    


</>);
}

export default Navbar;