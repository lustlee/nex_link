import { Star } from 'lucide-react';
import type { FC } from 'react';
import type { IListing } from '../model/types.ts';
import { Link } from 'react-router-dom';

interface Props {
	listings: IListing[];
}

const Card: FC<Props> = ({listings}) => {
	
	return (
		<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{ listings.map((listing: IListing) => (
				<Link
					key={ listing.id }
					to={ `/listings/${ listing.id }` }
					className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
				>
					<img
						src={ listing.thumbnailUrl }
						alt={ listing.title }
						className="w-full h-56 object-cover"
					/>
					<div className="p-4">
						<h3 className="font-medium text-lg">{ listing.title }</h3>
						<p className="text-sm text-gray-500">{ listing.city }</p>
						<div className="flex items-center justify-between mt-3">
                  <span className="font-semibold text-gray-800">
	                   Night / { listing.pricePerNight }$
                  </span>
							<span className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-blue-500 mr-1"/>
								{ listing.rating }
                  </span>
						</div>
					</div>
				</Link>
			)) }
		</div>
	);
};

export default Card;