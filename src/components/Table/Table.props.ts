import type {HTMLAttributes} from 'react';

export interface Option {
    icon: string;
    text: string;
    callback: VoidFunction;
}

export default interface Props extends HTMLAttributes<HTMLDivElement> {}
