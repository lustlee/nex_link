import React from 'react';
import { useFiltersStore } from '../../features/filters/model/filtersStore.ts';
import type { FiltersData } from '../../entities/listings/model/types.ts';

export const Filters: React.FC = () => {
	const {
		city,
		minPrice,
		maxPrice,
		minRating,
		setFilters,
		resetFilters,
		sort
	} = useFiltersStore();
	
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const {name, value} = e.target;
		setFilters({
			[name]: value === '' ? null : isNaN(+value) ? value : +value,
			page: 1
		});
	};
	
	return (
		<div className="flex flex-wrap items-end gap-4 bg-white p-4 rounded-2xl shadow-md">
			<div className="flex flex-col">
				<label className="text-sm font-medium text-gray-600">City</label>
				<select
					name="city"
					value={ city ?? '' }
					onChange={ handleChange }
					className="border p-2 rounded-lg"
				>
					<option value="">All</option>
					<option value="Bishkek">Bishkek</option>
					<option value="Osh">Osh</option>
					<option value="Issyk-Kul">Issyk-Kul</option>
					<option value="Tokmok">Tokmok</option>
					<option value="Toktogul">Toktogul</option>
				</select>
			</div>
			
			<div className="flex flex-col">
				<label className="text-sm font-medium text-gray-600">Price From</label>
				<input
					type="number"
					name="minPrice"
					value={ minPrice ?? '' }
					onChange={ handleChange }
					className="border p-2 rounded-lg w-28"
					min={ 0 }
				/>
			</div>
			
			<div className="flex flex-col">
				<label className="text-sm font-medium text-gray-600">To</label>
				<input
					type="number"
					name="maxPrice"
					value={ maxPrice ?? '' }
					onChange={ handleChange }
					className="border p-2 rounded-lg w-28"
					min={ 0 }
				/>
			</div>
			
			<div className="flex flex-col">
				<label className="text-sm font-medium text-gray-600">Min Rating</label>
				<input
					type="number"
					name="minRating"
					value={ minRating ?? '' }
					onChange={ handleChange }
					className="border p-2 rounded-lg w-24"
					min={ 0 }
					max={ 5 }
					step={ 0.1 }
				/>
			</div>
			
			<select
				value={ sort || '' }
				onChange={ (e) => setFilters({sort: e.target.value as FiltersData['sort']}) }
				className="border rounded-md p-2"
			>
				<option value="">Без сортировки</option>
				<option value="price_asc">Цена ↑</option>
				<option value="price_desc">Цена ↓</option>
				<option value="rating_asc">Рейтинг ↑</option>
				<option value="rating_desc">Рейтинг ↓</option>
			</select>
			
			<button
				onClick={ resetFilters }
				className="ml-auto bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition"
			>
				Сбросить
			</button>
		</div>
	);
};
