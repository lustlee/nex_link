export interface IListing {
	id: string;
	title: string;
	city: string;
	pricePerNight: number;
	rating: number;
	thumbnailUrl: string;
	photos: string[];
	amenities: string[];
	bookingsCount: number;
	description: string;
}

export interface FiltersData {
	city: string | null;
	minPrice: number | null;
	maxPrice: number | null;
	minRating: number | null;
	sort: SortType;
	page: number;
	limit: number;
}

type SortType = 'price_asc' | 'price_desc' | 'rating_asc' | 'rating_desc' | null;