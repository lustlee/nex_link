import { Navigate, Route, Routes } from 'react-router-dom';
import Header from '../widgets/header/ui/Header.tsx';
import ListingPage from '../pages/list-catalog/ListingPage.tsx';
import ListingDetailsPage from '../pages/list-details/ListingDetailsPage.tsx';
import LoginPage from '../pages/login/LoginPage.tsx';
import { GlobalProgress } from '../hooks/globalProgress.ts';
import 'nprogress/nprogress.css';

function App() {
	
	return (
		<>
			<GlobalProgress/>
			<Header/>
			<main>
				<Routes>
					<Route path="/" element={ <Navigate to="/listings" replace/> }/>
					<Route path="/listings" element={ <ListingPage/> }/>
					
					<Route path="/listings/:id" element={ <ListingDetailsPage/> }/>
					
					<Route path="/login" element={ <LoginPage/> }/>
					
					<Route path="*" element={ <Navigate to="/" replace/> }/>
				</Routes>
			</main>
		</>
	);
}

export default App;