import React from 'react';
import Footer from '../Home/Footer.jsx';
const About=()=>{
	return(<>
<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'/>
  <div className=" p-5 w-100"style={{backgroundColor:"#108DDC"}}></div>
<div class="aboutus-section ">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="aboutus">
                        <h2 class="aboutus-title" 
data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">About Us</h2>
                        <p class="aboutus-text para-center" 
data-aos="fade-up" data-aos-delay="900" data-aos-duration="1500">Dr. RK Garg is the one of the best skin specialist or a dermatologist in the whole vikaspuri as a wise and a family doctor.</p>
                        <p class="aboutus-text para-center" 
data-aos="fade-up" data-aos-delay="1400" data-aos-duration="1900">Get more information and to schedule an appointment with the doctor, citizens can reach out on the following contact number +(91)-11-41537863.</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="aboutus-banner">
                        <img src="http://themeinnovation.com/demo2/html/build-up/img/home1/about1.jpg" alt=""data-aos="fade-up" data-aos-delay="600" data-aos-duration="2000"/>
                    </div>
                </div>
                <div class="col-md-5 col-sm-6 col-xs-12">
                    <div class="feature">
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content para-center mt-4">
                                    <h4>Work with heart</h4>
                                    <p>Well we care the patient as we know what a systematic time we have to give in a queue in terms of our facilities and patient experiences.</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content para-center">
                                    <h4>Reliable services</h4>
                                    <p>As we go through to the more we think as what you think about how performance of services are.</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content para-center">
                                    <h4>Great support</h4>
                                    <p>Family doctor where you can frankly mix communicate and get the best support from us regarding your things.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
		</>
		);
}
export default About;