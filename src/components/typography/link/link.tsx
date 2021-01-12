import React, {ComponentProps} from 'react';
import AntTypography from 'antd/lib/typography';

const AntLink = AntTypography.Link;
const displayName = 'Typography.Link';

type LinkProps = ComponentProps<typeof AntLink>;

const Link = React.forwardRef<HTMLElement, LinkProps>(({...props}, ref) => (
    <AntLink data-test={displayName} ref={ref} {...props} />
));

Link.displayName = displayName;

export {Link};
export type {LinkProps};
