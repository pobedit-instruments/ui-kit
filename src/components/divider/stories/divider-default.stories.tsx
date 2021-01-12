import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Divider,
    DividerProps
} from 'src/components/divider';

const Template: Story<DividerProps> = ({...props}): JSX.Element => (
    <>
        <pre>
            {
                dedent`
                Мистер
                Твистер,
                Бывший министр,
                Мистер
                Твистер,
                Делец и банкир,
                Владелец заводов,
                Газет, пароходов,
                Решил на досуге
                Объехать мир.`
            }
        </pre>

        <Divider {...props} />

        <pre>
            {
                dedent`
                — Отлично!—
                Воскликнула
                Дочь его Сюзи.—
                Давай побываем
                Б Советском Союзе!`
            }
        </pre>

        <Divider {...props}>Мистер Твистер</Divider>

        <pre>
            {
                dedent`
                Я буду питаться
                Зернистой икрой,
                Живую ловить осетрину,
                Кататься на тройке
                Над Волгой-рекой
                И бегать в колхоз
                По малину!`
            }
        </pre>
    </>
);

const DividerStory = Template.bind({});

DividerStory.storyName = 'Горизонтальный разделитель';

export {DividerStory};
