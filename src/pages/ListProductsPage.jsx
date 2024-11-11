import { Link } from 'react-router-dom';
import Header from "../components/Header.jsx";

const ListProductsPage = () => {


    return (
        <div>
            <Header/>

            <div className="container mt-5">
                {/* Barre de recherche */}
                <div className="mb-4 d-flex gap-3 align-items-center">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Rechercher un produit..."
                    />
                    <button type="button" className="btn btn-primary">
                        Rechercher
                    </button>
                </div>

                <div className="row">
                    {/* Filtres*/}
                    <div className="col-md-3 mb-4">
                        <h5 className="mb-3">Filtres</h5>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Catégorie</label>
                            <select id="category" className="form-select">
                                <option value="">Toutes</option>
                                <option value="electronics">Électronique</option>
                                <option value="fashion">Mode</option>
                                <option value="home">Maison</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="priceRange" className="form-label">Tranche de prix</label>
                            <select id="priceRange" className="form-select">
                                <option value="">Tous</option>
                                <option value="0-50">0€ - 50€</option>
                                <option value="50-100">50€ - 100€</option>
                                <option value="100-200">100€ - 200€</option>
                            </select>
                        </div>
                    </div>

                    {/* Section des produits*/}
                    <div className="col-md-9">
                        <div className="row">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((product) => (
                                <div key={product} className="col-md-4 mb-4">
                                    <div className="card h-100">
                                        <img
                                            src={`https://via.placeholder.com/150?text=Produit+${product}`}
                                            className="card-img-top"
                                            alt={`Produit ${product}`}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">Nom du produit</h5>
                                            <p className="card-text">Prix : {product * 10}€</p>
                                            <Link to={`/product`} className="btn btn-primary">
                                                Voir le produit
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListProductsPage;
