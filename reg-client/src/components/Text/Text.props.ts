import {HTMLAttributes, ReactNode} from "react";


export default interface Props extends HTMLAttributes<HTMLParagraphElement> {
    type: 'display' | 'headline' | 'title' | 'label' | 'body';
    variant: 'large' | 'medium' | 'small';
}
