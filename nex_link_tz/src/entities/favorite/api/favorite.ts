import { api } from '../../../shared/api/axiosBase.ts';
import type { ToggleFavoriteResponse } from '../model/model.ts';

export const getFavoritesApi = async (): Promise<string[]> => {
	const {data} = await api.get('/me/favorites');
	return data;
};

export const toggleFavoriteApi = async (listingId: string): Promise<ToggleFavoriteResponse> => {
	const {data} = await api.post(`/me/favorites/${ listingId }/toggle`);
	return data;
};
