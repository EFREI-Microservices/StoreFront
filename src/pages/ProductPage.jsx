import Header from '../components/Header.jsx';

const ProductPage = () => {
    return (
        <div>
            <Header />

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
                                    <h2 className="fw-bold mb-3">Nom du produit</h2>
                                    <p className="text-muted fs-4 mb-3">29.99€</p>
                                    <p className="text-muted mb-4">
                                        Voici une description détaillée du produit. Ce produit est excellent pour diverses raisons. Il est fait
                                        de matériaux de haute qualité et est conçu pour durer.
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
