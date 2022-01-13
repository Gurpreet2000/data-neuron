import axios from 'axios';

export default axios.create({
	baseURL: 'http://localhost:5000',
	referrerPolicy: 'unsafe-url',
	headers: {
		mode: 'no-cors',
	},
});
