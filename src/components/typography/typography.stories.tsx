import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Typography,
    TypographyProps
} from 'src/components/typography';

import {
    Component,
    BasicElement,
    getStoryTitle
} from 'src/structure';

const {
    Text,
    Title,
    Paragraph,
    Link
} = Typography;

const title = getStoryTitle([
    Component.BASIC_ELEMENTS,
    BasicElement.TYPOGRAPHY
]);

const controls: Meta<TypographyProps> = {
    title,
    component: Typography,
    subcomponents: {
        'Text': Text,
        'Title': Title,
        'Paragraph': Paragraph,
        'Link': Link
    },

    parameters: {
        docs: {
            description: {
                component: dedent`
                    <br />

                    ### Название компонента

                    **Typography**

                    ### Дочерние компоненты

                    * **Typography.Link**
                    * ** Typography.Paragraph**
                    * **Typography.Text**
                    * **Typography.Title**
                `
            }
        }
    },

    argTypes: {
        code: {
            description: 'Код',
            table: {
                type: {
                    summary: 'boolean'
                }
            },

            defaultValue: false,

            control: {
                type: 'boolean'
            }
        },

        delete: {
            description: 'Перечеркнуто',
            table: {
                type: {
                    summary: 'boolean'
                }
            },

            defaultValue: false,

            control: {
                type: 'boolean'
            }
        },

        underline: {
            description: 'Нижнее подчеркивание',
            table: {
                type: {
                    summary: 'boolean'
                }
            },

            defaultValue: false,

            control: {
                type: 'boolean'
            }
        },

        disabled: {
            description: 'Заблокировано',
            table: {
                type: {
                    summary: 'boolean'
                }
            },

            defaultValue: false,

            control: {
                type: 'boolean'
            }
        },

        mark: {
            description: 'Пометки',
            table: {
                type: {
                    summary: 'boolean'
                }
            },

            defaultValue: false,

            control: {
                type: 'boolean'
            }
        },

        type: {
            description: 'Тип содержимого',
            table: {
                type: {
                    summary: 'string',
                    detail: '"secondary" | "success" | "warning" | "danger"'
                }
            },

            defaultValue: false,

            control: {
                type: 'select',
                options: [
                    'danger',
                    'secondary',
                    'success',
                    'warning'
                ]
            }
        },

        onChange: {
            description: 'Событие изменения содержимого',
            table: {
                type: {
                    summary: '(content: string) => void'
                }
            }
        },

        copyable: {
            description: 'Возможность копирования',
            table: {
                type: {
                    summary: 'Object',
                    detail: dedent `{
                        text?: string;
                        onCopy?: () => void;
                        icon?: React.ReactNode;
                        tooltips?: false | [ReactNode.ReactNode, ReactNode.ReactNode];
                    }`
                }
            },

            defaultValue: {
                tooltips: ['Скопировать', 'Скопировано']
            },

            control: {
                type: 'boolean'
            }
        },

        editable: {
            description: 'Возможность редактирования',
            table: {
                type: {
                    summary: 'Object',
                    detail: dedent `{
                        icon: React.ReactNode;
                        tooltip: boolean | React.ReactNode;
                        editing: boolean;
                        maxLength: number;
                        autoSize: boolean | {
                            minRows: number;
                            maxRows: number;
                        };
                        onStart: () => void;
                        onChange: (data: string) => void;
                    }`
                }
            },

            defaultValue: false,

            value: {
                tooltip: true
            },

            control: {
                type: 'boolean'
            }
        },

        ellipsis: {
            description: 'Добавление многоточия',
            table: {
                type: {
                    summary: 'Object',
                    detail: dedent `{
                        rows: number;
                        expandable: boolean;
                        suffix: string;
                        symbol: React.ReactNode;
                        onExpand: (event: Event) => void;
                        onEllipsis: (ellipsis: boolean) => void;
                    }`
                }
            },
            value: {
                rows: 2,
                expandable: true,
                symbol: 'Показать'
            },

            defaultValue: false,

            control: {
                type: 'boolean'
            }
        }
    }
};

export {TextStory} from './text/stories/text.stories';
export {TitleStory} from './title/stories/title.stories';
export {ParagraphStory} from './paragraph/stories/paragraph.stories';
export {LinkStory} from './link/stories/link.stories';

export default controls;
