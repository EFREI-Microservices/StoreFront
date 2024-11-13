import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteGuard = ({ children, protectedRoute }) => {
  const token = localStorage.getItem('token');

  if (protectedRoute) {
    return !token ? <Navigate to="/login" /> : children;
  } else {
    return token ? <Navigate to="/" /> : children;
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
