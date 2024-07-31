import {FunctionComponent} from "react";
import Props from "@/components/Text/Text.props";

const Text: FunctionComponent<Props> = ({
                                            type,
                                            variant,
                                            className = '',
                                            children,
                                        }) => {
    let customClassNames = 'a?';

    switch (`${type}-${variant}`) {
        case 'display-large':
            customClassNames = 'text-6xl font-normal text-left';
            break
        case 'display-medium':
            customClassNames = 'text-5xl font-normal text-left';
            break
            // ...
    }

    return <p className={`${customClassNames} ${className}`}>{children}</p>;
}

export default Text;
