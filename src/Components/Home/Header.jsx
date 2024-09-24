import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneAlt , FaShoppingCart  } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";


import "../../App.css";

const Header = () => {
  return (
    <>
      <section className="top-header">
        <div className="d-md-flex space justify-content-between align-center p-1 container-md">
          <div>
            <p className="m-0">Amazon Products in Pakistan</p>
          </div>
          <div>
            <p className="m-0">
              Help Line : <FaPhoneAlt /> 03234114799 <IoLogoWhatsapp />
              (09:00 AM To 05:00 PM)
            </p>{" "}
          </div>
        </div>
      </section>
      <section className="container-md">
        <div className="d-flex justify-content-between flex-wrap ">
          <div className="d-md-flex   "> 
            <div className="">
              <img className="header-logo d-sm-block " src="\src\images\logo.png" alt="logo"/>
            </div>
            <div className="bottom-header ">
              <form className="d-flex" role="search">
                <input
                  className="s-input form-control  "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{borderRadius:"0" , height:"44px" , width:"100%"}}
                />
                <button className="btn bg-dark text-white" type="submit"  style={{borderRadius:"0"}}>
                  <IoSearch className="text-white fs-5"/>
                </button>
              </form>
            </div>
          </div>
          
          <div className=" align-center " style={{alignContent:"center"}}>
            <div className="d-flex">
            <div className="p-2 border">
                <FaShoppingCart/> 
            </div>
            <h1 className="fs-6 ps-2">MY CART</h1>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
