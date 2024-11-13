import PropTypes  from "prop-types";

const FullProductCard = ({ product }) => {
    return (
        <div className="col-md-8">
            <div className="card shadow-sm rounded-3 p-4">
                <div className="row">

                    <div className="col-md-6 mb-4">
                        <img src="/img/productplaceholder.png" alt="Produit 1" className="img-fluid rounded shadow"/>
                    </div>

                    <div className="col-md-6">
                        <h2 className="fw-bold mb-3">{product.name}</h2>
                        <p className="text-muted fs-4 mb-3">{product.price}€</p>
                        <p className="text-muted mb-4">{product.description}</p>

                        <button className="btn btn-primary mb-3">
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

FullProductCard.propTypes = {
    product: PropTypes.object.isRequired
}

export default FullProductCard;
