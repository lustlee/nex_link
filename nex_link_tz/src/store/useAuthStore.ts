import { create } from 'zustand';

interface User {
	id: string;
	email: string;
	name: string;
	favorites: string[];
}

interface AuthState {
	token: string | null;
	user: User | null;
	login: (token: string, user: User) => void;
	logout: () => void;
	isAuthenticated: boolean;
}

export const useAuthStore = create<AuthState>((set) => {
	const savedToken = localStorage.getItem('token');
	const savedUser = JSON.parse(localStorage.getItem('user') || 'null');
	
	return {
		token: savedToken,
		user: savedUser,
		isAuthenticated: !!savedToken,
		login: (token, user) => {
			localStorage.setItem('token', token);
			localStorage.setItem('user', JSON.stringify(user));
			set({token, user, isAuthenticated: true});
		},
		logout: () => {
			localStorage.removeItem('token');
			localStorage.removeItem('user');
			set({token: null, user: null, isAuthenticated: false});
		}
	};
});
