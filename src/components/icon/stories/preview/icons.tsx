import React from 'react';

const OutlinedIcon = (): JSX.Element => (
    <svg width="1em"
         height="1em"
         fill="currentColor"
         aria-hidden="true"
         focusable="false"
         viewBox="0 0 1024 1024"
    >
        <path d={`
            M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0
            96-43 96-96V160c0-53-43-96-96-96z m-12 800H172c-6.6
            0-12-5.4-12-12V172c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v680c0 6.6-5.4 12-12 12z
        `} />
    </svg>
);

const FilledIcon = (): JSX.Element => (
    <svg width="1em"
         height="1em"
         fill="currentColor"
         aria-hidden="true"
         focusable="false"
         viewBox="0 0 1024 1024"
    >
        <path d={`
            M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53
            0 96-43 96-96V160c0-53-43-96-96-96z
        `} />
    </svg>
);

const TwoToneIcon = (): JSX.Element => (
    <svg width="1em"
         height="1em"
         fill="currentColor"
         aria-hidden="true"
         focusable="false"
         viewBox="0 0 1024 1024"
    >
        <path d={
            `M16 512c0 273.932 222.066 496 496 496s496-222.068
            496-496S785.932 16 512 16 16 238.066 16 512z m496 368V144c203.41
             0 368 164.622 368 368 0 203.41-164.622 368-368 368z
         `} />
    </svg>
);

export {
    OutlinedIcon,
    FilledIcon,
    TwoToneIcon
};
