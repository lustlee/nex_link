import { api } from '../../../shared/api/axiosBase.ts';
import type { FiltersData, IListing } from './types.ts';

export const fetchListings = async (filters: Partial<FiltersData>): Promise<IListing[]> => {
	const {data} = await api.get<IListing[]>('/listings', {params: filters});
	return data;
};

export const fetchListingById = async (id: string): Promise<IListing> => {
	const {data} = await api.get<IListing>(`/listings/${ id }`);
	console.log(data);
	return data;
};
