import type { LoginRequest, LoginResponse } from './types.ts';
import { api } from '../../../shared/api/axiosBase.ts';

export const loginRequest = async (loginData: LoginRequest): Promise<LoginResponse> => {
	const {data} = await api.post<LoginResponse>('/auth/login', loginData);
	return data;
};