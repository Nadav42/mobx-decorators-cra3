import React from 'react';
import { observer } from "mobx-react"
import { useStoreContext } from "./StoreProvider";
import SumDisplay from "./SumDisplay";
import '../main.css';

const AmountDisplay = observer(() => {
	const store = useStoreContext();
	return (
		<p>Amount: {store.amount}</p>
	);
});

const MultDisplay = observer(() => {
	const store = useStoreContext();
	return (
		<p>Mult amount: {store.mult}</p>
	);
});

const App = observer(() => {
	const store = useStoreContext();

	const handleIncrease = () => {
		store.increaseAmount();
	};

	const handleDecrease = () => {
		store.decreaseAmount();
	};

	return (
		<div>
			<h1>React MobX App with Decorators</h1>
			<AmountDisplay />
			<MultDisplay />
			<SumDisplay />
			<button onClick={handleDecrease}>Decrease</button>
			<button onClick={handleIncrease}>Increase</button>
		</div>
	);
});

export default App;
