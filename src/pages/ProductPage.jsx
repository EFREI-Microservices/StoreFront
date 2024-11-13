import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header.jsx';
import {fetchProducts} from "../service/ProductService.js";
import FullProductCard from "../components/Products/FullProductCard.jsx";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');
    useEffect(() => {
        const loadProducts = async () => {
            try {
                const productData = await fetchProducts(id);
                setProduct(productData);
            } catch (error) {
                setError(error.message);
            }
        };

        loadProducts();
    }, [id]);

    if (error) {
        return (
            <div className="d-flex flex-column align-items-center bg-light p-4 min-vh-100 w-100 overflow-auto">
                <Header />
                <div className="p-3">
                    <p className="text-danger">{error}</p>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="d-flex flex-column align-items-center bg-light p-3 container overflow-auto">
                <Header/>
                <div className="p-3">
                    <p>Chargement du produit...</p>
                </div>
            </div>
        );
    }


    return (
        <div>
            <Header/>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <FullProductCard product={product} />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
