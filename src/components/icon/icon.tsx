import React from 'react';
import AntdIcon from '@ant-design/icons/lib/components/Icon';

// @todo https://github.com/ant-design/ant-design/issues/27735
type Props = React.ComponentProps<typeof AntdIcon> & {
    component?: any;
};

const displayName = 'Icon';

const Icon = React.forwardRef<HTMLElement, Props>(({...props}, ref) => (
    <AntdIcon data-test={displayName} ref={ref} {...props} />
));

Icon.displayName = displayName;

export {Icon};
export type {Props as IconProps};

export type {
    IconComponentProps,
    CustomIconComponentProps,
    IconBaseProps
} from '@ant-design/icons/lib/components/Icon';
