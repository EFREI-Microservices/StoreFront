import { useState, useEffect } from 'react';
import Header from "../components/Header.jsx";
import SearchBar from "../components/Misc/SearchBar.jsx";
import ProductFilter from "../components/Products/ProductFilter.jsx";
import LightProductCard from "../components/Products/LightProductCard.jsx";
import {fetchProducts} from "../service/ProductService.js";

const ListProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const productsData = await fetchProducts();
                setProducts(productsData);
            } catch (error) {
                setError(error.message);
            }
        };

        loadProducts();
    }, []);

    return (
        <div>
            <Header/>
            <div className="container mt-5">

                {error && (
                    <div className="alert alert-danger mt-4">
                        {error}
                    </div>
                )}

                <SearchBar placeholder={"Rechercher un produit..."} />

                <div className="row">
                    <ProductFilter />

                    <div className="col-md-9">
                        <div className="row">
                            {products.map((product) => (
                                <LightProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListProductsPage;
