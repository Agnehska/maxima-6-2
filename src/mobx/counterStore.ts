import { makeAutoObservable } from 'mobx';

export interface ICounterStore {
	count: number;
	counter1: number;
	isAdmin: boolean;
	increment: () => void;
	decrement: () => void;
	toggleAdmin: () => void;
}

class CounterStore {
	count = 0;
	counter1 = 0;
	isAdmin = false;

	constructor() {
		makeAutoObservable(this);
	}

	increment = () => {
		this.count += 1;
	};

	decrement = () => {
		this.count -= 1;
	};

	toggleAdmin = () => {
		this.isAdmin = !this.isAdmin;
	};
}

const counterStore = new CounterStore();
export default counterStore;
