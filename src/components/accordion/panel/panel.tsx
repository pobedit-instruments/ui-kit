import React from 'react';
import AntAccordion, {CollapsePanelProps} from 'antd/lib/collapse';

const AntAccordionPanel = AntAccordion.Panel;
const displayName = 'Accordion.Panel';

const AccordionPanel: React.FunctionComponent<CollapsePanelProps> = ({children, ...props}) => (
    <AntAccordionPanel data-test={displayName} {...props}>
        {children}
    </AntAccordionPanel>
);

AccordionPanel.displayName = displayName;

export {AccordionPanel};
export type {CollapsePanelProps as AccordionPanelProps};
