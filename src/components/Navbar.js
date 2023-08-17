import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  
  return (
    <div className='navbar'>
        <header className='header'>
            <div className='logo_div'>
            <img height={50} alt='logo' src='images/eth-logo.png'/>
            </div>
            <div className='wallet'>
                <div className='menu_item active'>
                    0x
                </div>
            </div>
        <div className='swap'>
                <div className={`menu_item ${pathname === "/swap" | pathname === "/" ? "active" : ""}`} onClick={() => {navigate("/swap")}}>
                    <img className='menu_image' src='images/eth-logo.png' alt=''/>
                    Swap
                </div>
                <div className={`menu_item ${pathname === "/pool" ? "active" : ""}`} onClick={() => {navigate("/pool")}}>
                    <img className='menu_image' src='images/eth-logo.png' alt=''/>
                    Pool
                </div>
            </div>
        </header>
    </div>
  )
}
