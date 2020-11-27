import React from 'react';

let Carousel=()=>{
    return (
<>
<div className="jumbotron  text-light   cover  " style={{borderRadius:"0 0 50px 50px",border:"1px solid transparent"}}>
   
   <div className="container " >
      <h1 className="display-3 " >Hello,<br/> My name is<br/>DR R.K Garg</h1>
      <p>Dr. R K Garg (Sai Skin Centre) in Delhi. Dermatologists with Address,<br/> Contact Number, Photos, Maps. View Dr. R K Garg (Sai Skin Centre),<br/> pieces of content. Use it as a starting point to <br/>to give your health a time  Delhi on Justdial.</p>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Book appointment now</button>

<div class="modal fade "  id="exampleModal" tabindex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" >
    <div class="modal-content ">
      <div class="modal-header" >
        <h5 class="modal-title text-dark" id="exampleModalLabel">select what you are looking for</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-dark">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Enter Your Full Name :</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
         
          <div class="form-group">
            <label for="message-text" class="col-form-label">Enter your Email :</label>
            <input type="email" class="form-control" id="recipient-name"/>
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Mobile Number :</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          
          <div class="form-group">
            <label for="message-text" class="col-form-label">Address :</label>
           <textarea  id="recipient-name" class="form-control" cols="3" rows="2"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Discard</button>
        <button type="button" class="btn btn-primary">Submit</button>
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