import type {HTMLAttributes} from 'react';
import {Option} from '../../Table.props';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
    left?: React.ReactNode;
    right?: React.ReactNode;
    options: Option[];
}
