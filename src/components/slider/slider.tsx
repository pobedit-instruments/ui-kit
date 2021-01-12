import React from 'react';

import AntSlider, {
    SliderBaseProps,
    SliderRangeProps,
    SliderSingleProps
} from 'antd/lib/slider';

const displayName = 'Slider';

type SliderProps = (SliderSingleProps & React.RefAttributes<unknown>) | (SliderRangeProps & React.RefAttributes<unknown>);

const Slider = React.forwardRef<unknown, SliderProps>(({...props}, ref) => (
    <AntSlider data-test={displayName} ref={ref} {...props} />
));

Slider.displayName = displayName;

export {Slider};

export type {
    SliderProps,
    SliderBaseProps,
    SliderRangeProps,
    SliderSingleProps
};

export type {
    SliderMarks,
    Visibles as SliderVisibles
} from 'antd/lib/slider';
