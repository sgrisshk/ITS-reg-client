import type {HTMLAttributes} from 'react';
import TableBodyProps  from './components/TableBody/TableBody.props';
export interface Option {
    icon: React.ReactElement;
    text: string;
    callback: VoidFunction;
}

export default interface Props extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    params: TableBodyProps[];
}
