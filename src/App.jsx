import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ListProductsPage from './pages/ListProductsPage';
import ProductPage from "./pages/ProductPage.jsx";
import OrderPage from './pages/OrderPage';
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="app-container">
                            <div className="auth-buttons">
                                <Link to="/login" className="btn-primary">
                                    Login
                                </Link>
                                <Link to="/register" className="btn-secondary">
                                    Register
                                </Link>
                            </div>
                        </div>
                    }
                />

                <Route path="/register" element={<RegisterPage />} />

                <Route path="/login" element={<LoginPage />} />

                <Route path="/listproduct" element={<ListProductsPage />} />

                <Route path="/product" element={<ProductPage />} />

                <Route path="/order" element={<OrderPage />} />


            </Routes>
        </Router>
    );
}

export default App
