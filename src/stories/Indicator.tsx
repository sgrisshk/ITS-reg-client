import React from 'react';
import './indicator.css';

export interface IndicatorProps {
    variant?: 'warning' | 'normal';
    label: string;
    onClick?: () => void;
}

export const Indicator = ({ variant = 'normal', label, onClick }: IndicatorProps) => {
    return (
        <div
            className={`indicator ${variant}`}
            onClick={onClick}
        >
            {label}
        </div>
    );
};
