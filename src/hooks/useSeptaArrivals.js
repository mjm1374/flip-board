import { useState, useEffect } from 'react';
import septa from '../api/septa';

const useSeptaArrivals = (station) => {
	const [trains, setTrains] = useState([]);

	useEffect(() => {
		search(station);
	}, [station]);

	const search = async (station) => {
		const respose = await septa.get('', {
			params: {
				station: station,
				count: 10,
			},
		});
		console.log(respose.data);

		setTrains(respose.data);
	};

	return [trains, search];
};

export default useSeptaArrivals;
