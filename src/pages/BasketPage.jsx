import { useState } from 'react';
import Header from '../components/Header.jsx';

const BasketPage = () => {
    // Jeu de données TEMPORAIRE
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Produit A', price: 29.99, quantity: 2 },
        { id: 2, name: 'Produit B', price: 19.99, quantity: 1 },
        { id: 3, name: 'Produit C', price: 49.99, quantity: 3 },
    ]);

    const updateQuantity = (id, quantity) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        ));
    };

    const cartSubtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shippingCost = 5.99;
    const cartTotal = cartSubtotal + shippingCost;

    return (
        <div id="root" className="container">
            <Header />
            <div className="container mt-5">
                <div className="row">
                    {/* Tableau du panier */}
                    <div className="col-lg-8 mb-4">
                        <div className="table-responsive">
                            <table className="table table-striped border rounded shadow-sm overflow-hidden">
                                <thead className="bg-primary text-white">
                                <tr>
                                    <th scope="col">Produit</th>
                                    <th scope="col">Quantité</th>
                                    <th scope="col">Prix Unitaire</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Actions</th>
                                </tr>
                                </thead>
                                <tbody className="bg-white">
                                {cartItems.map(item => (
                                    <tr key={item.id} className="align-middle">
                                        <td>{item.name}</td>
                                        <td style={{ width: '120px' }}>
                                            <input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                className="form-control text-center"
                                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                            />
                                        </td>
                                        <td>{item.price.toFixed(2)}€</td>
                                        <td>{(item.price * item.quantity).toFixed(2)}€</td>
                                        <td>
                                            <button
                                                className="btn btn-danger btn-sm"
                                            >
                                                Supprimer
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Résumé du panier */}
                    <div className="col-lg-4">
                        <div className="card shadow-sm p-3 border rounded">
                            <h5 className="card-title mb-3">Résumé du Panier</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Sous-total
                                    <span>{cartSubtotal.toFixed(2)}€</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Frais de livraison
                                    <span>{shippingCost.toFixed(2)}€</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                                    Total
                                    <span>{cartTotal.toFixed(2)}€</span>
                                </li>
                            </ul>
                            <button className="btn btn-success w-100 mt-2">Passer la commande</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasketPage;
