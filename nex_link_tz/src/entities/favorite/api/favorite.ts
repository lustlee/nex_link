import { api } from '../../../shared/api/axiosBase.ts';
import type { ToggleFavoriteResponse } from '../model/model.ts';

export const getFavoritesApi = async (): Promise<string[]> => {
	try {
		const {data} = await api.get('/me/favorites');
		return data;
	} catch (e) {
		throw new Error('Failed to fetch data!');
	}
	
};

export const toggleFavoriteApi = async (listingId: string): Promise<ToggleFavoriteResponse> => {
	try {
		const {data} = await api.post(`/me/favorites/${ listingId }/toggle`);
		return data;
	} catch (e) {
		throw new Error('Failed to fetch data!');
	}
	
};
