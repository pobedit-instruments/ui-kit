import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {Text, TextProps} from 'src/components/typography/text';
import style from './text.stories.less';

const Template: Story<TextProps> = (props): JSX.Element => (
    <Text {...props}>
        <pre className={style.pre}>
            {
                dedent`
                Немного лет тому назад,
                Там, где, сливаяся, шумят,
                Обнявшись, будто две сестры,
                Струи Арагвы и Куры,
                Был монастырь. Из-за горы
                И нынче видит пешеход
                Столбы обрушенных ворот,
                И башни, и церковный свод;
                Но не курится уж под ним
                Кадильниц благовонный дым,
                Не слышно пенье в поздний час
                Молящих иноков за нас.
                Теперь один старик седой,
                Развалин страж полуживой,
                Людьми и смертию забыт,
                Сметает пыль с могильных плит,
                Которых надпись говорит
                О славе прошлой — и о том,
                Как, удручен своим венцом,
                Такой-то царь, в такой-то год,
                Вручал России свой народ.`
            }
        </pre>
    </Text>
);

const TextStory = Template.bind({});

TextStory.storyName = 'Обычный текст';

TextStory.argTypes = {
    strong: {
        description: 'Выделить жирным',
        table: {
            type: {
                summary: 'boolean'
            }
        },

        TextValue: false,

        control: {
            type: 'boolean'
        }
    },

    keyboard: {
        description: 'Стиль клавиатуры',
        table: {
            type: {
                summary: 'boolean'
            }
        },

        TextValue: false,

        control: {
            type: 'boolean'
        }
    }
};

export {TextStory};
