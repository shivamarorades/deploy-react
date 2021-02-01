import React from 'react';
import logo from "../Images/Skin-Care-Sen.png";
import $ from 'jquery';
console.log(logo);
const Carousel=()=>{

	$('document').ready(function(){

  	$('button').on('click',function(){
	
  		$(this).css("outline",'none');
			
		})

	})
	
    return (

<>
<div className="mb-2 " id="homepage" >
<div id="carouselExampleCaptions"  class="carousel slide carousel-fade" data-bs-ride="carousel"> 
  <div class="carousel-inner">
    <div class="carousel-item active  trans" >
     <div className=" w-100 carousel_color "style={{height:"100vh"}}>
  
   <aside className="media_img "><img src={logo}  height="50%" width=""className=""/></aside><div className="container   "style={{transform:"translateY(10em)"}}><div class="col-sm-6   text-white"><div class="gridresponse">
<h1 class="media_font  " ><span class="media_fonti">Sai Clinic</span> Health Care Platform </h1>
<p class="mb-2"  style={{transform:"translateY(1em)",fontSize:"21px"}}>SaiClinic is a fully featured dermatologist  solution with automatic <a href="#" class="w_color text-white">Dermantitis</a>, providing everything you need to get treatment service of hair and nails diseases.</p>
<a href="#cards"> <button  className=" p-3  mt-4 mr-3 rounded-pill hoverin "   style={{border:"none",boxShadow:"1px 1px 1000px 10px white"}}> Get Started</button></a>

</div>
</div>

</div>
</div>

     </div>  
    </div>
   
  </div>
  
</div>

</>
    );
}
export default Carousel;