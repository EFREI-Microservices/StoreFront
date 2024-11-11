import PropTypes from 'prop-types';

const SubmitButton = ({ label }) => {
  return (
      <button
          type="submit"
          className="btn btn-primary w-100"
          style={{ maxWidth: '16rem' }}
      >
        {label}
      </button>
  );
};

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SubmitButton;
