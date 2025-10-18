import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryProvider } from './app/providers/queryClient.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryProvider>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</QueryProvider>
	</StrictMode>
);
