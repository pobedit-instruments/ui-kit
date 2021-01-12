import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import {SelectProps} from 'antd/es/select';

import {TextField} from 'src/components';
import {AutocompleteProps} from 'src/components/text-field/autocomplete';

const {
    Autocomplete,
    Search
} = TextField;

const getRandomInt = (min: number = 1, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const searchResult = (query: string) => {
    return Array.from({length: getRandomInt(1, 5)}, (item, index) => {
        const category = `${query}${index}`;

        return {
            value: category,
            label: (
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <span>
                              Найдено {query} on{' '}
                                <a
                                    href={`https://www.google.com/q?=${query}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                {category}
                              </a>
                            </span>

                    <span>{getRandomInt(100, 200)} результатов</span>
                </div>
            )
        };
    });
};

const Template: Story<AutocompleteProps> = ({...props}): JSX.Element => {
    const [options, setOptions] = React.useState<SelectProps<object>['options']>([]);

    const handleSearch = (value: string) => {
        setOptions(value ? searchResult(value) : []);
    };

    const onSelect = (value: string) => {
        console.log('onSelect', value);
    };

    return (
        <Autocomplete
            dropdownMatchSelectWidth={252}
            style={{width: 300}}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
            {...props}
        >
            <Search size="large"
                    placeholder="Введите текст"
                    enterButton
            />
        </Autocomplete>
    );
};

const AutocompleteStory = Template.bind({});

AutocompleteStory.storyName = 'Базовое использование';

export {AutocompleteStory};
