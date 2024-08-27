import type {FC} from 'react';
import Props from './TableHeader.props';
import OptionsIcon from '@/components/icons/OptionsIcon';

const TableHeader: FC<Props> = ({
    left,
    right,
    className,
    ...props
}) => {
    return (
    <div className={`${className} w-full flex justify-between bg-back-secondary font-semibold text-xs items-center px-4 pt-4 pb-2 text-label-dark-secondary`} {...props}>
            {left}
            <div className='flex w-full justify-end gap-20'>
                {right} 
            </div>
    </div>);
};

export default TableHeader;
