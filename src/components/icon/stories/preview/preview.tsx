import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import * as AntdIcons from '@ant-design/icons/lib/icons';

import {
    Row,
    Col,
    Typography,
    message
} from 'antd';

import {RadioChangeEvent} from 'antd/lib/radio/interface';

import {
    Filter,
    ThemeType
} from './filter';

import style from './preview.module.less';

const {Title, Paragraph} = Typography;

const handleCopyColor = (value: string) => {
    message.success(`Иконка ${value} скопирована в буфер обмена`);
};

const Preview: React.FunctionComponent<{}> = (): JSX.Element => {
    const icons = Object.entries(AntdIcons);
    const [type, setType] = React.useState(ThemeType.OUTLINED);

    const handleFilter = ({target}: RadioChangeEvent) => {
        setType(target.value);
    };

    return (
        <>
            <Filter onChange={handleFilter} />

            <Row className={style.icons}>
                {
                    icons.filter(([name]) => {
                        return name.includes(type);
                    })
                        .map(([name, Icon]) => (
                            <Col span={6} key={name} className={style.icons__item}>
                                <CopyToClipboard text={`<${name} />`} onCopy={handleCopyColor}>
                                    <div>
                                        <Title>
                                            <Icon />
                                        </Title>

                                        <Paragraph className={style.name}>{name}</Paragraph>
                                    </div>
                                </CopyToClipboard>
                            </Col>
                        ))
                }
            </Row>
        </>
    );
};

export {Preview};
