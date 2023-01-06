import { useState, useEffect } from 'react';
import septa from '../api/septa';

const useSeptaArrivals = (station) => {
	const [trains, setTrains] = useState([]);

	useEffect(() => {
		search(station);
	}, [station]);

	const search = async (station) => {
		const response = await septa.get('', {
			params: {
				station: station,
				count: 10,
			},
		});

		console.log(
			structuredClone(response.data[Object.keys(response.data)[0]][0])
		);

		setTrains(response.data);
	};

	return [trains, search];
};

export default useSeptaArrivals;
