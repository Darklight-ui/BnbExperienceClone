/** @format */

import React from "react";
import heroBg from "../image/bg.png";

function HeroComponent() {
	return (
		<section className='hero'>
			<img src={heroBg} alt='hero' />
			<h1>Online Experience</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis ipsam
				similique nobis ullam corrupti exercitationem, culpa nesciunt dolor
				porro ab.
			</p>
		</section>
	);
}

export default HeroComponent;
