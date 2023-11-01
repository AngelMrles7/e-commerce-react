import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/sass/index.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Provider } from 'react-redux';
import { store } from './appState/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

const client = new QueryClient();

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<PersistGate persistor={persistor}>
			<Provider store={store}>
				<QueryClientProvider client={client}>
					<RouterProvider router={router} />
				</QueryClientProvider>
			</Provider>
		</PersistGate>
	</React.StrictMode>
);
