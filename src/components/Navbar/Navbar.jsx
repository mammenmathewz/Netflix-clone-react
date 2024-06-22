import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_icon from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { useEffect,useRef } from "react";
import { logOut } from "../../fireBase";

const Navbar = () => {

  const useref=useRef()

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>=80){
        useref.current.classList.add('nav-dark')
      }else{
        useref.current.classList.remove('nav-dark')
      }
    })
  },[])
  return (
    <div ref={useref} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" srcset="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by langauges</li>
        </ul>
      </div>
      <div className="navbar-right">
      <img src={search_icon} alt="" srcset="" />
      <p>Children</p>
      <img src={bell_icon} alt="" srcset="" />
      <div className="navbar-profile">
        <img src={profile_icon} className="profile"></img>
        <img src={caret_icon} className=""></img>
        <div className="dropdown">
          <p onClick={()=>{logOut()}}>Sign out of netflix</p>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Navbar;
