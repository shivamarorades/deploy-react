import React from 'react';

let Footer=()=>{
    return (
<>
<footer class="page-footer font-small unique-color-dark text-white colors2">

  <div style={{backgroundColor: ""}} className="colors4">
    <div class="container">


      <div class="row py-4 d-flex align-items-center">

       <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 class="mb-0 text-light" >Get connected with us on social networks!</h6>
        </div>



        <div class="col-md-6 col-lg-7 text-center text-md-right">


          <a class="fb-ic"style={{cursor:"pointer"}}>
            <i class="fab fa-facebook-f white-text mr-4 text-white"> </i>
          </a>

          <a class="tw-ic " style={{cursor:"pointer"}}>
            <i class="fab fa-twitter white-text mr-4 text-white"> </i>
          </a>

          <a class="gplus-ic" style={{cursor:"pointer"}}>
            <i class="fab fa-google-plus-g white-text mr-4 text-white"> </i>
          </a>

          <a class="li-ic" style={{cursor:"pointer"}}>
            <i class="fab fa-linkedin-in white-text mr-4 text-white"> </i>
          </a>

          <a class="ins-ic" style={{cursor:"pointer"}}>
            <i class="fab fa-instagram white-text text-white"> </i>
          </a>

        </div>


      </div>


    </div>
  </div>

 <div class="container text-center text-md-left mt-5">

    <div class="row mt-3">


      <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">


        <h6 class="text-uppercase font-weight-bold ">Company name</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto colors3" style={{width: "60px"}} />
        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p>

      </div>
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

        <h6 class="text-uppercase font-weight-bold ">Products</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto colors3" style={{width: "60px"}}/>
        <p>
          <a className="text-white " href="#!">MDBootstrap</a>
        </p>
        <p>
          <a href="#!" className="text-white ">MDWordPress</a>
        </p>
        <p>
          <a href="#!" className="text-white ">BrandFlow</a>
        </p>
        <p>
          <a href="#!" className="text-white ">Bootstrap Angular</a>
        </p>

      </div>
      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">


        <h6 class="text-uppercase font-weight-bold">Useful links</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto colors3" style={{width: "60px"}} />
        
        <p>
          <a href="#!" className="text-white ">Your Account</a>
        </p>
        <p>
          <a href="#!" className="text-white ">Become an Affiliate</a>
        </p>
        <p>
          <a href="#!" className="text-white ">Shipping Rates</a>
        </p>
        <p>
          <a href="#!" className="text-white ">Help</a>
        </p>

      </div>



      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">


        <h6 class="text-uppercase font-weight-bold">Contact</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto colors3" style={{width: "60px"}} />
        <p>
          <i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
        <p>
          <i class="fas fa-envelope mr-3"></i> info@example.com</p>
        <p>
          <i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
        <p>
          <i class="fas fa-print mr-3"></i> + 01 234 567 89</p>

      </div>


    </div>


  </div>



  <div class="footer-copyright text-center py-3 text-secondary colors">© 2020 Copyright:
    <a href="#" className="text-white"> MDBootstrap.com</a>
  </div>


</footer>

</>

    );
}
export default Footer;