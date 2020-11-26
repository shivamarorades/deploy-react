import React from 'react';

let Carousel=()=>{
    return (
<>
<div className="jumbotron  text-light   cover  ">
   
   <div className="container ">
      <h1 className="display-3">Hello,<br/> My name is<br/>DR R.K Garg</h1>
      <p>This is a template for a simple marketing or informational website.<br/> It includes a large callout called a jumbotron and three supporting<br/> pieces of content. Use it as a starting point to <br/>create something more unique.</p>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Book appointment now</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header text-dark">
        <h5 class="modal-title " id="exampleModalLabel">Your Details Below :</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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