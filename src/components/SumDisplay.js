import React from 'react';
import { observer } from "mobx-react"
import { useStoreContext } from "./StoreProvider";

const SumDisplay = observer(() => {
    const store = useStoreContext();

    return (
        <p>Sum: {store.amount} + {store.mult} = {store.amount + store.mult}</p>
    );
});

export default SumDisplay