import PropTypes from 'prop-types';

const Button = ({ children, type }) => {
  return (
      <button
          type={type}
          className="btn btn-primary"
      >
        {children}
      </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
