import React from 'react';

import AntMenu, {
    MenuProps,
    MenuMode
} from 'antd/lib/menu';

const displayName = 'Menu';

const Menu: React.FunctionComponent<MenuProps> = ({...props}) => (
    <AntMenu data-test={displayName} {...props} />
);

export {Menu};

export type {
    MenuMode,
    MenuProps
};
