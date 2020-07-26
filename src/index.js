import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Store from "./stores/store";
import { StoreProvider } from "./components/StoreProvider";

const store = new Store();

ReactDOM.render(
	<React.StrictMode>
		<StoreProvider store={store}>
			<App />
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById('root')
);