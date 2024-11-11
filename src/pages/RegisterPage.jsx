import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';

const RegisterPage = () => {


    return (
        <div>
            <h1>S'incrire</h1>
            <form>
                <InputField
                    label="Nom"
                    type="text"
                />
                <InputField
                    label="Email"
                    type="email"
                />
                <InputField
                    label="Mot de passe"
                    type="password"
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
