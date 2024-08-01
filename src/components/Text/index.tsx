import {FunctionComponent} from "react";
import Props from "@/components/Text/Text.props";
import '@fontsource/roboto';

const Text: FunctionComponent<Props> = ({
                                            type,
                                            variant,
                                            className = '',
                                            children,
                                        }) => {
    let customClassNames = 'a?';

    switch (`${type}-${variant}`) {
        case 'display-large':
            customClassNames = 'font-sans text-6xl font-normal text-left tracking-tight';
            break
        case 'display-medium':
            customClassNames = 'font-sans text-5xl font-normal text-left';
            break
        case 'display-small':
            customClassNames='font-sans text-4xl font-normal text-left';
            break

        case 'headline-large':
            customClassNames = 'font-sans text-3xl font-normal leading-10 text-left';
            break
        case 'headline-medium':
            customClassNames = 'font-sans text-3xl font-normal leading-9 text-left';
            break
        case 'headline-small':
            customClassNames='font-sans text-2xl font-normal leading-8 text-left';
            break

        case 'title-large':
            customClassNames = 'font-sans text-xl font-normal leading-7 text-left';
            break
        case 'title-medium':
            customClassNames = 'font-sans text-base font-medium leading-6 text-left tracking-wide';
            break
        case 'title-small':
            customClassNames='font-sans text-sm font-medium leading-5 text-left tracking-wide';
            break

        case 'lable-large':
            customClassNames = 'font-sans text-sm font-medium leading-5 text-left tracking-wide';
            break
        case 'lable-medium':
            customClassNames = 'font-sans text-xs font-medium leading-4 text-left tracking-wider';
            break
        case 'lable-small':
            customClassNames='font-sans font-medium leading-4 text-left tracking-wider';
            break

        case 'body-large':
            customClassNames = 'font-sans text-base font-normal leading-6 text-left tracking-wider';
            break
        case 'body-medium':
            customClassNames = 'font-sans text-sm font-normal leading-5 text-left tracking-wide';
            break
        case 'body-small':
            customClassNames='font-sans text-xs font-normal leading-4 text-left tracking-wide';
            break
    }

    return <p className={`${customClassNames} ${className}`}>{children}</p>;
}

export default Text;
