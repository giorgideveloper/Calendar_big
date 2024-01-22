import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import Mypost from './Mypost';
import { useState } from 'react';
import Firebase from './Firebase/Firebase';

function App() {
	const [post, setPosts] = useState('');
	const apiEndPoint = 'https://greenhills.ge/bookinglist?format=json';
	useEffect(() => {
		const getPosts = async () => {
			const { data: res } = await axios.get(apiEndPoint);
			setPosts(res);
		};
		getPosts();
	}, []);

	return (
		<div className='App'>
			<Mypost post={post} />
			<Firebase />
		</div>
	);
}

export default App;
