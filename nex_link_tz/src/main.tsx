import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryProvider } from './app/providers/queryClient.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App.tsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryProvider>
			<BrowserRouter>
				<App/>
				<ToastContainer
					position="top-right"
					autoClose={ 3000 }
					hideProgressBar={ false }
					newestOnTop={ false }
					closeOnClick
					pauseOnHover
					theme="colored"
				/>
			</BrowserRouter>
		</QueryProvider>
	</StrictMode>
);
