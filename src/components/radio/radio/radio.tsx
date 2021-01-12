import React from 'react';
import AntRadio, {RadioProps as Props} from 'antd/lib/radio';

const displayName = 'Radio';
type RadioProps = Props & React.RefAttributes<HTMLElement>;

const Radio = React.forwardRef<HTMLElement, RadioProps>(({children, ...props}, ref) => (
    <AntRadio data-test={displayName}
                   ref={ref}
                   {...props}
    >
        {children}
    </AntRadio>
));

Radio.displayName = displayName;

export {Radio};
export type {RadioProps};

export type {
    RadioChangeEvent,
    RadioChangeEventTarget
} from 'antd/lib/radio';
