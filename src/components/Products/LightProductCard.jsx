import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const LightProductCard = ({ key, product }) => {
    return (
        <div key={key} className="col-4 mb-4">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Prix : {product.price}€</p>
                    <Link to={`/product/${product.id}`} className="btn btn-primary">
                        Voir le produit
                    </Link>
                </div>
            </div>
        </div>
    );
}

LightProductCard.propTypes = {
    key: PropTypes.number.isRequired,
    product: PropTypes.object.isRequired
}

export default LightProductCard;
