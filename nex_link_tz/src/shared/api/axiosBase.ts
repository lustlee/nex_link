import axios from 'axios';
import { useAuthStore } from '../../store/useAuthStore.ts';

export const api = axios.create({
	baseURL: 'http://localhost:4000',
	headers: {
		'Content-Type': 'application/json'
	}
});

api.interceptors.request.use((config: any) => {
	const token = useAuthStore.getState().token;
	if (token) {
		if (!config.headers) {
			config.headers = {};
		}
		(config.headers as Record<string, string>)['Authorization'] = `Bearer ${ token }`;
	}
	return config;
});