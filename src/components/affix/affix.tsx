import React  from 'react';

import AntAffix, {
    AffixProps,
    AffixState
} from 'antd/lib/affix';

const displayName = 'Affix';

const Affix: React.FunctionComponent<AffixProps> = ({children, ...props}) => (
    <AntAffix data-test={displayName} {...props}>
        {children}
    </AntAffix>
);

Affix.displayName = displayName;

export {Affix};

export type {
    AffixProps,
    AffixState
};
