import React from 'react';
import AntTypography from 'antd/lib/typography';

type TypographyProps = React.ComponentProps<typeof AntTypography>;

const displayName = 'Typography';

const Typography: React.FunctionComponent<TypographyProps> = ({...props}) => {
    return <AntTypography data-test={displayName} {...props} />;
};

Typography.displayName = displayName;

export {Typography};
export type {TypographyProps};
