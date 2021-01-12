import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import {AppstoreTwoTone} from '@ant-design/icons';
import {blue} from '@ant-design/colors';
import dedent from 'ts-dedent';
import {Typography} from 'antd';

import {
    Icon,
    IconProps
} from 'src/components/icon';

const {Title} = Typography;

const CustomIcon = () => <AppstoreTwoTone twoToneColor={blue.primary} />;

const Template: Story<IconProps> = ({...props}): JSX.Element => (
    <Title>
        <Icon component={CustomIcon} {...props} />
    </Title>
);

const CustomIconStory = Template.bind({});

CustomIconStory.storyName = 'Пользовательский тип';

CustomIconStory.parameters = {
    docs: {
        source: {
            code: dedent`
                const CustomIcon = () => (
                    <AppstoreTwoTone twoToneColor={blue.primary} />
                );

                return <Icon component={CustomIcon} />;
            `
        }
    }
};

export {CustomIconStory};
