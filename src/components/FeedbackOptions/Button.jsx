import PropTypes from 'prop-types';

const Button = ({ key, color, onClick }) => (
    <button
        type="button"
        onClick={() => onClick(key)}
        style={{ backgroundColor: color }}
    >
        {key}
    </button>
);
export default Button;

Button.propTypes = {
    key: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
