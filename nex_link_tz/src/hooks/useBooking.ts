import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { BookingRequest, IBooking } from '../features/bookings/model/booking.ts';
import { useAuthStore } from '../store/useAuthStore';
import { createBooking } from '../features/bookings/api/bookings.ts';
import type { IListing } from '../entities/listings/model/types.ts';
import { toast } from 'react-toastify';

interface OnMutateContext {
	prevListings?: IListing[];
}

interface ErrorResponse {
	message: string;
}

export const useCreateBooking = () => {
	const queryClient = useQueryClient();
	
	return useMutation<IBooking, AxiosError<ErrorResponse>, BookingRequest, OnMutateContext>({
		mutationFn: (bookingData) => {
			const {token} = useAuthStore.getState();
			if (!token) throw new Error('Не авторизован');
			return createBooking({...bookingData, token});
		},
		
		onMutate: async (newBooking) => {
			await queryClient.cancelQueries({queryKey: ['listings']});
			
			const prevListings = queryClient.getQueryData<IListing[]>(['listings']);
			
			queryClient.setQueryData<IListing[]>(['listings'], (old) =>
				old?.map((listing) =>
					listing.id === newBooking.listingId
						? {...listing, bookingsCount: (listing.bookingsCount || 0) + 1}
						: listing
				) ?? []
			);
			
			return {prevListings};
		},
		
		onError: (err, _variables, context) => {
			if (context?.prevListings) {
				queryClient.setQueryData(['listings'], context.prevListings);
			}
			
			if (err.response?.status === 409) {
				toast.error('Выбранные даты уже забронированы 🕓');
			} else if (err.response?.status === 401) {
				toast.error('Сессия истекла, пожалуйста, войдите снова');
			} else {
				toast.error(err.response?.data?.message || 'Ошибка при бронировании 😢');
			}
		},
		
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['bookings']});
			queryClient.invalidateQueries({queryKey: ['listings']});
			toast.success('Бронирование успешно создано ✅');
		}
	});
};
