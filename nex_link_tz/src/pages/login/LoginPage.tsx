import React, { useState } from 'react';
import { useLogin } from '../../hooks/useLogin.ts';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const loginMutation = useLogin();
	
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		loginMutation.mutate({email, password});
	};
	
	return (
		<form onSubmit={ handleSubmit }
		      className="max-w-md mx-auto mt-20 flex flex-col gap-4">
			<input
				type="email"
				placeholder="Email"
				value={ email }
				onChange={ (e) => setEmail(e.target.value) }
				required
				className="border p-2 rounded"
				autoFocus={ true }
			/>
			<input
				type="password"
				placeholder="Password"
				value={ password }
				onChange={ (e) => setPassword(e.target.value) }
				required
				className="border p-2 rounded"
			/>
			<button
				aria-label="Войти"
				type="submit"
				disabled={ loginMutation.isPending }
				className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
			>
				{ loginMutation.isPending ? 'Logging in...' : 'Login' }
			</button>
			{ loginMutation.isError && (
				<p className="text-red-500">Invalid email or password</p>
			) }
		</form>
	);
};

export default LoginPage;
