import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    List,
    ListProps
} from 'src/components/list';

const {Item} = List;

const Template: Story<ListProps> = ({...props}): JSX.Element => (
    <List size="large"
          bordered={false}
          dataSource={[
              'Шекспир',
              'Лермонтов',
              'Набоков',
              'Пушкин',
              'Достоевский'
          ]}
          renderItem={
              (item: any) => <Item>{item}</Item>
          }
    />
);

const ListStory = Template.bind({});

ListStory.storyName = 'Базовое представление';

ListStory.parameters = {
    docs: {
        source: {
            code: dedent`
                <List size="large"
                      bordered={false}
                      dataSource={[
                          'Шекспир',
                          'Лермонтов',
                          'Набоков',
                          'Пушкин',
                          'Достоевский'
                      ]}
                      renderItem={
                          (item) => <Item>{item}</Item>
                      }
                />
            `
        }
    }
};

export {ListStory};
