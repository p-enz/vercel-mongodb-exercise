export default async function handler(request, response) {
	const {userId} = request.query;
	// TODO: Check for request methods GET and DELETE and handle them!

	return response.status(403).json({message: 'Error: request method not allowed.'});
}
