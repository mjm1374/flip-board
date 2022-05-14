import React from 'react';

import './flipCard.css';

const FlipCard = ({ value }) => {
	return (
		<div className='segment'>
			<div className='flipcard'>
				<div className='top'>{value}</div>
				<div className='bottom'>{value}</div>
			</div>
		</div>
	);
};

export default FlipCard;
