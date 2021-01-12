import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import {presetPalettes} from '@ant-design/colors';

import {
    Tooltip,
    Typography,
    message,
    Row,
    Col
} from 'antd';

import style from './colors.less';

const {Title} = Typography;

const handleCopyColor = (value: string) => {
    message.success(`Значение цвета "${value}" скопировано в буфер обмена`);
};

const Palette: React.FunctionComponent<void> = (): JSX.Element => {
    const {grey, ...colors} = presetPalettes;
    const palette = Object.entries(colors);

    return (
        <Row gutter={24}>
            {
                palette.map(([name, colors]) => (
                    <Col span={8} key={name}>
                        <Title level={3} className={style.paletteTitle}>{name}</Title>

                        {
                            colors.map((value, index) => {
                                const color = `${name}-${index + 1}`;

                                return (
                                    <CopyToClipboard key={value} text={color} onCopy={handleCopyColor}>
                                        <Tooltip title={value} placement="right">
                                            <div className={style.colorName} style={{backgroundColor: value}}>
                                                {color}
                                            </div>
                                        </Tooltip>
                                    </CopyToClipboard>
                                );
                            })
                        }
                    </Col>
                ))
            }
        </Row>
    );
};

export {Palette};
