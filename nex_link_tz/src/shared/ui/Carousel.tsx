import { type FC, useState } from 'react';

interface CarouselProps {
	images: string[];
}

const Carousel: FC<CarouselProps> = ({images}) => {
	const [current, setCurrent] = useState(0);
	
	const next = () => setCurrent((prev) => (prev + 1) % images.length);
	const prev = () =>
		setCurrent((prev) => (prev - 1 + images.length) % images.length);
	
	if (!images || images.length === 0) return null;
	
	return (
		<div className="relative w-full h-72 md:h-96 overflow-hidden rounded-2xl">
			
			<div
				className="flex transition-transform duration-500 ease-in-out"
				style={ {transform: `translateX(-${ current * 100 }%)`} }
			>
				{ images.map((src, i) => (
					<img
						key={ i }
						src={ src }
						alt={ `photo-${ i }` }
						className="w-full h-72 md:h-96 object-cover flex-shrink-0"
					/>
				)) }
			</div>
			
			<button
				onClick={ prev }
				className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 p-2 rounded-full shadow"
			>
				‹
			</button>
			
			<button
				onClick={ next }
				className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 p-2 rounded-full shadow"
			>
				›
			</button>
			
			<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
				{ images.map((_, i) => (
					<div
						key={ i }
						className={ `w-2.5 h-2.5 rounded-full ${
							i === current ? 'bg-white' : 'bg-white/50'
						}` }
					></div>
				)) }
			</div>
		</div>
	);
};

export default Carousel;