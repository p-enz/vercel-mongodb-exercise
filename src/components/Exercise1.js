import {useState} from 'react';

export default function Exercise1() {
	const [{data, error}, setData] = useState({data: '', error: null});

	function fetchExercise1() {
		fetch('/api/users')
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
			<h2>Exercise 1</h2>
			<button
				onClick={() => {
					fetchExercise1();
				}}
			>
				Load example Data from api/users
			</button>
			{error && <div>An error occured: {error}</div>}
			<pre>{data}</pre>
		</>
	);
}
