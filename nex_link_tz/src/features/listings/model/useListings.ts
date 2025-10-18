import { useQuery } from '@tanstack/react-query';
import { fetchListings } from '../../../entities/listings/model/api.ts';
import type { IListing } from '../../../entities/listings/model/types.ts';
import type { FiltersState } from '../../filters/model/filtersStore.ts';

export const useListings = (filters?: Partial<FiltersState>) => {
	return useQuery<IListing[], Error>({
		queryKey: ['listings', filters],
		queryFn: () => fetchListings(filters ?? {}),
		placeholderData: (prev) => prev ?? []
	});
};