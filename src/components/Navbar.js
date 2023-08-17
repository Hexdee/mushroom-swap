import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <header className='header'>
            <div className='logo_div'>
            <img height={50} alt='logo' src='images/eth-logo.png'/>
            </div>
            <div className='wallet'>
                <div className='menu_item active'>
                    0x09876776457..
                </div>
            </div>
        <div className='swap'>
                <div className='menu_item active'>
                    <img className='menu_image' src='images/eth-logo.png' alt=''/>
                    Swap
                </div>
                <div className='menu_item'>
                    <img className='menu_image' src='images/eth-logo.png' alt=''/>
                    Pool
                </div>
            </div>
        </header>
    </div>
  )
}
