import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import SideBar from './components/SideBar';
import Header from './components/Header';

function App() {
	const [count, setCount] = useState<number>(0);

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
