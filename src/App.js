import React from 'react';
import { observer } from "mobx-react"
import Store from "./store";
import './main.css';

const store = new Store();

const App = observer(() => {
	const handleIncrease = () => {
		store.increaseAmount();
	};

	return (
		<div>
			<h1>Hello2</h1>
			<div>Number is: {store.amount}</div>
			<button onClick={handleIncrease}>Increase</button>
		</div>
	);
});

export default App;
