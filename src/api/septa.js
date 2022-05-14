import axios from 'axios';

// relays to http://www3.septa.org/api/

export default axios.create({
	baseURL: 'https://logikbox.com/api/septa.php',
});
