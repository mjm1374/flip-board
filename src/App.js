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
					<FlipCard value='M' oldValue='A' key='0'></FlipCard>
					{/* <FlipCard value='I' oldValue='A' key='1'></FlipCard>
					<FlipCard value='K' oldValue='T' key='2'></FlipCard> */}
					{/* <FlipCard value='E' oldValue='f' key='3'></FlipCard>
					<FlipCard value='M' oldValue='a' key='4'></FlipCard>
					<FlipCard value='I' oldValue='A' key='5'></FlipCard>
					<FlipCard value='K' oldValue='T' key='6'></FlipCard>
					<FlipCard value='E' oldValue='f' key='7'></FlipCard>
					<FlipCard value='M' oldValue='a' key='8'></FlipCard>
					<FlipCard value='I' oldValue='A' key='9'></FlipCard>
					<FlipCard value='K' oldValue='T' key='10'></FlipCard>
					<FlipCard value='E' oldValue='f' key='11'></FlipCard> */}
				</div>
			)}
		</div>
	);
}

export default App;
