const Header = () => {
	return (
		<header className="flex justify-between items-center px-6 py-4 border-b bg-white">
			<div className="flex items-center space-x-2">
				<div className="w-6 h-6 bg-blue-500 rounded"></div>
				<span className="font-semibold text-lg">StayFinder</span>
			</div>
			
			<div className="flex items-center space-x-3">
				<button>Log in</button>
				<button>Log out</button>
				<div className="w-8 h-8 rounded-full bg-gray-300"></div>
			</div>
		</header>
	);
};

export default Header;