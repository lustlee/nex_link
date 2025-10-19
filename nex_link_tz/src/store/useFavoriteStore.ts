import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
	favorites: string[];
	setFavorites: (ids: string[]) => void;
	toggleLocalFavorite: (id: string) => void;
}

export const useFavoritesStore = create<FavoritesState>()(
	persist(
		(set) => ({
			favorites: [],
			setFavorites: (ids) => set({favorites: ids}),
			toggleLocalFavorite: (id) =>
				set((state) => ({
					favorites: state.favorites.includes(id)
						? state.favorites.filter((fid) => fid !== id)
						: [...state.favorites, id]
				}))
		}),
		{name: 'favorites-storage'}
	)
);
