import type {FC} from 'react';
import Props from './Popover.props';
import OptionsIcon from '@/components/icons/OptionsIcon';
import { useState } from 'react';

const Popover: FC<Props> = ({options, className, ...props}) => {

    return (
        <div className={`${className} flex flex-col justify-between w-min  bg-back-elevated  items-center p-4 text-white absolute rounded-2xl right-full translate-x-1/4 gap-4 shadow-base `} {...props}>
            {options?.map((item, index) => {
                return(
                    <div onClick={item.callback} key={index} className='flex gap-2 w-full  cursor-pointer items-center justify-start'>
                        {item.icon}
                        <p className='text-nowrap select-none'>{item.text}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Popover;
