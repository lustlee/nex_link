import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../store/useAuthStore.ts';

const Header = () => {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
	const logout = useAuthStore((state) => state.logout);
	const navigate = useNavigate();
	
	const handleLoginClick = () => navigate('/login');
	const handleLogoutClick = () => {
		logout();
		navigate('/');
	};
	
	return (
		<header className="flex justify-between items-center px-6 py-4 border-b bg-white">
			<div className="flex items-center space-x-2">
				<Link to="/">
					<div className="w-6 h-6 bg-blue-500 rounded"></div>
				</Link>
				<span className="font-semibold text-lg">StayFinder</span>
			</div>
			
			<div className="flex items-center space-x-3">
				{ !isAuthenticated ? (
					<button
						onClick={ handleLoginClick }
						className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded transition"
					>
						Log in
					</button>
				) : (
					<button
						onClick={ handleLogoutClick }
						className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition"
					>
						Log out
					</button>
				) }
				
				<div className="w-8 h-8 rounded-full bg-gray-300"></div>
			</div>
		</header>
	);
};

export default Header;
