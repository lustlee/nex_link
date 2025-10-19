import { useQuery } from '@tanstack/react-query';
import { fetchListingById, fetchListings } from '../../../entities/listings/model/api.ts';
import type { IListing } from '../../../entities/listings/model/types.ts';
import type { FiltersState } from '../../filters/model/filtersStore.ts';

export const useListings = (filters?: Partial<FiltersState>) => {
	return useQuery<IListing[], Error>({
		queryKey: ['listings', filters],
		queryFn: () => fetchListings(filters ?? {}),
		placeholderData: (prev) => prev ?? [],
		retry: 2,
		retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000)
	});
};

export const useListingDetails = (id?: string) => {
	return useQuery<IListing, Error>({
		queryKey: ['listing', id],
		enabled: !!id,
		queryFn: () => fetchListingById(id!),
		retry: 2,
		retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000)
	});
};
