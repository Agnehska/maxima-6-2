import React from 'react';
import counterStore, { ICounterStore } from './counterStore';

export interface IStoresContext {
	counterStore: ICounterStore;
}

export const storesContext = React.createContext<IStoresContext>({
	counterStore,
});

export const useStores = (): IStoresContext => React.useContext(storesContext);
