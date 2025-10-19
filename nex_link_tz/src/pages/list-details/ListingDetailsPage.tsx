import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { type FC, useState } from 'react';
import { useListingDetails } from '../../features/listings/model/useListings.ts';
import { BookingButton } from '../../shared/ui/BookingButton.tsx';
import Carousel from '../../shared/ui/Carousel.tsx';
import BookingDatePicker from '../../shared/ui/DatePicker.tsx';
import { useAuthStore } from '../../store/useAuthStore.ts';
import { useCreateBooking } from '../../hooks/useBooking.ts';
import { Heart, HeartCrack } from 'lucide-react';
import { useFavorites } from '../../hooks/useToggleFavorite.ts';

const ListingDetailsPage: FC = () => {
	const {id} = useParams<{ id: string }>();
	const {data: listing, isLoading, isError} = useListingDetails(id);
	const {isAuthenticated, token} = useAuthStore();
	const navigate = useNavigate();
	const location = useLocation();
	const bookingMutation = useCreateBooking();
	const {favoritesQuery, toggleFavorite} = useFavorites();
	const favorites = favoritesQuery.data || [];
	const isFavorite = listing?.id ? favorites.includes(listing.id) : false;
	
	
	const [checkIn, setCheckIn] = useState<Date | null>(null);
	const [checkOut, setCheckOut] = useState<Date | null>(null);
	
	if (isLoading) return <p>Loading...</p>;
	if (isError) return <p>Something went wrong</p>;
	if (!listing) return <p>Listing not found</p>;
	
	const handleBooking = () => {
		if (!checkIn || !checkOut) return;
		
		if (!isAuthenticated || !token) {
			navigate('/login', {state: {from: location.pathname}});
			return;
		}
		
		bookingMutation.mutate({
			listingId: listing.id,
			checkIn: checkIn.toISOString(),
			checkOut: checkOut.toISOString(),
			guests: 2
		});
	};
	return (
		<main className="px-6 md:px-10 py-10 max-w-6xl mx-auto">
			<div className="flex items-center justify-between mb-4">
				<h1 className="text-3xl font-semibold">{ listing.title }</h1>
				<button onClick={ () => listing?.id && toggleFavorite(listing.id) }>
					{ isFavorite ? (
						<HeartCrack className="text-red-500 w-6 h-6"/>
					) : (
						<Heart className="w-6 h-6"/>
					) }
				</button>
			</div>
			
			<Carousel images={ listing.photos }/>
			
			<section className="mt-8 grid md:grid-cols-3 gap-8">
				<div className="md:col-span-2 space-y-6">
					<div>
						<h2 className="text-xl font-semibold mb-2">Описание</h2>
						<p className="text-gray-700">{ listing.description }</p>
					</div>
					
					<div>
						<h2 className="text-xl font-semibold mb-2">Удобства</h2>
						<ul className="grid grid-cols-2 gap-2">
							{ listing.amenities.map((amenity: string) => (
								<li key={ amenity } className="flex items-center gap-2">
									<span>✅</span> { amenity }
								</li>
							)) }
						</ul>
					</div>
					
					<div>
						<h2 className="text-xl font-semibold mb-2">Политика отмены</h2>
						<p className="text-gray-700">{ listing.bookingsCount }</p>
					</div>
				</div>
				
				<div className="p-6 border rounded-2xl shadow-md h-fit sticky top-20">
					<h2 className="text-lg font-semibold mb-4">Проверить доступность</h2>
					
					<div className="space-y-3">
						<BookingDatePicker
							label="Дата заезда"
							selected={ checkIn }
							onChange={ setCheckIn }
						/>
						
						<div className="space-y-3">
							<BookingDatePicker
								label="Дата выезда"
								selected={ checkOut }
								onChange={ setCheckOut }
							/>
						</div>
					</div>
					
					<BookingButton
						checkIn={ checkIn }
						checkOut={ checkOut }
						onBook={ handleBooking }
					/>
				</div>
			</section>
		</main>
	);
};
export default ListingDetailsPage;