import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <header
            className="d-flex justify-content-between align-items-center p-3 bg-light shadow-sm fixed-top w-100 z-index-10">
            {/* Titre du header */}
            <h1 className="fs-3 text-dark m-0 fw-bold" style={{fontSize: '2rem', color: '#2c3e50'}}>
                Mon E-commerce
            </h1>

            {/* Navigation des liens */}
            <nav className="d-flex gap-3">
                <Link
                    to="/listproduct"
                    className="text-dark text-decoration-none"
                    style={{fontSize: '1rem', padding: '0.5rem 1rem'}}
                >
                    Liste des produits
                </Link>

                <Link
                    to="/basket"
                    className="text-dark text-decoration-none"
                    style={{fontSize: '1rem', padding: '0.5rem 1rem'}}
                >
                    Panier
                </Link>
            </nav>

            {/* Bouton de déconnexion */}
            <nav>
                <button
                    onClick={handleLogout}
                    className="btn btn-danger"
                    style={{fontSize: '1rem'}}
                >
                    Déconnexion
                </button>
            </nav>
        </header>
    );
};

export default Header;
