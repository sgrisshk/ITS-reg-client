import type {FC} from 'react';
import {Props} from './Navigation.props';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

interface NavigationTab {
    title: string;
    path: string;
}

const navigationTabs: NavigationTab[] = [
    {title: 'Схема', path: '/scheme'},
    {title: 'Рассылки', path: '/posts'},
    {title: 'Настройки', path: '/settings'},
];

const getTabTileClassNames = ({isActive}: {isActive: boolean}): string => {
    return `
        align-baseline
        py-2
        font-normal
        text-2xl
        hover:text-white hover:underline 
        underline-offset-8 transition-all duration-200  decoration-2 decoration-color-white-underline
        text-nowrap
        ${isActive ? ' underline text-white' : 'text-color-white-unselected'} 
    `;
};

const Navigation: FC<Props> = ({activePath, className, ...props}) => {
    const activeNextPathName = usePathname();
    activePath = activePath === undefined ? activeNextPathName : activePath;
    return (
        <div className={`${className} w-full max-w-10`} {...props}>
            <ul className='flex gap-4 '>
                {navigationTabs.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link
                                href={item.path}
                                className={`${getTabTileClassNames({
                                    isActive: item.path === activePath,
                                })}`}>
                                {item.title}{' '}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Navigation;
