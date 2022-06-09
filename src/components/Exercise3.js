import {useState} from 'react';

export default function Exercise3() {
	const [{data, error}, setData] = useState({data: '', error: null});

	function fetchExercise3(data) {
		fetch('/api/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				} else {
					return response.json();
				}
			})
			.then(data => {
				setData({
					data: JSON.stringify(data.data, null, 4),
					error: null,
				});
			})
			.catch(error => {
				setData({
					data: '',
					error: error.message,
				});
			});
	}

	return (
		<>
			<h2>Exercise 3</h2>
			<button
				onClick={() => {
					fetchExercise3({
						name: 'John Doe',
						email: 'test@1234.de',
						age: 24,
					});
				}}
			>
				Post new data to API under api/users
			</button>
			{error && <div>An error occured: {error}</div>}
			<pre>{data}</pre>
		</>
	);
}
