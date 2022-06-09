export default async function handler(request, response) {
	if (request.method === 'GET') {
		// TODO: read from db and return array of users
	}
	if (request.method === 'POST') {
		// TODO: add new user to db and return new user
	}
	return response.status(403).json({message: 'Error: request method not allowed.'});
}
