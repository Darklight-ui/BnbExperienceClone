/** @format */

import React from "react";
import star from "../image/star.png";

function CardComponent(data) {
	let badgeText;
	if (data.data.soldout === 0) {
		badgeText = "SOLD OUT";
	} else if (
		data.data.location === "Online" ||
		data.data.location === "Hybrid" ||
		data.data.location === "Physical"
	) {
		badgeText = data.data.location;
	}
	return (
		<div className='card'>
			<div className='soldout'>{badgeText}</div>
			<img src={data.data.coverImg} alt='' className='card--img' />
			<div className='card--stat'>
				<img src={star} alt='' className='star' />
				<span>{data.data.stats.rating}</span>
				<span>({data.data.stats.reviewCount}) *</span>
				<span className='gray'>{data.data.location}</span>
			</div>
			<p className='card--title'> {data.data.title}</p>
			<p>
				<strong>from ${data.data.price} </strong>/ Person
			</p>
		</div>
	);
}

export default CardComponent;
