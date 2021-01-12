import {
    Accordion as OriginalAccordion,
    AccordionProps
} from './accordion';

import {
    AccordionPanel,
    AccordionPanelProps
} from './panel';

type AccordionType = typeof OriginalAccordion & {
    Panel: typeof AccordionPanel;
};

const Accordion = OriginalAccordion as AccordionType;

Accordion.Panel = AccordionPanel;

export {Accordion};

export type {
    AccordionProps,
    AccordionPanelProps
};
