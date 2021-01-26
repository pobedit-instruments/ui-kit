import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';
import {Product} from 'src/config';

import {
    Title,
    Subtitle,
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';

import {
    Component,
    BasicElement,
    getStoryTitle
} from 'src/structure';

import {Icon, IconProps} from 'src/components/icon';
import {Preview} from './stories/preview';

const title = getStoryTitle([
    Component.BASIC_ELEMENTS,
    BasicElement.ICON
]);

const controls: Meta<IconProps> = {
    title,
    component: Icon,

    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Primary />
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories />
                    <Preview />
                </>
            ),

            source: {
                code: dedent`
                    import React from 'react';
                    import {AppleOutlined} from '@ant-design/icons';
                    import {Icon} from '@${Product.NAME}/ui-kit';

                    const AppleIcon: React.FunctionComponent<Props> = (): JSX.Element => (
                        <Icon component={AppleOutlined} />
                    );
                `
            },

            description: {
                component: dedent`
                    <br />

                    ### Название компонента

                    **Icon**

                    Используйте компонент Icon, чтобы сохранить вертикальный ритм с другими компонентами.
                `
            }
        }
    },

    argTypes: {
        component: {
            description: 'Вставка компонента',
            table: {
                type: {
                    summary: 'ComponentType<CustomIconComponentProps>',
                    detail: dedent`
                        import {AppleOutlined} from '@ant-design/icons';

                        ...

                        <Icon component={AppleOutlined} />
                    `
                }
            }
        },
        rotate: {
            description: 'Повернуть элемент (не работает в IE 9)',
            defaultValue: 0,
            table: {
                type: {
                    summary: 'number'
                },
            },
            control: {
                type: 'number',
                step: 1
            }
        },
        spin: {
            description: 'Применить автоматическое вращение',
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: {
                    summary: false
                }
            },
            control: {
                type: 'boolean'
            }
        }
    }
};

export {IconStory} from './stories/icon-default.stories';
export {CustomIconStory} from './stories/icon-custom.stories';

export default controls;
