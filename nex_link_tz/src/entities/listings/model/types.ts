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