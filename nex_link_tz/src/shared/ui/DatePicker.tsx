import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import type { FC } from 'react';

interface BookingDatePickerProps {
	label: string;
	selected: Date | null;
	onChange: (date: Date | null) => void;
}

const BookingDatePicker: FC<BookingDatePickerProps> = ({
	label,
	selected,
	onChange
}) => {
	return (
		<div className="flex flex-col">
			<label className="mb-1 font-semibold">{ label }</label>
			<DatePicker
				selected={ selected }
				onChange={ onChange }
				className="border rounded-md p-2"
			/>
		</div>
	);
};

export default BookingDatePicker;
