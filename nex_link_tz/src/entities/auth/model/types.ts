export interface User {
	id: string;
	email: string;
	name: string;
	favorites: string[];
}

export interface LoginRequest {
	email: string;
	password: string;
}

export interface LoginResponse {
	token: string;
	user: User;
}