import type { FiltersData } from '../../../entities/listings/model/types.ts';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface FiltersState extends FiltersData {
	setFilters: (filters: Partial<FiltersData>) => void;
	setPage: (page: number) => void;
	resetFilters: () => void;
}

export const useFiltersStore = create<FiltersState>()(
	persist(
		(set) => ({
			city: null,
			minPrice: null,
			maxPrice: null,
			minRating: null,
			sort: null,
			page: 1,
			limit: 20,
			
			setFilters: (filters) => set((state) => ({...state, ...filters})),
			setPage: (page) => set({page}),
			resetFilters: () =>
				set({
					city: null,
					minPrice: null,
					maxPrice: null,
					minRating: null,
					sort: null,
					page: 1,
					limit: 20
				})
		}),
		{
			name: 'filters-storage',
			partialize: (state) => ({
				city: state.city,
				minPrice: state.minPrice,
				maxPrice: state.maxPrice,
				minRating: state.minRating,
				sort: state.sort
			})
		}
	)
);