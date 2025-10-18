import { Route, Routes } from 'react-router-dom';
import Header from '../widgets/header/ui/Header.tsx';
import ListingPage from '../pages/list-catalog/ListingPage.tsx';
import ListingDetailsPage from '../pages/list-details/ListingDetailsPage.tsx';

function App() {
	
	return (
		<>
			<Header/>
			<main>
				<Routes>
					<Route path="/" element={ <ListingPage/> }/>
					<Route path="/listings/:id" element={ <ListingDetailsPage/> }/>
				</Routes>
			</main>
		</>
	);
}

export default App;