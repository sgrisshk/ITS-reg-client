import type {FC} from 'react';
import Props from './TableBody.props';
import OptionsIcon from '@/components/icons/OptionsIcon';
import { useState } from 'react';
import Popover from '../Popover';

const TableBody: FC<Props> = ({left, right, options, className, ...props}) => {
    const [isPopOverVisible, setPopOverVisible] = useState(false);

    const handleMouseEnter = () => {
        setPopOverVisible(true);
    };

    const handleMouseLeave = () => {
        setPopOverVisible(false);
    };
    return (
        <div className={`${className} flex justify-between w-full bg-back-secondary  items-center p-4 text-white`} {...props}>
            {left}
            <div className='flex w-full  text-label-dark-secondary justify-end gap-20 items-center'>
                {right} 
                {options &&                     
                <div 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                        className='relative cursor-pointer h-full'
                    >
                        <OptionsIcon />
                        {isPopOverVisible && (
                            <Popover options={options}/>
                        )}
                    </div> }
            </div>
        </div>
    );
};

export default TableBody;
