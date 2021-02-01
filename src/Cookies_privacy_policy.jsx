import React from 'react';
import { NavLink } from "react-router-dom";
let Cookies_privacy_policy=()=>{
	return(
<>

<div className="alert para-center   bg-light  fixed-bottom  top-fixed alert-dismissible fade show p-5 " role="alert"style={{borderRadius:"0px",transform:"translateY(2em)"}}>


  <strong className="text-black">About cookies on this site</strong>

  <br/> 
  We use cookies to collect and analyse information on site performance and usage, to provide social media<br/> features and to enhance and customise content and advertisements.<br/>
<NavLink to="/privacy_policy">
  <span  className="text-black ml-4 mr-5" href="/privacy_policy">Privacy policy.</span> 
  </NavLink>
  <button type="button" className="mt-3 pt-2 pb-2   text-white pr-5 pl-5  "id=""
style={{border:"none",outline:"none",backgroundColor:"#108DDC"}}
   data-bs-dismiss="alert" >Accept</button>
</div>
</>
	);
}
export default Cookies_privacy_policy;