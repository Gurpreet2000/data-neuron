import axios from 'axios';

export default axios.create({
	baseURL: 'https://data-neuron-backend.herokuapp.com',
});
