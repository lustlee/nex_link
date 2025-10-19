import { api } from '../../../shared/api/axiosBase.ts';
import type { FiltersData, IListing } from './types.ts';

export const fetchListings = async (filters: Partial<FiltersData>): Promise<IListing[]> => {
	try {
		const {data} = await api.get<IListing[]>('/listings', {params: filters});
		return data;
	} catch (e) {
		throw new Error('Failed to fetch data!');
	}
	
};

export const fetchListingById = async (id: string): Promise<IListing> => {
	try {
		const {data} = await api.get<IListing>(`/listings/${ id }`);
		return data;
	} catch (e) {
		throw new Error('Failed to fetch data!');
	}
	
};
