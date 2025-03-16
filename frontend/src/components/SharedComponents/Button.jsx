import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label, onClick, type, disabled }) => {
    return (
        <button
            className={`button button-${type}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['primary', 'secondary', 'danger']),
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    onClick: () => {},
    type: 'primary',
    disabled: false,
};

export default Button;
