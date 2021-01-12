import React, {FunctionComponent} from 'react';
import AntAccordion, {CollapseProps} from 'antd/lib/collapse';

const displayName = 'Accordion';

const Accordion: React.FunctionComponent<CollapseProps> = ({children, ...props}) => (
    <AntAccordion data-test={displayName} {...props}>
        {children}
    </AntAccordion>
);

Accordion.displayName = displayName;

export {Accordion};
export type {CollapseProps as AccordionProps};
