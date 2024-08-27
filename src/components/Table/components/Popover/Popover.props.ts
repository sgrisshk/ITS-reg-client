import type {HTMLAttributes} from 'react';
import { Option } from '../../Table.props';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
    options?: Option[] | undefined;
}
