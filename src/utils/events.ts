import React from 'react';

const preventClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
};

export {preventClick};
