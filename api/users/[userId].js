export default async function handler(request, response) {
	const {userId} = request.query;
	// TODO: Check for request methods GET and DELETE and handle them!
	if (request.method === 'GET') {
		const newUsers = JSON.parse(fs.readFileSync('db/users.json', 'utf8'));
		return response.status(200).json({data: newUsers.filter(user => user._id === userId)});
	}
	if (request.method === 'DELETE') {
		const deletedUser = await User.findByIdAndRemove(userId);
		return response.status(200).json({data: deletedUser});
	}
	// update example
	// if (request.method === '') {
	// 	//TO DO ID
	// 	const id = response.id;
	// 	console.log(id);
	// 	const updatedUser = await User.findByIdAndUpdate(
	// 		'62a1ec233a4d567120be0f79',
	// 		{$set: {name: 'Mario'}},
	// 		{new: true}
	// 	);
	// 	return response.status(200).json({data: updatedUser});
	// }
	return response.status(403).json({message: 'Error: request method not allowed.'});
}
