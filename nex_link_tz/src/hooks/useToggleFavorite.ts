import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useFavoritesStore } from '../store/useFavoriteStore.ts';
import { getFavoritesApi, toggleFavoriteApi } from '../entities/favorite/api/favorite.ts';

export const useFavorites = () => {
	const queryClient = useQueryClient();
	const {setFavorites, toggleLocalFavorite} = useFavoritesStore();
	
	const favoritesQuery = useQuery<string[]>({
		queryKey: ['favorites'],
		queryFn: async () => {
			const data = await getFavoritesApi();
			setFavorites(data);
			return data;
		}
	});
	
	const toggleFavoriteMutation = useMutation({
		mutationFn: toggleFavoriteApi,
		onMutate: (listingId: string) => {
			toggleLocalFavorite(listingId);
		},
		onError: (_err, listingId) => {
			toggleLocalFavorite(listingId);
			toast.error('Не удалось обновить избранное 😢');
		},
		onSuccess: (_data, _listingId) => {
			queryClient.invalidateQueries({queryKey: ['favorites']});
			toast.success('Избранное обновлено ✅');
		}
	});
	
	return {
		favoritesQuery,
		toggleFavorite: toggleFavoriteMutation.mutate
	};
};
