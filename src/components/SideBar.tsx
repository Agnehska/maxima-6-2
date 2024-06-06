import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Messages from './Messages';
import Friends from './Friends';
import { Profile } from './Profile';
import { Photoes } from './Photoes';
import { Music } from './Music';
import { Video } from './Video';
import { Wall } from './Wall';

const SideBar = () => {
	return (
		<div className='flex w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 container'>
			<div className='mr-5 min-w-72 h-80 bg-blue-200 py-10 px-5'>
				<div className='flex flex-col '>
					<Link
						to={'/profile'}
						className='text-blue-800 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
					>
						Профиль
					</Link>
					<Link
						to={'/news'}
						className='text-blue-800 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
					>
						Стена
					</Link>
					<Link
						to={'/message'}
						className='text-blue-800 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
					>
						Сообщения
					</Link>
                    <Link
						to={'/friends'}
						className='text-blue-800 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
					>
						Друзья
					</Link>
                    <Link
						to={'/music'}
						className='text-blue-800 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
					>
						Музыка
					</Link>
                    <Link
						to={'/video'}
						className='text-blue-800 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
					>
						Клипы
					</Link>
                    <Link
						to={'/photoes'}
						className='text-blue-800 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
					>
						Фотографии
					</Link>
				</div>
			</div>
			<div className='mx-auto max-h-80 overscroll-auto'>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/reg" element={<Register />} />
                    <Route path="/message" element={<Messages />} />
                    <Route path="/friends" element={<Friends />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/photoes" element={<Photoes />} />
					<Route path="/music" element={<Music />} />
					<Route path="/video" element={<Video />} />
					<Route path="/news" element={<Wall />} />
                </Routes>
            </div>
		</div>
	);
};

export default SideBar;
