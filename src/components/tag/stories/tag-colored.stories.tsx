import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Divider,
    Tag
} from 'src/components';

import {TagProps} from 'src/components/tag';

const Template: Story<TagProps> = ({...props}): JSX.Element => {
    return (
        <>
            <Divider orientation="left">
                Предопределенные цвета
            </Divider>

            <div>
                <Tag color="magenta">Пурпурный</Tag>
                <Tag color="red">Красный</Tag>
                <Tag color="volcano">Вулканический</Tag>
                <Tag color="orange">Оранжевый</Tag>
                <Tag color="gold">Золотой</Tag>
                <Tag color="lime">Лимонный</Tag>
                <Tag color="green">Зеленый</Tag>
                <Tag color="cyan">Голубой</Tag>
                <Tag color="blue">Синий</Tag>
                <Tag color="geekblue">Ссылочный</Tag>
                <Tag color="purple">Фиолетовый</Tag>
            </div>

            <Divider orientation="left">
                Пользовательские цвета
            </Divider>

            <div>
                <Tag color="#f50">#f50</Tag>
                <Tag color="#2db7f5">#2db7f5</Tag>
                <Tag color="#87d068">#87d068</Tag>
                <Tag color="#108ee9">#108ee9</Tag>
            </div>
        </>
    );
};

const ColoredTagStory = Template.bind({});

ColoredTagStory.storyName = 'Цветные теги';

ColoredTagStory.parameters = {
    docs: {
        description: {
            story: '11 предопределенных цветов, из которых 8 неспектральных'
        }
    }
};

export {ColoredTagStory};
