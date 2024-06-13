import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Header from './components/Header';

function App() {
	useEffect(() => {
		console.log('count');
		fetch('http://localhost:3000/todos')
			.then(res => res.json())
			.then(res => { console.log(res) });
	}, []);

	return (
		<>
			<Header />
			<Routes>
				<Route path='/*' element={<SideBar />} />
				{/* <Route path='/reg' element={<Register />} /> */}
			</Routes>

		</>
	);
}

export default App;
