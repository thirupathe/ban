import React from "react";
import img from "../../assets/kulfi.jpeg"
import img1 from "../../assets/vanilla.jpeg"
import img2 from "../../assets/pp-large.jpeg"
import img3 from "../../assets/pp-200g.jpeg"
import img4 from "../../assets/mango.jpeg"
import img5 from "../../assets/choclate.jpeg"
import img6 from "../../assets/afresh.jpeg"
import img7 from "../../assets/vitamin.jpeg"
import "../Product/Product.css"

const Product = () => {
  return (
     
<div className="container-fluid product">
        <h4 className="text-capitalize mt-5 mb-3">frequently bought together</h4>
        <div className="carousel slide " id="slider1">
            <div className="carousel-inner">
                <div className="carousel-item active ms-5 d-flex g-3">
                <div className="cell ms-5">
                <img src={img2} class="img-thumbnail " alt="pp-200g"/>
                    </div> 
                 <div className="cell ms-5 me-5">
                 <img src={img4} class=" img-thumbnail " alt="kulfi"/>
                 </div>
                 <div className="cell ms-5 me-3">
                 <img src={img1} class=" img-thumbnail " alt="kulfi"/>
                 </div>
                 <div className="cell ms-5 me-3">
                 <img src={img3} class="img-thumbnail " alt="pp-200g"/>
                 </div>
                </div>
                
            </div>
            <button type="button" class="carousel-control-prev" data-bs-target="#slider1" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-dark"></span>
            </button>
            <button type="button" class="carousel-control-next" data-bs-target="#slider1" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-dark"> </span></button>         
        </div>  
<h4 className="text-capitalize mt-5 mb-3">related products</h4>
        <div class="carousel slide " id="slider2">
            <div class="carousel-inner">
                <div class="carousel-item active2 d-flex ms-5">

                <div className="cell12 ms-5 me-2 ">
                <img src={img5} class="img-thumbnail " alt="pp-200g"/>
                    </div> 
                 <div className="cell2 ms-5 me-3">
                 <img src={img6} class=" img-thumbnail " alt="kulfi"/>
                 </div>
                 <div className="cell2 ms-5 me-5">
                 <img src={img7} class=" img-thumbnail " alt="kulfi"/>
                 </div>
                 <div className="cell2 ms-5 me-3">
                 <img src={img} class="img-thumbnail " alt="pp-200g"/>
                 </div>
                </div>
                 <div class="carousel-item"> 
                    
                    <div className="cell ms-5">
                <img src={img2} class="img-thumbnail " alt="pp-200g"/>
                    </div> 
                 <div className="cell ms-5">
                 <img src={img4} class=" img-thumbnail " alt="kulfi"/>
                 </div>
                 <div className="cell ms-5">
                 <img src={img1} class=" img-thumbnail " alt="kulfi"/>
                 </div>
                 <div className="cell ms-5">
                 <img src={img3} class="img-thumbnail " alt="pp-200g"/>
                 </div>
                </div>
                {/* <div class="carousel-item">
                    <img src={} alt="">
                </div> */}
            </div>
            <button type="button" class="carousel-control-prev" data-bs-target="#slider1" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-dark"></span>
            </button>
            <button type="button" class="carousel-control-next" data-bs-target="#slider1" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-dark"> </span></button>         
        </div>  
      
      
    </div>     


     
  );
};

export default Product;