import React, { useState } from 'react';
import FlipCard from './components/flipCard';
import useSeptaArrivals from './hooks/useSeptaArrivals';

import './App.css';

function App() {
	const [videos, search] = useSeptaArrivals('90005');
	const [startFlip, setStartFlip] = useState(false);

	return (
		<div className='App'>
			{!startFlip ? (
				<button
					onClick={() => {
						setStartFlip(true);
					}}>
					Flip
				</button>
			) : (
				<div className='flip-row'>
					<FlipCard value='M' oldValue='K'></FlipCard>
					<FlipCard value='I' oldValue='A'></FlipCard>
					<FlipCard value='K' oldValue='T'></FlipCard>
					<FlipCard value='E' oldValue='E'></FlipCard>
				</div>
			)}
		</div>
	);
}

export default App;
