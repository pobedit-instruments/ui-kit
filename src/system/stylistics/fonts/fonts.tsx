import React from 'react';

import {
    Row,
    Col,
    Card,
    Typography
} from 'antd';

import style from './fonts.less';

const {Text, Title} = Typography;
const {Meta} = Card;

const sizeValues: number[] = [12, 14, 16, 20, 24, 30, 38];

const TypographicScale: React.FunctionComponent<void> = (): JSX.Element => (
    <>
        <Row align="bottom">
            <Col span={1}>
                <Text style={{fontSize: 12}}>a</Text>
            </Col>

            <Col span={1}>
                <Text>a</Text>
            </Col>

            <Col span={1}>
                <Title level={5}>a</Title>
            </Col>

            <Col span={1}>
                <Title level={4}>a</Title>
            </Col>

            <Col span={1}>
                <Title level={3}>a</Title>
            </Col>

            <Col span={1}>
                <Title level={2}>a</Title>
            </Col>

            <Col span={1}>
                <Title>a</Title>
            </Col>
        </Row>

        <Row>
            {
                sizeValues.map((value) => (
                    <Col span={1} key={value}>
                        <Text>{value}</Text>
                    </Col>
                ))
            }
        </Row>
    </>
);

const FontWeight: React.FunctionComponent<void> = (): JSX.Element => (
    <>
        <Row gutter={[20, 20]} className={style.card}>
            <Col span={6}>
                <Card>
                    <Text style={{fontSize: 68, fontWeight: 400}}>A</Text>
                    <Meta description="Regular 400" />
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                    <Text style={{fontSize: 68, fontWeight: 500}}>B</Text>
                    <Meta description="Medium 500" />
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                    <Text style={{fontSize: 68, fontWeight: 600}}>A</Text>
                    <Meta description="Semi-bold 600" />
                </Card>
            </Col>
        </Row>
    </>
);

export {
    TypographicScale,
    FontWeight
};
