/** @format */

interface APIResponse {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

const fetchData = async () => {
	const data = await fetch('https://jsonplaceholder.typicode.com/users');
	const response: APIResponse[] = await data.json();
	return response;
};

fetchData().then((todos) => console.log(todos));
