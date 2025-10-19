export interface IBooking {
	id: string;
	listingId: string;
	checkIn: string;
	checkOut: string;
	guests: number;
	createdAt: string;
}

export interface BookingRequest {
	listingId: string;
	checkIn: string;
	checkOut: string;
	guests: number;
}