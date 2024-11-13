import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';
import {handleRegistration} from "../utils/AuthenticationUtils.js";

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const onSubmit = (event) => handleRegistration(event, username, password, setError, navigate);

    return (
        <div>
            <h1>S&apos;incrire</h1>
            {error && <p className="text-danger mb-3">{error}</p>}
            <form onSubmit={onSubmit}>
                <InputField label="Nom" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <InputField label="Mot de passe" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <SubmitButton label="Register" />
            </form>
            <p>Vous avez déjà un compte?{' '}<Link to="/login">Se connecter ici</Link></p>
        </div>
    );
};

export default RegisterPage;
