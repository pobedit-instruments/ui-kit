import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Select,
    SelectProps,
    CustomTagProps
} from 'src/components/select';

import {Tag} from 'src/components';
import {CompactMenuStory} from '../../../menu/menu/stories/menu-compact.stories';

const options = [
    {
        value: 'gold'
    },
    {
        value: 'lime'
    },
    {
        value: 'green'
    },
    {
        value: 'cyan'
    }
];

const tagRender = (props: CustomTagProps): React.ReactElement => {
    const {label, value, closable, onClose} = props;

    return (
        <Tag color={value as string}
             closable={closable}
             onClose={onClose}
             style={{marginRight: 3}}
        >
            {label}
        </Tag>
    );
}

const Template: Story<SelectProps> = ({...props}): JSX.Element => (
    <Select
        mode="multiple"
        showArrow={true}
        tagRender={tagRender}
        defaultValue={['gold', 'cyan']}
        style={{width: '100%'}}
        options={options}
    />
);

const CustomSelectStory = Template.bind({});

CustomSelectStory.storyName = 'Пользовательский тип';

CompactMenuStory.parameters = {
    docs: {
        source: {
            code: dedent`
                const options = [
                    {
                        value: 'gold'
                    },
                    {
                        value: 'lime'
                    },
                    {
                        value: 'green'
                    },
                    {
                        value: 'cyan'
                    }
                ];

                const tagRender = (props: CustomTagProps) => {
                    const {label, value, closable, onClose} = props;

                    return (
                        <Tag color={value as string}
                             closable={closable}
                             onClose={onClose}
                             style={{marginRight: 3}}
                        >
                            {label}
                        </Tag>
                    );
                }

                const Template: Story<SelectProps> = ({...props}): JSX.Element => (
                    <Select
                        mode="multiple"
                        showArrow
                        tagRender={tagRender}
                        defaultValue={['gold', 'cyan']}
                        style={{width: '100%'}}
                        options={options}
                    />
                );
            `
        }
    }
};

export {CustomSelectStory};
