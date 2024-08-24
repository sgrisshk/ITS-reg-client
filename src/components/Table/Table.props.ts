import type {HTMLAttributes} from 'react';

export interface Option {
    icon: string;
    text: string;
    callback: () => {};
}

export default interface Props extends HTMLAttributes<HTMLDataElement> {
    left: React.ReactNode;
    right: React.ReactNode;
    options: Option[];
}
