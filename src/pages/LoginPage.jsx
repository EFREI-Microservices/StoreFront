import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';

const LoginPage = () => {


    return (
        <div>
            <h1>Se connecter</h1>
            <form>
                <InputField
                    label="Email"
                    type="email"
                />
                <InputField
                    label="Password"
                    type="password"
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
