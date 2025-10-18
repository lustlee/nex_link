import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore.ts';
import type { LoginRequest, LoginResponse } from '../entities/auth/model/types.ts';
import { loginRequest } from '../entities/auth/model/auth.ts';

export const useLogin = () => {
	const login = useAuthStore((state) => state.login);
	const navigate = useNavigate();
	
	return useMutation<LoginResponse, Error, LoginRequest>({
		mutationFn: (loginData) => loginRequest(loginData),
		onSuccess: (data) => {
			login(data.token, data.user);
			navigate('/');
		}
	});
};
