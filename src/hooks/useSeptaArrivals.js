import { useState, useEffect } from 'react';
import septa from '../api/septa';

const useSeptaArrivals = (station) => {
	const [trains, setTrains] = useState([]);

	useEffect(() => {
		search(station);
	}, [station]);

	const search = async (station) => {
		const respose = await septa.get(`/Arrivals/${station}/10`);
		console.log(respose);

		setTrains(respose.data.items);
	};

	return [trains, search];
};

export default useSeptaArrivals;
