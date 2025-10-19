import { RotateCw } from 'lucide-react';
import type { FC } from 'react';

interface RetryButtonProps {
	onClick: () => void;
	isLoading?: boolean;
}

export const RetryButton: FC<RetryButtonProps> = ({onClick, isLoading}) => {
	return (
		<button
			aria-label="Попробовать заново"
			onClick={ onClick }
			disabled={ isLoading }
			className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium transition disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-blue-400"
		>
			<RotateCw className={ `w-4 h-4 ${ isLoading ? 'animate-spin' : '' }` }/>
			{ isLoading ? 'Повтор...' : 'Повторить' }
		</button>
	);
};
