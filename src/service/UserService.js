import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL_USER;

/**
 * @return {Promise<string>} Returns the JWT token on successful authentication
 */
export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/auth/login`, { username, password });

    return response.data;
}

export const register = async (username, password) => {
    return await axios.post(`${API_URL}/auth/register`, { username, password });
}
