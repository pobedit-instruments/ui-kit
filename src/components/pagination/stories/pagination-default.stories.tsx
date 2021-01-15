import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Pagination,
    PaginationProps
} from 'src/components/pagination';

const Template: Story<PaginationProps> = ({...props}): JSX.Element => (
    <div style={{height: 150}}>
        <Pagination total={1000}
                    showSizeChanger={true}
                    {...props}
        />
    </div>
);

const PaginationStory = Template.bind({});

PaginationStory.storyName = 'Базовое использование';

PaginationStory.parameters = {
    docs: {
        source: {
            code: dedent`
                <Pagination total={50}
                            showSizeChanger={true}
                            showQuickJumper={true}
                />
            `
        }
    }
};

export {PaginationStory};
