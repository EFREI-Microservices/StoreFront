import PropTypes from 'prop-types';

const InputField = ({ label, type, value, onChange }) => {
    return (
        <div className="mb-3 w-100">
            <label className="form-label">{label}:</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="form-control"
            />
        </div>
    );
};

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default InputField;
