import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL_USER}/auth/login`,
                {
                    username,
                    password,
                }
            );
            const { token } = response.data;

            localStorage.setItem('token', token);

            console.log('Login success:', response.data);

            navigate('/listproduct');
        } catch (error) {
            if (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) {
                setError(error.response.data.message);
            } else {
                setError('Login failed. Please try again.');
            }
            console.error('Login error:', error);
        }
    };

    return (
        <div>
            <h1>Se connecter</h1>
            {error && <p className="text-danger mb-3">{error}</p>}
            <form onSubmit={handleSubmit}>
                <InputField
                    label="Nom"
                    type="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <InputField
                    label="Mot de passe"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <SubmitButton label="Login" />
            </form>
            <p>
                Vous n&apos;avez pas de compte?{' '}
                <Link to="/register">
                    S&apos;inscrire ici
                </Link>
            </p>
        </div>
    );
};

export default LoginPage;
