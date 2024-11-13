import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL_PRODUCT;
export const fetchProducts = async (productId = null) => {
    const endpoint = productId ? `products/${productId}` : `products/`;

    try {
        const response = await axios.get(`${API_URL}/${endpoint}`);

        return response.data;
    } catch (error) {
        throw new Error(
            `Failed to load products: ${error.response?.data?.message || error.message}`
        );
    }
};
