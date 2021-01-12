import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Card,
    Switch
} from 'src/components';

import {CardProps} from 'src/components/card';

const Template: Story<CardProps> = ({...props}): JSX.Element => {
    const [loading, setLoading] = React.useState<boolean>(false);

    const handleChange = (state: boolean) => setLoading(state);

    return (
        <Card title="Свадьба в Малиновке"
              loading={loading}
              extra={
                  <Switch onChange={handleChange} />
              }
              style={{ width: 300 }}
              {...props}
        >
            <p>Наполнение</p>
        </Card>
    );
}

const CardStory = Template.bind({});

CardStory.storyName = 'Стандартный вид';

export {CardStory};
