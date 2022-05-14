import React from 'react';

import './flipCard.css';

const FlipCard = ({ value }) => {
	const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const nums = '0123456789';
	const chars = '!@#$%^&*()_+-';
	const symbols = [...(nums + latin + chars)];
	//console.log(symbols);
	const index = symbols.indexOf(value);

	return (
		<div className='segment'>
			<div className='flipcard'>
				<div className='top'>{index}</div>
				<div className='bottom'>{index}</div>
			</div>
		</div>
	);
};

export default FlipCard;
