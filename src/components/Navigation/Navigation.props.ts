import type { HTMLAttributes } from 'react';

export interface NavigationTab {
    title: string;
    path: string;
}
export interface Props extends HTMLAttributes<HTMLDivElement> {
    activePath?: string;
    navigationTabs: NavigationTab[];
}
