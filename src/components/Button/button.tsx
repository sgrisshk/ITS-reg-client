import React from 'react';
import { ButtonProps } from './button.props';
import '../Text/index'
const Button: React.FC<ButtonProps> = ({ label, disabled = false, color = 'primary' }) => {
    const baseStyles = 'px-4 py-2 font-headline-small rounded';
    const filledStyles = 'bg-color-red text-white w-full max-w-lg h-14 p-4 rounded-2xl gap-4';
    const borderedStyles = 'font-title-large text-white border-color-grey rounded-2xl w-44 h-16 p-4 gap-16 border-2';

    const buttonStyles = color === 'filled' ? filledStyles : borderedStyles;

    return (
        <button
            className={`${baseStyles} ${buttonStyles} ${disabled}`}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;