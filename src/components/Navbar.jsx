/** @format */

import React from "react";
import logo from "../image/airbnb.png";

function Navbar() {
	return (
		<div className='navbar'>
			<img src={logo} alt='logo' className='nav-logo' />
		</div>
	);
}

export default Navbar;
