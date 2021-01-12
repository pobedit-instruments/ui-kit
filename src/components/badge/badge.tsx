import React from 'react';
import AntBadge, {BadgeProps} from 'antd/lib/badge';

const displayName = 'Badge';

const Badge: React.FunctionComponent<BadgeProps> = ({children, ...props}) => (
    <AntBadge data-test={displayName} {...props}>
        {children}
    </AntBadge>
);

Badge.displayName = displayName;

export {Badge};
export type {BadgeProps};
