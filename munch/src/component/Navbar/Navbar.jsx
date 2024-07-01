import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../assets/logo.jpg"



const Navcomp = () => {
  return (

<div className="navbar navbar-expand-sm bg-light navbar-light ">
    <div className="container-fluid">
    <img src={img} alt="brand" />
       <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#box"><span className="navbar-toggler-icon"></span></button>
    <div id="box" className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
            
            
            <li className="nav-item"><a href="#" className="nav-link"><NavLink className={"text-decoration-none"}>Home</NavLink></a></li>
            <li className="nav-item dropdown">
                <a href="#" className="nav-link"><NavLink className={"text-decoration-none"} to="/product">Product</NavLink></a>
            </li>
            <li class="nav-item"><a href="#" className="nav-link">Account</a></li>
            <li class="nav-item"><a href="#" className="nav-link"><NavLink className={"text-decoration-none"} to="/about">About</NavLink></a></li>
            <li class="nav-item"><a href="#" className="nav-link"><NavLink className={"text-decoration-none"} to="/contact" >Contact</NavLink></a></li>
            
        </ul>
        
        <form action="#" class="d-flex">
            <input type="search" className="form-control me-2" placeholder="search"/>
            <button className="btn btn-ourline-dark">search</button>
        </form>
       
    </div>
    
</div>
</div>

    
  );
};

export default Navcomp;

