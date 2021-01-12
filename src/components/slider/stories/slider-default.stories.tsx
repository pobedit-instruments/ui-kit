import React  from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Slider,
    Space,
    Switch
} from 'src/components';

import {SliderProps} from 'src/components/slider';

const Template: Story<SliderProps> = ({...props}): JSX.Element => {
    const [disabled, setDisabled] = React.useState<boolean>(false);

    const handleDisabledChange = (value: boolean) => {
        setDisabled(value);
    };

    return (
        <>
            <Slider defaultValue={30}
                    disabled={disabled}
                    {...props}
            />

            <Slider defaultValue={[20, 50]}
                    disabled={disabled}
                    range={true}
                    {...props}
            />

            <Space>
                Заблокировать:
                <Switch size="small"
                        checked={disabled}
                        onChange={handleDisabledChange}
                />
            </Space>
        </>
    );
};

const SliderStory = Template.bind({});

SliderStory.storyName = 'Базовое использование';

export {SliderStory};
