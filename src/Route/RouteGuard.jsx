import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteGuard = ({ children, protectedRoute }) => {
  const token = localStorage.getItem('token');

  if (protectedRoute) {
    // on redirige vers /login si l'utilisateur n'a pas de token
    return token ? children : <Navigate to="/login" />;
  } else {
    // on redirige vers / si l'utilisateur a déjà un token
    return token ? <Navigate to="/listproduct" /> : children;
  }
};

RouteGuard.propTypes = {
  children: PropTypes.node.isRequired,
  protectedRoute: PropTypes.bool
};

RouteGuard.defaultProps = {
  protectedRoute: false
};

export default RouteGuard;
