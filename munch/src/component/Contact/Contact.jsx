import React from "react";



const Contact = () => {
  return (
    <div className="contact container-fluid">
      
    <h4 className="fw-bold mb-3 text-decoration-uppercase">CONTACT Your Distributor</h4>
    <div className="row">
        <div className="col-6">
            <form>
              <div className="mb-2">
                <input type="text" class="form-control" placeholder="Name"/>
             </div>
                <div className="mb-2">
                    <input type="text" class="form-control" placeholder="Phone Number"/>
                </div>
                <div className="mb-2">
                    <input type="email" class="form-control" placeholder="Email"/>
                </div>
                <div className="mb-2">
                    <textarea class="form-control" >Message</textarea>
                </div>
                <div className="mb-3">
                    <button type="submit" class="btn btn-primary text-white px-5">SEND</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;