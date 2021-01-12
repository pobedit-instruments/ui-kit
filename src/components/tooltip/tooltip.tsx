import React from 'react';
import AntTooltip, {TooltipProps} from 'antd/lib/tooltip';

const displayName = 'Popover';

const Tooltip: React.FunctionComponent<TooltipProps> = ({children, ...props}) => (
    <AntTooltip data-test={displayName} {...props}>
        {children}
    </AntTooltip>
);

Tooltip.displayName = displayName;

export {Tooltip};
export type {TooltipProps};

export type {
    TooltipAlignConfig,
    AbstractTooltipProps,
    TooltipPlacement,
    TooltipPropsWithOverlay,
    TooltipPropsWithTitle,
    AdjustOverflow as TooltipAdjustOverflow,
    PlacementsConfig as TooltipPlacementsConfig,
    RenderFunction as TooltipRenderFunction
} from 'antd/lib/tooltip';

