import { api } from '../../../shared/api/axiosBase.ts';
import type { IListing } from './types.ts';

interface FetchListingsParams {
	city?: string;
	minPrice?: number;
	maxPrice?: number;
	minRating?: number;
	sort?: 'price_asc' | 'price_desc' | 'rating_asc' | 'rating_desc';
	page?: number;
	limit?: number;
}

export const fetchListings = async (params?: FetchListingsParams): Promise<IListing[]> => {
	const {data} = await api.get<IListing[]>('/listings', {params});
	return data;
};

export const fetchListingById = async (id: string): Promise<IListing> => {
	const {data} = await api.get<IListing>(`/listings/${ id }`);
	return data;
};