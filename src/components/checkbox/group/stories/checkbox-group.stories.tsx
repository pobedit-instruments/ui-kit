import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Checkbox,
    Divider
} from 'src/components';

import {
    CheckboxGroupProps,
    CheckboxChangeEvent,
} from 'src/components/checkbox';

type CheckboxValueType = Array<string | number | boolean>;

const {Group: CheckboxGroup} = Checkbox;

const plainOptions = ['Яблоко', 'Персик', 'Банан'];
const defaultCheckedList = ['Яблоко', 'Банан'];

const Template: Story<CheckboxGroupProps> = ({...props}): JSX.Element => {
    const [checkedList, setCheckedList] = React.useState<CheckboxValueType>(defaultCheckedList);
    const [indeterminate, setIndeterminate] = React.useState<boolean>(true);
    const [checkAll, setCheckAll] = React.useState<boolean>(false);

    const onChange = (list: CheckboxValueType): void => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = ({target}: CheckboxChangeEvent): void => {
        setCheckedList(target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(target.checked);
    };

    return (
        <>
            <Checkbox indeterminate={indeterminate}
                      onChange={onCheckAllChange}
                      checked={checkAll}
            >
                Выбрать все
            </Checkbox>

            <Divider />

            <CheckboxGroup options={plainOptions}
                           value={checkedList}
                           onChange={onChange}
                           {...props}
            >
            </CheckboxGroup>

            <Checkbox disabled={true}
                      checked={true}>
                Яблоко
            </Checkbox>
        </>
    );
}

const CheckboxGroupStory = Template.bind({});

CheckboxGroupStory.storyName = 'Группа элементов';

export {CheckboxGroupStory};
