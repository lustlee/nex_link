import { useListings } from '../../features/listings/model/useListings.ts';
import ListingCard from '../../entities/listings/ui/ListingCard.tsx';
import { useFiltersStore } from '../../features/filters/model/filtersStore.ts';
import { Filters } from '../../widgets/filters/Filters.tsx';
import { type FC } from 'react';
import { RetryButton } from '../../widgets/button-retry/RetryButton.tsx';


const ListingPage: FC = () => {
	const filtersStore = useFiltersStore();
	const {
		data: listings,
		isLoading,
		isError,
		error,
		refetch,
		isFetching
	} = useListings(filtersStore);
	
	if (isLoading) return <p>Loading...</p>;
	
	if (isError) return (
		<div className="flex flex-col items-center justify-center mt-10 space-y-4">
			<p className="text-red-500 font-medium">
				Произошла ошибка: { (error as Error).message }
			</p>
			<RetryButton onClick={ () => refetch() } isLoading={ isFetching }/>
		</div>
	);
	
	return (
		<main className="px-6 md:px-10 py-10">
			<h1 className="text-3xl font-semibold mb-6">
				Discover your perfect stay
			</h1>
			
			<Filters/>
			
			<div className="flex justify-center items-center gap-3 mt-4">
				<button
					disabled={ filtersStore.page <= 1 }
					onClick={ () => filtersStore.setFilters({page: filtersStore.page - 1}) }
					className="px-3 py-1 border rounded disabled:opacity-50"
				>
					Назад
				</button>
				
				<span>Страница { filtersStore.page }</span>
				
				<button
					disabled={ filtersStore.page >= 3 }
					onClick={ () => filtersStore.setFilters({page: filtersStore.page + 1}) }
					className="px-3 py-1 border rounded disabled:opacity-50"
				>
					Вперёд
				</button>
			</div>
			
			
			<div className="mt-8">
				{ listings && listings.length > 0 ? (
					<ListingCard listings={ listings }/>
				) : (
					<p>Sorry, no listings found</p>
				) }
			</div>
		
		</main>
	);
};

export default ListingPage;