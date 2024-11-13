import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ListProductsPage from './pages/ListProductsPage';
import ProductPage from "./pages/ProductPage.jsx";
import BasketPage from './pages/BasketPage.jsx';
import RouteGuard from "./routes/RouteGuard.jsx";
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<RouteGuard><LoginPage/></RouteGuard>}/>
                <Route path="/register" element={<RouteGuard><RegisterPage/></RouteGuard>}/>

                <Route path="/" element={<RouteGuard protectedRoute><ListProductsPage/></RouteGuard>}/>
                <Route path="/product/:id" element={<RouteGuard protectedRoute><ProductPage/></RouteGuard>}/>

                <Route path="/basket" element={<RouteGuard protectedRoute><BasketPage/></RouteGuard>}/>
            </Routes>
        </Router>
    );
}

export default App
