import { useQuery } from '@tanstack/react-query';
import { fetchListings } from '../../../entities/listings/model/api.ts';


export const useListings = (filters: any) => {
	return useQuery({
		queryKey: ['listings', filters],
		queryFn: () => fetchListings(filters)
	});
};