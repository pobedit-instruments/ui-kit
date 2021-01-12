import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Tag,
    TagProps
} from 'src/components/tag';

const Template: Story<TagProps> = ({...props}): JSX.Element => {
    return (
        <>
            <Tag>Текстовый тег</Tag>

            <Tag>
                <a href="//gazprom-neft.ru">Ссылочный тег</a>
            </Tag>

            <Tag closable={true}>
                Закрываемый тег
            </Tag>
        </>
    );
};

const TagStory = Template.bind({});

TagStory.storyName = 'Базовое использование';

export {TagStory};
