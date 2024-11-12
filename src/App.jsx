import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ListProductsPage from './pages/ListProductsPage';
import ProductPage from "./pages/ProductPage.jsx";
import BasketPage from './pages/BasketPage.jsx';
import ProtectedRoute from "./Route/ProtectedRoute.jsx";
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="container text-center">
                            <div className="d-flex justify-content-center gap-3 mt-5">
                                <Link to="/login" className="btn btn-primary btn-lg">
                                    Login
                                </Link>
                                <Link to="/register" className="btn btn-secondary btn-lg">
                                    Register
                                </Link>
                            </div>
                        </div>
                    }
                />

                <Route path="/register" element={<RegisterPage />} />

                <Route path="/login" element={<LoginPage />} />

                <Route path="/listproduct" element={<ProtectedRoute><ListProductsPage /></ProtectedRoute>} />

                <Route path="/product/:id" element={<ProtectedRoute><ProductPage /></ProtectedRoute>} />

                <Route path="/basket" element={<ProtectedRoute><BasketPage /></ProtectedRoute>} />


            </Routes>
        </Router>
    );
}

export default App
