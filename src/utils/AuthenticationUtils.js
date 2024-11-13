import {login, register} from "../service/UserService.js";
export const handleLogin = async (event, username, password, setError, navigate) => {
    event.preventDefault();
    setError('');

    try {
        const { token } = await login(username, password);

        localStorage.setItem('token', token);

        navigate('/');
    } catch (error) {
        setError(error.response?.data?.message || 'Login failed. Please try again.');
    }
};

export const handleRegistration = async (event, username, password, setError, navigate) => {
    event.preventDefault();
    setError('');

    if (!username || !password) {
        return setError('All fields are required');
    }

    if (!isPasswordValid(password)) {
        return setError('Invalid password format');
    }

    try {
        const registrationResponse = await register(username, password);

        if (registrationResponse.status === 201) {
            navigate('/login');
        } else {
            setError('Please try again.');
        }
    } catch (error) {
        setError(error.response?.data?.message || 'An error occurred during registration');
    }
};

export const handleLogout = (navigate) => {
    localStorage.removeItem('token');
    navigate('/login');
};

const isPasswordValid = (password) => {
    return /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
};
