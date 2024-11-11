import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
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
                Vous n'avez pas de compte?{' '}
                <Link to="/register">
                    S'inscrire ici
                </Link>
            </p>
        </div>
    );
};

export default LoginPage;
