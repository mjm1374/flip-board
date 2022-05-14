import FlipCard from './components/flipCard';
import useSeptaArrivals from './hooks/useSeptaArrivals';

import './App.css';

function App() {
	const [videos, search] = useSeptaArrivals('90005');

	return (
		<div className='App'>
			<FlipCard value='M'></FlipCard>
		</div>
	);
}

export default App;
