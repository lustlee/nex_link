import { CalendarDays } from 'lucide-react';
import type { FC } from 'react';

interface BookingButtonProps {
	checkIn: Date | null;
	checkOut: Date | null;
	onBook?: (data: { checkIn: Date; checkOut: Date }) => void;
}

export const BookingButton: FC<BookingButtonProps> = ({
	checkIn,
	checkOut,
	onBook
}) => {
	return (
		<button
			aria-label="Сделать бронь"
			onClick={ () => {
				if (checkIn && checkOut) {
					onBook?.({checkIn, checkOut});
				}
			} }
			disabled={ !checkIn || !checkOut }
			className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl py-2 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all focus-visible:ring-2 focus-visible:ring-blue-400"
		>
			<CalendarDays className="w-4 h-4"/>
			Забронировать
		</button>
	);
};
