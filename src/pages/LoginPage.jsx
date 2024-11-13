import {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';
import {handleLogin} from "../utils/AuthenticationUtils.js";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const onSubmit = (event) => handleLogin(event, username, password, setError, navigate);

    return (
        <div>
            <h1>Se connecter</h1>
            {error && <p className="text-danger mb-3">{error}</p>}
            <form onSubmit={onSubmit}>
                <InputField label="Nom" type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <InputField label="Mot de passe" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <SubmitButton label="Login"/>
            </form>
            <p>Vous n&apos;avez pas de compte?{' '}<Link to="/register">S&apos;inscrire ici</Link></p>
        </div>
    );
};

export default LoginPage;
