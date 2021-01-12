import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Grid,
    GridRowProps
} from 'src/components/grid';

import style from './grid.stories.less';

const {Row, Column} = Grid;

const Template: Story<GridRowProps> = ({...props}): JSX.Element => (
    <>
        <Row className={style.col}>
            <Column span={24}>col</Column>
        </Row>

        <Row className={style.col}>
            <Column span={12}>col-12</Column>
            <Column span={12}>col-12</Column>
        </Row>

        <Row className={style.col}>
            <Column span={8}>col-8</Column>
            <Column span={8}>col-8</Column>
            <Column span={8}>col-8</Column>
        </Row>

        <Row className={style.col}>
            <Column span={6}>col-6</Column>
            <Column span={6}>col-6</Column>
            <Column span={6}>col-6</Column>
            <Column span={6}>col-6</Column>
        </Row>
    </>
);

const GridStory = Template.bind({});

GridStory.storyName = 'Горизонтальное расположение';

export {GridStory};
