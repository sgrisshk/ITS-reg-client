import type {FC} from 'react';
import Props from './Popover.props';
import OptionsIcon from '@/components/icons/OptionsIcon';
import { useState } from 'react';

const Popover: FC<Props> = ({options, className, ...props}) => {

    return (
        <div className={`${className} flex flex-col justify-between w-fit bg-back-elevated  items-center p-4 text-white  rounded-2xl right-full  gap-4 shadow-base z-10 `} {...props}>
            {options?.map((item, index) => {
                return(
                    <div onClick={item.callback} key={index} className='flex gap-2 w-full  cursor-pointer items-center justify-start'>
                        {item.icon}
                        <p className='text-nowrap select-none font-normal text-base'>{item.text}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Popover;
