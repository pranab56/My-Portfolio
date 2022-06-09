import React from "react";
import CustomLink from "../page/CustomLink";
import './Navber.css';
import facebook from '../svg/facebook.svg';
import github from '../svg/github.svg';
import linkedin from '../svg/linkedin.svg';
import { HashLink } from 'react-router-hash-link';

 
const Navber = () => {
  
  return (
    <div class="navbar #131f33">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost bg-base-300 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <CustomLink to={"/home"}>Home</CustomLink>
            <CustomLink to={"/about"}>About</CustomLink>
            <CustomLink to={"/portfolio"}>Portfolio</CustomLink>
            <CustomLink to={"/contact"}>Contact</CustomLink>
          </ul>
        </div>
        <h1 class=" normal-case text-3xl text-white font-bold ml-10">Pranab.</h1>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <HashLink  className="mr-10 font-serif text-lg" to={"#home"} >
            <span className="text-white">Home</span>
          </HashLink>
          <HashLink className="mr-10 font-serif text-lg" to={"/home#about"}>
          <span className="text-white">About</span>
          </HashLink>
          <HashLink className="mr-10 font-serif text-lg" to={"#portfolio"}>
          <span className="text-white">Portfolio</span>
          </HashLink>
          <HashLink className="mr-10 font-serif text-lg" to={"#contact"}>
          <span className="text-white pb-3">Contact</span>
          </HashLink>
        </ul>
      </div>
      <div class="navbar-end ml-10">
     <a href="https://web.facebook.com/pronab.kumar.94695/"><img  className="w-8 h-8 mr-5 bg-white rounded-full" src={facebook} alt="" /></a>
     <a href="https://github.com/pranab56"><img className="w-8 h-8 mr-5 bg-white rounded-full" src={github} alt="" /></a>
     <a href="https://www.linkedin.com/in/pranab-kumar/"><img className="w-8 h-8 mr-5 bg-white rounded-full" src={linkedin} alt="" /></a>

    </div>
    </div>
  );
};

export default Navber;
