import React from 'react';
import { observer } from "mobx-react"
import Store from "./store";
import './main.css';

const store = new Store();

const App = observer(() => {
	const handleIncrease = () => {
		store.increaseAmount();
	};

	const handleDecrease = () => {
		store.decreaseAmount();
	};

	return (
		<div>
			<h1>React MobX App with Decorators</h1>
			<p>Amount: {store.amount}</p>
			<p>Mult amount: {store.mult}</p>
			<button onClick={handleDecrease}>Decrease</button>
			<button onClick={handleIncrease}>Increase</button>
		</div>
	);
});

export default App;
