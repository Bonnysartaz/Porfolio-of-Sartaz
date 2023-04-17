import React from 'react';
import { NavLink } from "react-router-dom"
import { AiOutlineHome } from 'react-icons/ai';
import './topbar.css';

const Topbar = () => {

  return (
    <nav>
      <NavLink to="/"> <AiOutlineHome /> </NavLink>
      
    </nav>
  )
}

export default Topbar;