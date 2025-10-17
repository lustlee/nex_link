import { useState } from 'react';
import { useListings } from '../../features/listings/model/useListings.ts';
import ListingCard from '../../entities/listings/ui/ListingCard.tsx';

const ListCatalog = () => {
	const {data: listings, isLoading, isError} = useListings({
		city: 'Bishkek',
		minPrice: 10,
		maxPrice: 100,
		minRating: 4,
		sort: 'price_asc',
		page: 1,
		limit: 20
	});
	const [sortBy, setSortBy] = useState<'pricePerNight' | 'rating'>('pricePerNight');
	
	if (isLoading) return <p>Loading...</p>;
	if (isError) return <p>Error loading listings</p>;
	if (!listings?.length) return <p>No listings found</p>;
	
	
	return (
		<main className="px-6 md:px-10 py-10">
			<h1 className="text-3xl font-semibold mb-6">
				Discover your perfect stay
			</h1>
			
			<div className="flex flex-wrap gap-3 mb-8">
				{ ['City', 'Price range', 'Minimum rating'].map((filter) => (
					<button
						key={ filter }
						className="px-4 py-2 border rounded-full text-sm bg-white hover:bg-gray-100"
					>
						{ filter }
					</button>
				)) }
				
				<div className="flex items-center ml-auto space-x-2">
					<span className="text-sm text-gray-600">Sort by:</span>
					<div className="flex bg-gray-100 rounded-full p-1">
						<button
							onClick={ () => setSortBy('pricePerNight') }
							className={ `px-3 py-1 rounded-full text-sm ${
								sortBy === 'pricePerNight' ? 'bg-blue-500 text-white' : 'text-gray-600'
							}` }
						>
							Price
						</button>
						<button
							onClick={ () => setSortBy('rating') }
							className={ `px-3 py-1 rounded-full text-sm ${
								sortBy === 'rating'
									? 'bg-blue-500 text-white'
									: 'text-gray-600'
							}` }
						>
							Rating
						</button>
					</div>
				</div>
			</div>
			
			
			{
				listings && listings.length > 0 ? (
					<ListingCard listings={ listings }/>
				) : (
					<p>Sorry not have any information</p>
				)
			}
		
		
		</main>
	);
};

export default ListCatalog;