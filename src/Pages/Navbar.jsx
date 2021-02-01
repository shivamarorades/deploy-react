import React from "react";
import logo from "./Images/Skin-Care-Sen.png";
import { NavLink } from "react-router-dom";
import $ from 'jquery';
import form from './Contact/form.js';
import {ToastContainer, toast, Zoom, Bounce} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Carousel from './Home/Carousel.jsx';
console.log(logo);
console.log(form);


let Navbar = () => {
if(window){
window.addEventListener("scroll",function(){
	let menuArea=document.getElementById('menu-area');
	if(window.pageYOffset > 0){
		menuArea.classList.add("sticky");
	}
	else{
		menuArea.classList.remove("sticky");
	}
});
}

$('document').ready(function(){
  $("button").on('click',function(){
    $("button").css("outline",'none');
  })
})
const notify=()=>{
  toast.error("Please wait while we process your request");
};
  return (

    <>
  
      <nav className="navbar navbar-expand-lg p-4 text-white aos-init aos-animate
         fixed-top  "

data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000"
         id="menu-area">
        <div className="container-fluid">
  
  <a className="navbar-brand logo_name" href="https://www.saiclinik.com"  style={{fontFamily:"arial"}}id="menu-area" 
  ><span className="sai1">Sai</span> <span className="clinic1">Clinic</span></a>
  <button class="navbar-toggler navbar-light bg-light collapsed background " id="navbar_toggle"type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" id="direct" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto " id="menu-area">   
        <NavLink to="/"style={{textDecoration:"none"}} className="active"

data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"

        >
      <li className="nav-item " href="#homepage">

        <a className="nav-link  "  href="/"id="hoveron">Home <span className="sr-only "></span></a>
    
      </li>
    
    
      </NavLink>
    
     <NavLink to="/business"style={{textDecoration:"none"}} className="active"

     >
      <li className="nav-item">
        <a className="nav-link" href="/business"id="hoveron"
data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000"


        >Business Info</a>

      </li>

</NavLink>
     <NavLink to="/about"style={{textDecoration:"none"}} className="active"


     >
      <li className="nav-item">
        <a className="nav-link" href="/about" id="hoveron"
data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000"

        >About</a>

      </li>
      </NavLink>

     <NavLink to="/contact"style={{textDecoration:"none"}} className="active"


     >
 
      <li className="nav-item">
        <a className="nav-link"  href="/contact"  id="hoveron"
data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000">
          Contact Us
        </a>
      </li>
      </NavLink>

    </ul>
    
  <button type="button"  class=" pr-4 pl-4 pt-2 pb-2 rounded-pill nav_hoverout  " data-bs-toggle="modal" data-bs-target="#exampleModal">
  Book Appointment
</button>


  </div>
  </div>
</nav>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
 <div class="modal-dialog modal-dialog-centered  modal-lg  " role="document">
        <div class="modal-content">

            <div class="container-fluid">
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><small>×</small></span>
                </button>
                <div class="row">
                    <div class="col-md-6 bg-img rounded-left m-h-60 d-none d-sm-block " 
                    style={{backgroundImage: "url('https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",transform:"translateX(-1em)"}}>

                    </div>
                    <div class="col-md-6 py-5 px-sm-1 my-auto ">

                        <h2 class="pt-sm-3 heading-modal">Book now to get the immediate results</h2>
                        <p class="text-muted para-center">
                            Please write your email address here to book now happy to help you.
                        </p>
                        <form id="my-form" action="https://formspree.io/f/mleopkgv" method="POST">
                            <div class=" para-center form-group">
                                <label for="">Name</label>
                                <input type="text"name="name"class="para-center form-control" id="" aria-describedby="emailHelp" placeholder="Enter Your Full Name" required=""/>
                                <br/>
                                <label for="">Email address</label>
                                <input type="email" name="email"class="para-center mb-4 form-control" id="" aria-describedby="emailHelp" placeholder="Enter Email" required=""/>
                                <label for="">Phone Number</label>
                                <input type="phone" name="phone"class="para-center  form-control" id="" aria-describedby="emailHelp" placeholder="Enter Phone Number" required=""/>
                                <small id="emailHelp" class="para-center ml-3 form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>

                            <button type="submit" onClick={notify} className="btn-block btn-cta" id="hover-modal" data-dismiss="modal" aria-label="Close" >Submit</button>
                            
                            <div id="my-form-status"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>    
<ToastContainer/>
<script src={form} ></script>
    </>
  );
}

export default Navbar;