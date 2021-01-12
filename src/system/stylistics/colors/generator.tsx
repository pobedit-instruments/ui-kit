import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import {
    Tooltip,
    message,
    Row,
    Col
} from 'antd';

import {
    generate
    // presetPalettes
} from '@ant-design/colors';

import style from './colors.less';

const handleCopyColor = (value: string) => {
    message.success(`Значение цвета "${value}" скопировано в буфер обмена`);
};

const DEFAULT_COLOR = '#ccc';

const PaletteGenerator: React.FunctionComponent<void> = (): JSX.Element => {
    // const {blue} = presetPalettes;
    const palette = generate(DEFAULT_COLOR);

    return (
        <Row>
            {
                palette.map((color, index) => {
                    const name = `color-${index + 1}`;

                    return (
                        <CopyToClipboard key={index} text={name} onCopy={handleCopyColor}>
                            <Tooltip title={color}>
                                <Col flex="auto" className={style.generatorValue} style={{backgroundColor: color}}>
                                    {name}
                                </Col>
                            </Tooltip>
                        </CopyToClipboard>
                    );
                })
            }
        </Row>
    );
};

export {PaletteGenerator};
