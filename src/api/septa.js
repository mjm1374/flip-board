import axios from 'axios';

// http://www3.septa.org/api/

export default axios.create({
	baseURL: 'http://www3.septa.org/hackathon',
});
