import React from 'react';
import AntTypography from 'antd/lib/typography';

const AntTitle = AntTypography.Title;
const displayName = 'Typography.Title';

type TitleProps = React.ComponentProps<typeof AntTitle>;

const Title: React.FunctionComponent<TitleProps> = ({...props}) => {
    return <AntTitle data-test={displayName} {...props} />;
};

Title.displayName = displayName;

export {Title};
export type {TitleProps};
