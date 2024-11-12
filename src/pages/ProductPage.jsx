import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header.jsx';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');

    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchProducts = async () => {
            if (!token) {
                setError('No token found, please log in.');
                return;
            }

            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL_PRODUCT}/products/${id}`,
                    {headers: { Authorization: `Bearer ${token}`}}
                );

                setProduct(response.data);
            } catch (error) {
                console.error(
                    'Erreur lors de la récupération du Produit :',
                    error.response || error
                );
                setError(
                    `Impossible de charger le Produit : ${
                        error.response?.data?.message || error.message
                    }`
                );
            }
        };
        fetchProducts();
    }, [id, token]);

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
                    {/* Carte pour afficher le produit */}
                    <div className="col-md-8">
                        <div className="card shadow-sm rounded-3 p-4">
                            <div className="row">
                                {/* Photo du produit */}
                                <div className="col-md-6 mb-4">
                                    <img
                                        src="https://via.placeholder.com/400?text=Produit+1"
                                        alt="Produit 1"
                                        className="img-fluid rounded shadow"
                                    />
                                </div>

                                {/* Informations sur le produit */}
                                <div className="col-md-6">
                                    <h2 className="fw-bold mb-3">{product.name}</h2>
                                    <p className="text-muted fs-4 mb-3">{product.price}€</p>
                                    <p className="text-muted mb-4">
                                        {product.description}
                                    </p>

                                    {/* Bouton Ajouter au panier */}
                                    <button className="btn btn-primary mb-3">
                                        Ajouter au panier
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
