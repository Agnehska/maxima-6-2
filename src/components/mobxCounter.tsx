import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../mobx/index.ts";

const Counter: React.FC = observer(() => {
    const { counterStore } = useStores();

    console.log(counterStore);

    return (
        <div>
            <h1>{counterStore.count}</h1>
            <button onClick={() => counterStore.increment()}>Increment</button>
            <button onClick={() => counterStore.decrement()}>Decrement</button>

            <h1>{counterStore.isAdmin ? "Admin" : "Not Admin"}</h1>
            <button onClick={() => counterStore.toggleAdmin()}>Toggle Admin</button>
        </div>
    );
});

export default Counter;