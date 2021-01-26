import React from 'react';

import {
    Grid,
    Card,
    Space,
    Typography
} from 'src/components';

import style from './fonts.stories.less';

const {Text, Title} = Typography;
const {Column, Row} = Grid;

const sizeValues: number[] = [12, 14, 16, 20, 24, 30, 38];

const TypographicScale: React.FunctionComponent<void> = (): JSX.Element => (
    <>
        <Row align="bottom">
            <Column span={1}>
                <Text style={{fontSize: 12}}>a</Text>
            </Column>

            <Column span={1}>
                <Text>a</Text>
            </Column>

            <Column span={1}>
                <Title level={5}>a</Title>
            </Column>

            <Column span={1}>
                <Title level={4}>a</Title>
            </Column>

            <Column span={1}>
                <Title level={3}>a</Title>
            </Column>

            <Column span={1}>
                <Title level={2}>a</Title>
            </Column>

            <Column span={1}>
                <Title>a</Title>
            </Column>
        </Row>

        <Row>
            {
                sizeValues.map((value) => (
                    <Column span={1} key={value}>
                        <Text>{value}</Text>
                    </Column>
                ))
            }
        </Row>
    </>
);

const FontWeight: React.FunctionComponent<void> = (): JSX.Element => (
    <>
        <Row gutter={[20, 20]} className={style.fonts}>
            <Column span={6}>
                <Card>
                    <Space direction="vertical">
                        <Text style={{fontSize: 68, fontWeight: 400}}>A</Text>
                        <Text>Regular 400</Text>
                    </Space>
                </Card>
            </Column>

            <Column span={6}>
                <Card>
                    <Space direction="vertical">
                        <Text style={{fontSize: 68, fontWeight: 500}}>B</Text>
                        <Text>Medium 500</Text>
                    </Space>
                </Card>
            </Column>

            <Column span={6}>
                <Card>
                    <Space direction="vertical">
                        <Text style={{fontSize: 68, fontWeight: 600}}>A</Text>
                        <Text>Semi-bold 600</Text>
                    </Space>
                </Card>
            </Column>
        </Row>
    </>
);

export {
    TypographicScale,
    FontWeight
};
