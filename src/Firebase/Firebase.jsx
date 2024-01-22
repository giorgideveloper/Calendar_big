import React, { useState } from 'react';

export default function Firebase() {
	const [user, setUser] = useState({
		Name: '',
		Phone: '',
		Barber: '',
		Day: '',
		Hours: '',
		Message: '',
	});

	console.log(user);
	let name, value;

	const data = e => {
		name = e.target.name;
		value = e.target.value;
		setUser({ ...user, [name]: value });
	};

	return (
		<div>
			<form method='POST'>
				<input
					type='text'
					name='Name'
					placeholder='Your Name'
					value={user.name}
					required
					onChange={data}
				/>
				<input
					type='text'
					name='Phone'
					placeholder='Your Phone'
					value={user.Phone}
					required
					onChange={data}
				/>
				<input
					type='text'
					name='Barber'
					placeholder='Your Barber'
					value={user.Barber}
					required
					onChange={data}
				/>
				<input
					type='text'
					name='Day'
					placeholder='Day booking'
					value={user.Day}
					required
					onChange={data}
				/>
				<input
					type='date'
					name='Hours'
					placeholder='Hours booking'
					value={user.Hours}
					required
					onChange={data}
				/>
				<input
					type='time'
					name='Message'
					placeholder='Message your barber'
					value={user.Message}
					required
					onChange={data}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}
