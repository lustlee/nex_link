import { api } from '../../../shared/api/axiosBase.ts';
import type { BookingRequest, IBooking } from '../model/booking.ts';

export const createBooking = async (data: BookingRequest & {
	token: string
}): Promise<IBooking> => {
	const {token, ...body} = data;
	const response = await api.post<IBooking>('/bookings', body, {
		headers: {
			Authorization: `Bearer ${ token }`
		}
	});
	
	return response.data;
};