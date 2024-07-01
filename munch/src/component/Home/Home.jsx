import React from "react";
import "./Home.css";
import img from "../../assets/shake.jpg";




const Home = () => {
  return (
    <div className="header container-fluid">
      
       <div className="row mt-5">
            <div className="col-12 col-md-6 option">
                <div className="header-image">
                    <img src={img} alt="" className="img-fluid mt-5"/>
                </div>    
            </div>
            <div class="col-12 col-md-6">
                <h2 className="py-3 text-warning-emphasis display-2">Formula-1 Shake</h2>
                <div className="mt-3 text-capitalize">
                    <p className="lead lead-start">
                      <h3 className="text-decoration-uppercase display-5 fst-normal">product overview</h3>
                    Formula 1 Nutritional Shake Mix is a delicious meal for healthy nutrition and weight management. It provides an ideal balance of protein and nutrition to help satisfy your hunger and provides you with energy.

                    Consumption of <abbr title="High Protein Meal Replacement" className="initialism">HPMR</abbr>  along with a calorie-restricted diet and moderate physical activity daily, showed reduction in body weight and body fat percentage along with improvement/healthy maintenance of blood lipid profile.

                    Enjoy Formula 1 Nutritional Shake Mix once or twice a day along with portion-controlled nutrition and exercise to help keep the body fit.
                    </p>
                </div>
                <button class="btn">
              <span class="layer"></span>
              Buy Now
               </button>
       </div>
      </div>
    </div>  
      
    
  );
};

export default Home;