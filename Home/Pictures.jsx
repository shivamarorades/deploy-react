import React from 'react';

let Pictures=()=>{
	return (
<>
<div class="container para-center" id="cards">
		<h1 class="text-center mb-4"style={{textTransform:"uppercase",letterSpacing:"2px"}}
data-aos="fade-right" data-aos-delay="800" data-aos-duration="700"
		>World Class Treatments</h1>

		<div class="row justify-content-center  "style={{alignItems:"center"}}
data-aos="zoom-in-right" data-aos-delay="500" data-aos-id="super-duper" data-aos-duration="1000"
		 >
		
			<div class="col-sm-6 col-md-3 mr-5 mt-5 ml-4 response transformation_cards p-0" >
				<div class="thumbnail featured-product" >
					<a href="#">
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCU-0H3EB75rtlC4TZL20QY49UuY98UbXqGg&usqp=CAU" width="100%" alt="First"/>
					</a>
					<div className="caption container">
						<h3 >Nails Care</h3>
						<p>Smooth nails, shiny hair, glowing skin. For many people, these are signs of beauty—but what do your skin, hair and nails say about your health? Are they clear, vibrant and strong? </p>
						
					</div>
				</div>
			</div>

			<div class="col-sm-6 col-md-3 mr-5 mt-0 ml-4 response transformation_cards p-0" >
				<div class="thumbnail featured-product">
					<a href="#" >
						<img src="https://onlinelibrary.wiley.com/cms/asset/5358c5d0-f42b-4942-8561-2fc4d12d7136/nfg036.jpg" width="100%"  alt="second" />
					</a>
					<div class="caption mr-3 ml-3" >
						<h3>Acne Scars</h3>
						<p>To obtain the best results, acne scar surgery is often followed by another treatment. After surgery, dermatologists often treat raised scars with injections of corticosteroids, 5-FU, or interferon. </p>
						
					</div>
				</div>
			</div>

			<div class="col-sm-6 col-md-3 mr-5 mt-5 ml-4 response transformation_cards p-0" >
				<div class="thumbnail featured-product">
					<a href="#">
						<img src="https://5.imimg.com/data5/SELLER/Default/2020/9/GZ/KJ/LQ/26941282/platelet-rich-plasma-prp-therapy-for-hair-500x500.jpg" width="100%" alt="third" />
					</a>
					<div class="caption mr-3 ml-3">
						<h3>Prp Therapy</h3>
						<p>Platelet-rich plasma (PRP) therapy uses injections of a concentration of a patient's own platelets to accelerate the healing of injured tendons, ligaments, muscles and joints. In this way</p>
						
					</div>
				</div>
			</div>

		</div>
    </div>
    </>
	);
}
export default Pictures;