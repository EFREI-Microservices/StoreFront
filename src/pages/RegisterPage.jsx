import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const isPasswordValid = (password) => {
        return /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!username || !password) {
            setError('All fields are required');
            return;
        }

        if (!isPasswordValid(password)) {
            setError('Invalid password format');
            return;
        }


        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL_USER}/auth/register`,
                {
                    username,
                    password,
                }
            );
            console.log('Register success:', response.data);

            navigate('/login');
        } catch (error) {
            if (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) {
                setError(error.response.data.message);
            } else {
                setError('An error occurred during registration');
            }
        }
    };

    return (
        <div>
            <h1>S&apos;incrire</h1>
            {error && <p className="text-danger mb-3">{error}</p>}
            <form onSubmit={handleSubmit}>
                <InputField
                    label="Nom"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <InputField
                    label="Mot de passe"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <SubmitButton label="Register" />
            </form>
            <p>
                Vous avez déjà un compte?{' '}
                <Link to="/login">
                    Se connecter ici
                </Link>
            </p>
        </div>
    );
};

export default RegisterPage;
