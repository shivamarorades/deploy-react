import React from 'react';
import Footer from '../Home/Footer.jsx';
import form from './form.js';
console.log(form);
const Contact=()=>{
	return(<>

  <div className=" p-5 w-100 "style={{backgroundColor:"#108DDC"}}></div>
		<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<section id="contact" class="parallax-section d-flex">

     <div class="container "data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000">
          <div class="row ">

               <div class="col-md-12 col-sm-12 para-center">
                    <div class="wow fadeInUp section-title " data-wow-delay="0.2s">
                         <h2 className="mt-2 aboutus-title " data-aos="fade-up" data-aos-delay="900" data-aos-duration="400">Get in touch</h2>
                         <p>Feel free to reach us, we are happy to help you.</p>
                    </div>
               </div>

               <div class="col-md-7 col-sm-10 para-center">
                    <div class="wow fadeInUp" data-wow-delay="0.4s">
                        <form id="my-form" action="https://formspree.io/f/mleopkgv" method="POST">
                              <div class="col-md-6 col-sm-6 form-group">
                                   <input type="text" class="form-control" name="name" placeholder="Name" required=""/>
                              </div>
                              <div class="col-md-6 col-sm-6 form-group">
                                   <input type="email" class="form-control" name="email" placeholder="Email" required=""/>
                              </div>

                              <div class="col-md-6 col-sm-6 form-group">
                                   <input type="text" class="form-control" name="text" placeholder="Phone number" required=""/>
                              </div>
                              <div class="col-md-12 col-sm-12 form-group">
                                   <textarea class="form-control" rows="5" name="message" placeholder="Message" required=""></textarea>
                              </div>
                              <div class="col-md-offset-8 col-md-4 col-sm-offset-6 col-sm-6">
                                   <button id="submit" type="submit" class="form-control" data-dismiss="modal" name="submit">Send Message</button>
                              </div>

                        </form>
                    </div>
                    <div id="my-form-status"></div>
               </div>

               <div class="col-md-5 col-sm-8 para-center mt-2" data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000">
                    <div class="wow fadeInUp contact-info" data-wow-delay="0.4s">
                         <div class="section-title">
                              <h2 className="aboutus-title"data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000">Contact Info</h2>
                              <p data-aos="fade-up" data-aos-delay="900" data-aos-duration="700">Get connected with us. wash your hands daily for daily protection and feedback us so that we will improve as according to you.</p>
                         </div>
                         
                         <p><i class="fa fa-map-marker"></i> Dg2 3B Vikaspuri New Delhi 110018 D Block</p>
                         <p><i class="fa fa-comment"></i> <a href="mailto:rkgarg242@gmail.com" style={{color:"purple"}}>rkgarg242@gmail.com</a></p>
                         <p><i class="fa fa-phone"></i> 010-020-0340</p>


                    </div>
               </div>

          </div>
     </div>

</section>

<script src={form} />

<Footer/>
		</>);
}
export default Contact;